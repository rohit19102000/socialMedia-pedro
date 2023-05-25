import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../Config/firebase'
import { useEffect, useState } from 'react'
import  Post  from './Post'


interface Post{
  id:string,
  userId:string,
  title:string,
  usernames:string,
  description:string
}


export default function Home() {
  const [postsList,setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db,"posts")
 
 
 
  const getPosts =  async ()=>{
    const data = await getDocs(postsRef)
    setPostsList(data.docs.map((doc) => ({...doc.data(),id:doc.id})) as Post[]);
  }
 useEffect(() => {
   getPosts();
 },[]);
  
 
 return <div>{postsList?.map((post,i) => <Post key={i+1}/>)} </div>
}
