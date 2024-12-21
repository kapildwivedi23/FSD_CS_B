import { Link } from "react-router-dom"
import Header from "./Header"
import Register from "./Register"
import Footer from "./Footer"




function Home() {
    return (
        <div>
            <h1><Header /></h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}
export default Home