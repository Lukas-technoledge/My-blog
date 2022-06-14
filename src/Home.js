import { useState } from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([
    {title: 'life of lukas', body: 'lorem ipsum.... ', author: 'kosi', id: 1},
    {title: 'life of lukas', body: 'lorem ipsum.... ', author: 'oluoma', id: 2},
    {title: 'life of lukas', body: 'lorem ipsum.... ', author: '', id: 3}])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
    ))}
        </div>
     );
}
 
export default Home;