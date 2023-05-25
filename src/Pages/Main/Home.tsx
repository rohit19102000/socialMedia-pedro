import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../Config/firebase'
import { useEffect, useState } from 'react'
import { Post }  from './Post'


export interface Post{
  id:string,
  userId:string,
  title:string,
  username:string,
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
  
 
 return <div>{postsList?.map((post,i) => <Post post={post} key={i+1}/>)} </div>
}
