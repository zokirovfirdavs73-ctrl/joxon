import './navbar.css'
import { Search } from 'lucide-react';
import logo from '../assets/logo.png'
export default function Navbar() {
    return (
        <>
            <header>
                <img src={logo} alt="" />
                <div className="header_text">
                    <input type="search" placeholder='Serach items'  /> 
                    <button className='add'>0 Items Added</button>
                    <button>Login or Sign Up</button>
                </div>
            </header>

            <nav>
                <ul>
                    <li>Features </li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </nav>
        </>
    )
}   