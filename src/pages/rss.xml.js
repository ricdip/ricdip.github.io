import rss from '@astrojs/rss';
import { markdownDateStringToDate } from '../utils/dateUtils';
import Consts from '../consts';

const postImportResult = import.meta.glob('../posts/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  // <title> field in output XML
  title: Consts.rssTitleField,
  // <description> field in output XML
  description: Consts.rssDescriptionField,
  // base URL for RSS <item> links
  site: Consts.baseUrl + '/',
  // list of <item> in output XML
  items: posts.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    link: Consts.blogUrl + post.frontmatter.slug,
    pubDate: markdownDateStringToDate(post.frontmatter.date).toISOString()
  }))
});