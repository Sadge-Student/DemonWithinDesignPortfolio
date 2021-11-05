import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import groq from "groq";
import client from "../client";

export default function Posts({ posts }) {
  return (
    <Layout>
      <BlogPost posts={posts} />
      <style global jsx>{``}</style>
    </Layout>
  );
}

Posts.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == 'post' && defined(mainImage)]{ 
      ...,
      "mainImage": mainImage.asset->
  }
    `),
});
