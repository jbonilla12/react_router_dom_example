import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


const BlogDetails = () => { 
    const params = useParams()

    const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    
    if(loading) return <p>Loading.....</p>
    
    if (error) return <p>error....</p>
    return(
        <div>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog" className="btn btn-dark">Volver</Link>

        </div>
    )
 }
 export default BlogDetails