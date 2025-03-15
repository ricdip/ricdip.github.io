# ricdip personal website
My website developed with [Astro](https://astro.build/)

## Dependencies
- [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/): Astro integration with [Tailwind CSS](https://tailwindcss.com/)

- [@astrojs/image](https://docs.astro.build/en/guides/integrations-guide/image/) and sharp: Astro integration that optimizes images

- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/): Astro integration for automatic sitemap generation

- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin): Typographic defaults that I used for the Markdown rendered files

- [@astrojs/rss](https://docs.astro.build/en/guides/rss/): Package for automatic RSS feed generation

- [flowbite](https://flowbite.com/): Free UI components on top of Tailwind CSS 

## Commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Quick Start
```bash
user@host:~$ npm install
user@host:~$ npm run dev
```

## Preview
```bash
user@host:~$ npm run build
user@host:~$ npx browser-sync start --server
```

## Using Nix flake
```bash
user@host:~$ nix develop
```
