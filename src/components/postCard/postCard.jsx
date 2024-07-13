import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"
const postCard = ({posts}) => {
  return (
    <div className={styles.container}>
       <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/18004648/pexels-photo-18004648/free-photo-of-close-up-of-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""className={styles.img2} fill/> 
        </div>
        <span className={styles.date}>01.01.2024</span>
       </div>
       <div className={styles.bottom}>
        <h1 className={styles.title}>{posts.title}</h1>
        <p className={styles.desc}>{posts.body}</p>
        <Link href={`/blog/${posts.id}`} className={styles.link}>READ MORE</Link>
       </div>

    </div>
  )
}

export default postCard
