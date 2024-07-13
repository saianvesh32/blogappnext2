import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
// const getData=  async(slug)=>{
//   const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if(!res.ok){
//      throw new Error("Something went wrong")
//   }
//   return res.json()
//  }


const SinglePostPage = async({params}) => {
  console.log(params);
  const {slug}= params;
//fetch data with an api
  // const post = await getData(slug);

  //fetch data without an api
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      <Image className={styles.img} src="https://images.pexels.com/photos/18004648/pexels-photo-18004648/free-photo-of-close-up-of-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill/>
     </div>
     <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.details}>
                <Image className={styles.avatar} src="https://images.pexels.com/photos/18004648/pexels-photo-18004648/free-photo-of-close-up-of-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  alt="" width={50} height={50}/>
                { post &&  (<Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId}/>
                </Suspense>)}
                <div className={styles.detailText}>
                   <span className={styles.detailTitle}>Published</span>
                   <span className={styles.detailValue}>01.01.2024</span>
                </div>
          </div>
          <div className={styles.content}>
            {post.body}
          </div>
     </div>
    </div>
  )
}

export default SinglePostPage
