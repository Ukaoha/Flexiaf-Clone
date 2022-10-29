import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (  
        <div className="about">
        <h1>This page is for nested routes: check on our customers</h1>
        <input type="search" placeholder="Search Products"/>

        <nav className="nav-about">
            <Link to="customers">Customers</Link>
            <Link to="products">Products</Link>
            
            </nav>
            <Outlet/>
        </div>
    );
}
 
export default About;