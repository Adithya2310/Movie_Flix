"use client"
import { useState } from "react";
import "../styles/contact.css"

const ContactForm = () => {

    // to store the form values
    const [form, setForm] = useState({
        username:"",
        email:"",
        message:""
    });
    const [status, setStatus] = useState(null);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm((prev)=>{
            return {...prev,[name]:value}
        })
    }

    // to handle the submission of the contact form
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        console.log("here",form);
        try{
            const responsce=await fetch('/api/contact',{
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body:JSON.stringify({
                    "username":form.username,
                    "email":form.email,
                    "message":form.message
                })
            })
            if(responsce.status===200)
            {
                setForm({
                    username:"",
                    email:"",
                    message:""
                });
                setStatus("your query is submitted think you");
            }
            else{
                setStatus("There was a Server error try again")
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }
  return (
    <form onSubmit={handleSubmit} className="contact_form">
        <div className="input_field">
            <label htmlFor="username" className="label">
                Enter Your Name
                <input type="text" name="username" placeholder="Enter Your name" value={form.username} onChange={handleChange} required={true}/>
            </label>
        </div>
        <div className="input_field">
            <label htmlFor="email" className="label">
                Email
                <input type="text" name="email" placeholder="Enter your Email" value={form.email} onChange={handleChange} required={true}/>
            </label>
        </div>
        <div className="input_field">
            <label htmlFor="message" className="label">
                Message
                <textarea type="text" name="message" placeholder="Enter Your Message" rows={5} value={form.message} onChange={handleChange} required={true}/>
            </label>
        </div>
        <div>
            {status&&<p style={{color:"green"}}>{status}</p>}
            <button type="submit">Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm