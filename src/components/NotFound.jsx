import { Link } from "react-router-dom";
const NotFound = () => { 
    return(
        <>
            <div>404 Not Found </div>
            <Link to="/" className="btn btn-dark">Volver al inicio</Link>
        </>
    )
}
export default NotFound;