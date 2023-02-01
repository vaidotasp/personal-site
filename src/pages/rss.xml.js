import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
// import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const posts = await getCollection("posts");
	return rss({
		title: "SITE_TITLE",
		description: "SITE_DESCRIPTION",
		site: "http://www.google.com",
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`
		}))
	});
}
