---
title: Astro blog with Markdown pages as posts
excerpt: A description of the steps I took to enable Markdown pages in my Astro blog with Tailwind CSS
date: 05-01-2023
slug: astro-blog-markdown-pages
tags: Astro, Markdown, Tailwind CSS
lang: en
locale: en_US
---

# Astro blog with Markdown pages

The following sequence of steps enabled Markdown pages on my Astro blog with Tailwind CSS.

## Creating the post example files

1. Create the `posts` directory inside `src`
2. Write some `post.md` files in Markdown syntax inside `src/posts`: we will use them to test the proper functioning of the integration

```
src
├── components
│   └── ...
├── layouts
│   └── ...
├── pages
│   └── ...
├── posts
│   ├── post-1.md
│   ├── post-2.md
│   └── ...
└── ...
```

3. Here is an example of a `post.md` file:
    - We have the `frontmatter` section (between `---` characters) and the actual Markdown content

```md
---
title: Title of the post
excerpt: Short description of the post
date: 30-12-2022
slug: post-clean-url
---

# H1 heading

lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.
```

## Creating the blog page

1. Create the `blog` directory inside `src/pages`
2. Create `index.astro` file inside `src/pages/blog`:
3. Within the blog page:
    - We fetch all the posts located within `src/posts` using the `Astro.glob()` function
    - We show the posts to the user

```jsx
---
import Layout from "../../layouts/Layout.astro";
import Post from "../../components/Post.astro";

const posts = await Astro.glob("../../posts/*.md");
---

<Layout title="Blog">
    <h2>Blog</h2>
    {posts.map(post => (
      <Post title={post.frontmatter.title} excerpt={post.frontmatter.excerpt} />
    ))}  
</Layout>
```

## Creating the post page

1. Create `[slug].astro` file inside `src/pages/blog` (the special name of the file enables us to generate pages dynamically)
2. Within the post page:
    - We configure the Dynamic Page Routing by defining the `getStaticPaths()` function
    - We use the `Content` component to show the full rendered content of the Markdown file to the user

```jsx
---
import Layout from "../../layouts/Layout.astro";

export async function getStaticPaths() {
  const posts = await Astro.glob("../../posts/*.md");

  return posts.map(post => ({
    params: {
      slug: post.frontmatter.slug
    },
    props: {
      post
    }
  }));
}

const { Content, frontmatter } = Astro.props.post;
---

<Layout title={frontmatter.title}>
  <div>
    <Content />
  </div>
</Layout>
```

## Fixing the styles

1. Install the `typography` plugin by running the following command (I used `npm`):

```bash
user@host:~$ npm install @tailwindcss/typography
```

2. Add the installed plugin to the `tailwind.config.js` file:

```js
module.exports = {
  plugins: [
	  require('@tailwindcss/typography')
  ],
}
```

3. Add the `prose` class to enable typography styles to the rendered Markdown files
    - Add also the `dark:prose-invert` class to enable the dark mode version

```jsx
<Layout title={frontmatter.title}>
  <div class="prose dark:prose-invert">
    <Content />
  </div>
</Layout>
```

4. If you want the content to fill the width of its container, add also the `max-w-none` class

```jsx
<Layout title={frontmatter.title}>
  <div class="prose dark:prose-invert max-w-none">
    <Content />
  </div>
</Layout>
```

## Checking results

Access the post pages from the blog page and check if the pages load correctly and if the styles are applied to them. If so, the integration was successful.

# References

1. Astro Docs. [Markdown & MDX](https://docs.astro.build/en/guides/markdown-content/) (Accessed: 05-01-2023)
2. Tailwind CSS. [Typography Plugin](https://tailwindcss.com/docs/typography-plugin/) (Accessed: 05-01-2023)