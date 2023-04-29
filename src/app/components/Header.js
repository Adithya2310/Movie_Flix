import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";
import Nav from "./Nav";


const Header = () => {
    return (
        <header className="main_header">
            <div className="navbar_brand">
              <Image src="/logo (1).png" alt="Logo" height={40} width={150}/>
            </div>
            <Nav/> 
        </header>
    );
};

export default Header;