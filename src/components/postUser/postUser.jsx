import styles from "./postUser.module.css"
import { getUser } from "@/lib/data";
// const getData=  async(userid)=>{
//     const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`,{cache:"no-store"});
//     if(!res.ok){
//        throw new Error("Something went wrong")
//     }
//     return res.json()
//    }
  
const postUser = async({userId}) => {
  //fetch data with an api
    // const post = await getData(userId)

    //fetch data without an api
    const user = await getUser(userId);
    console.log(user)
  return (
    <div className={styles.container}>
         <span className={styles.title}>Author</span>
         <span className={styles.username}>{user.name}</span>
    </div>
  )
}

export default postUser
