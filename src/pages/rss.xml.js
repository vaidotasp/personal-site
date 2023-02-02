import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
	const posts = await getCollection("posts");
	return rss({
		title: "VP Posts",
		description: "VP Posts Corner",
		site: "http://www.vaidotas.dev",
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`
		}))
	});
}
