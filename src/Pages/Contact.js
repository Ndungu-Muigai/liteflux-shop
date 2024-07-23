import { useState } from "react";
import { toast } from 'react-toastify'

import Footer from "../Components/Footer"

const Contact = () => 
{
    const [formData, setFormData]=useState(
    {
        name: '',
        email: '',
        subject: "",
        message: '',
        toEmail: "ndungu.muigai01@gmail.com"
    })

    const handleChange = e => setFormData({...formData,[e.target.id]: e.target.value})

    const handleSubmit = e =>
    {
        e.preventDefault()

        fetch("https://flask-email-api.vercel.app/send-email",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(message => 
        {
            message.success
            ?
                toast.success(`${message.success}. Our Customer care agents will be in contact with you soon.`,
                    {
                        onClose: ()=> setFormData(
                        {
                            name: '',
                            email: '',
                            subject: "",
                            message: '',
                            toEmail: "ndungu.muigai01@gmail.com"
                        })
                    })
                :
                    toast.error(message.error)
        })
    }
    return ( 
        <>
            <div className="flex items-center justify-center">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h1 className="text-2xl font-bold text-center">Send us an email</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="block font-bold mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" placeholder="Your Name" required/>
                        </div>
                        <div className="mb-2">
                            <label className="block font-bold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" placeholder="Your Email Address" required/>
                        </div>
                        <div className="mb-2">
                            <label className="block font-bold mb-2" htmlFor="subject">Subject</label>
                            <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" placeholder="Subject" required/>
                        </div>
                        <div className="mb-2">
                            <label className="block font-bold mb-2" htmlFor="message">Message</label>
                            <textarea id="message" value={formData.message} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="btn bg-background hover:bg-background text-white px-4 py-1 rounded-lg focus:outline-none">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="2xl:fixed 2xl:w-full 2xl:bottom-0">
                <Footer/>
            </div>
        </>
     );
}
 
export default Contact;