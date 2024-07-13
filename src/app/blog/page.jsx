import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";
// const getData=  async()=>{
//   const res= await fetch("https://jsonplaceholder.typicode.com/posts");
//   if(!res.ok){
//      throw new Error("Something went wrong")
//   }
//   return res.json()
//  }
 
const BlogPage = async() => {
  //fetch data with an api
//  const posts= await getData();


 //fetch data without an api
const posts= await getPosts();
  console.log(posts)
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
