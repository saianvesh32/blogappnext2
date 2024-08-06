import next from "next";
import styles from "./blog.module.css"
import PostCard from "../../components/postCard/postCard"
// import { getPosts } from "@/lib/data";
const getData = async () => {
  try {
      const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:10}});
      
      if (!res.ok) {
          throw new Error("Failed to fetch data");
      }

      return res.json();
  } catch (error) {
      console.error("Error fetching data:", error.message);
      throw new Error("Failed to fetch data");
  }
};


const BlogPage = async() => {
  //fetch data with an api
 const posts= await getData();


 //fetch data without an api
// const posts= await getPosts();
  // console.log(posts)
  return (
    <div className={styles.container}>
    {
      posts.map((post)=>(
        <div className={styles.post} key={post.id}>
            <PostCard posts={post}/>
           </div>
      ))
    }
       
  </div>
  )
}

export default BlogPage
