import "../styles/contact.css"
import Link from "next/link"
import {MdEmail,MdForum} from "react-icons/md";
import {AiFillWechat} from "react-icons/ai";

const ContactCard = () => {
  return (
    <div className="section">
        <div className="container">
            <div className="grid">
                <div className="grid_card">
                    <i><MdEmail /></i>
                    <h2>Email</h2>
                    <p>Monday to Friday Expected</p>
                    <p className="last_para">response time: 72hours</p>
                    <Link href="/">Send Email <span>-&gt;</span></Link>
                </div>
                <div className="grid_card">
                    <i><AiFillWechat/></i>
                    <h2>LiveChat</h2>
                    <p>Weekdays: 9am-6pm ET</p>
                    <p className="last_para">Weekends: 9AM-5PM ET</p>
                    <Link href="/">Chat Now <span>-&gt;</span></Link>
                </div>
                <div className="grid_card">
                    <i><MdForum /></i>
                    <h2>Community Forum</h2>
                    <p>Monday to Friday Expected</p>
                    <p className="last_para">response time: 72hours</p>
                    <Link href="/">Ask the Community<span>-&gt;</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard