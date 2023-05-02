import { BsLinkedin,BsTwitter,BsYoutube,BsInstagram,BsFacebook } from "react-icons/bs"
import Link from "next/link"
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="content">
            <div className="top">
                <div className="logo-details">
                    <span className="logo_name">Adithya N G</span>
                </div>
                <div className="media-icons">
                    <Link href="https://www.linkedin.com/in/adithya-ng-baba34226/" target='_blank'>
                        <i><BsFacebook /></i>
                    </Link> 
                    <Link href="https://github.com/Adithya2310" target='_blank'>
                        <i><BsInstagram /> </i>
                    </Link>
                    <Link href="https://twitter.com/_Adithya_n_g" target='_blank'>
                        <i><BsTwitter /></i>
                    </Link>
                    <Link href="/">
                        <i><BsLinkedin /></i>
                    </Link>
                    <Link href="/">
                        <i><BsYoutube /></i>
                    </Link>
                </div>
            </div>
            <div className="link-boxes">
                <ul className="box">
                    <li className="link_name">Company</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
                <ul className="box">
                    <li className="link_name">Services</li>
                    <li><a href="#">App design</a></li>
                    <li><a href="#">Web design</a></li>
                    <li><a href="#">Logo design</a></li>
                    <li><a href="#">Banner design</a></li>
                </ul>
                <ul className="box">
                    <li className="link_name">Account</li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">My account</a></li>
                    <li><a href="#">Prefrences</a></li>
                    <li><a href="#">Purchase</a></li>
                </ul>
                <ul className="box">
                    <li className="link_name">Courses</li>
                    <li><a href="#">HTML & CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">Photography</a></li>
                    <li><a href="#">Photoshop</a></li>
                </ul>
                <ul className="box input-box">
                    <li className="link_name">Subscribe</li>
                    <li><input type="text" placeholder="Enter your Email" /></li>
                    <li><input className="subscribe_button" type="button" value="Subscribe" /></li>
                </ul>
            </div>
        </div>
        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright © 2023 
                Adithya N G All rights reserved</span>
                <span className="policy_terms">
                    <Link href="/">Privacy policy</Link>
                    <Link href="/">Terms & Conditions</Link>
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer