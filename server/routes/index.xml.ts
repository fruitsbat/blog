import { serverQueryContent } from "#content/server";
import { Feed } from "feed";
import { Enclosure } from "feed/lib/typings";

export default defineEventHandler(async (event) => {
  // query blogposts
  const documents = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();
  const blogposts = documents.filter(
    (doc) => doc?._path?.includes("/log") && !doc?._partial
  );

  // generate feed
  const feed = new Feed({
    title: "blog of zoe bat",
    copyright: "all rights reserved",
    id: "https://zoe.kittycat.homes/index.xml",
  });

  blogposts.forEach((post) => {
    const date: Date = new Date(Date.parse(post.date));
    feed.addItem({
      title: post.title ?? "no title",
      link: `https://zoe.kittycat.homes${post._path}`,
      date: date,
      image:
        post.image === undefined || post.image_description === undefined
          ? undefined
          : ({
              url: `https://zoe.kittycat.homes${post.image}`,
              title: post.image_description,
            } as Enclosure),
    });
  });

  const feedString = feed.rss2();
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
