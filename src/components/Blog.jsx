import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => { 

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')

    if(loading) return <p>Loading.....</p>
    if (error) return <p>error....</p>
    return(
        <div>
            <h1>Blog</h1>
            <ul className="list-group">
                {
                    data.map(item=>(
                        <Link className="list-group-item" to={`/blog/${item.id}`} key={item.id}>{item.id} - {item.title}</Link>
                    ))
                }
            </ul>
        </div>
    )
 }
 export default Blog;