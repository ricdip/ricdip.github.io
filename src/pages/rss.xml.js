import rss from '@astrojs/rss';
import { markdownDateStringToDate } from '../utils/dateUtils';

const postImportResult = import.meta.glob('../posts/*.md', { eager: true });
const posts = Object.values(postImportResult);

const siteBaseUrl = 'https://ricdip.github.io/';
const siteBlogUrl = siteBaseUrl + 'blog/';

export const get = () => rss({
  // <title> field in output XML
  title: 'Blog | Riccardo Armando Di Prinzio',
  // <description> field in output XML
  description: 'Articles about my work, programming and computer science',
  // base URL for RSS <item> links
  site: siteBaseUrl,
  // list of <item> in output XML
  items: posts.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    link: siteBlogUrl + post.frontmatter.slug,
    pubDate: markdownDateStringToDate(post.frontmatter.date).toISOString()
  }))
});