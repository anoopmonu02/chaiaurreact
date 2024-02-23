import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {})

    //One way of doing
    //appwriteService.getPosts([]).then((posts) => setPosts(posts))

    //Second way of doing
    appwriteService.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard post={post} />
                    </div>                    
                ))}
            </div>            
        </Container>
    </div>
  )
}

export default AllPosts