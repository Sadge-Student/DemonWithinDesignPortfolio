import Link from "next/link";
import style from "../css/blogpost.module.css";
import Tilt from "react-parallax-tilt";
import groq from "groq";

function BlogPost(props) {

  const { posts = [] } = props;
  return (
    <div className={style.blogpost}>
      {posts.map(
        ({
          _id,
          title = "",
          slug = "",
          mainImage,
          _createdAt = "",
          tags = [],
          subsection = "",
        }) =>
          slug && (
            <Tilt id="nam" className={style.post} key={_id}>
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a className={style.link}>
                  <div className={style.pixelfont}>
                    <span className={style.title}>{title}</span>
                    {/* <span className={style.date}>{_createdAt}</span> */}
                    <div className={style.pixelfont}>
                      <span className={style.hheading}>Tags</span>
                    </div>
                    <div className={style.wrapper}>
                      <p className={style.subsection}>{subsection}</p>
                    </div>
                    <div className={style.hcontainer}>
                      <span className={style.hashtag}>{tags[0]}</span>
                      <span className={style.hashtag}>{tags[1]}</span>
                      <span className={style.hashtag}>{tags[2]}</span>
                    </div>
                    <div className={style.overlay}></div>
                    <img
                      alt={_id}
                      className={style.image}
                      src={`${mainImage.url}`}
                    />
                  </div>
                </a>
              </Link>
            </Tilt>
          )
      )}
    </div>
  );
}

export default BlogPost;
