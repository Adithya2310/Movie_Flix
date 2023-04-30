import "../styles/contact.css";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div classname="container">
      <h1 className="contact_header">Contact Us</h1>
      <ContactCard />
      <section className="contact_section">
        <h2>We would love to hear <span>from you</span></h2>
        <ContactForm/>
      </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9776449725528!2d77.56398017494233!3d12.909158287400457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1682879750719!5m2!1sen!2sin" width={"100%"} height="400" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  )
}

export default Contact