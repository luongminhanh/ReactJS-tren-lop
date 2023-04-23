import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserLists = ({isActive, userName}) => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(users);
            setUsers(users);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getPosts = async () => {
        try {
            const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
        getPosts();
    }, [])
  return (
    <div>

    </div>
  )
}

export default UserLists