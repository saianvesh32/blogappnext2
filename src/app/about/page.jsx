import Image from "next/image"
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    // <div>
    //   <div className={styles.imgContainer}>
    //   </div>
    // </div>
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title1}>About Agency</h1>
          <h1 className={styles.title2}>We create digital ideas that are bigger,bolder,braver and better.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo dolorem a fuga autem deleniti dignissimos eveniet dolorum ad, veniam nesciunt ea vel odio numquam officia sapiente architecto inventore nemo deserunt natus. Hic in quibusdam non consequuntur sint veniam fuga.</p>
          <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>

        </div>
        <div className={styles.imageContainer}>
           <Image src="/about.png" alt="" className={styles.img} fill/>

        </div>
    </div>
  )
}

export default AboutPage
