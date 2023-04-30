import "../styles/contact.css"

const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/mgebdvdp" method="POST" className="contact_form">
        <div className="input_field">
            <label htmlFor="username" className="label">
                Enter Your Name
                <input type="text" name="username" placeholder="Enter Your name"/>
            </label>
        </div>
        <div className="input_field">
            <label htmlFor="email" className="label">
                Email
                <input type="text" name="email" placeholder="Enter your Email"/>
            </label>
        </div>
        <div className="input_field">
            <label htmlFor="message" className="label">
                Message
                <textarea type="text" name="message" placeholder="Enter Your Message" rows={5}/>
            </label>
        </div>
        <div>
            <button type="submit">Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm