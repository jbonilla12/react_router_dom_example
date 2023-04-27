import { Outlet } from "react-router-dom";

const LayoutPublic = () => { 
    return(
        <div className="container">
            <Outlet/>
            <footer>Este es e footer</footer>
        </div>
    )
 }
 export default LayoutPublic;