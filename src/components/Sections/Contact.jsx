import emailjs from "emailjs-com"
import {useState} from "react";

export const Contact =() => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    })

    const handleSubmit = (e) => {
       e.preventDefault()

       emailjs
           .sendForm(
               import.meta.env.VITE_SERVICE_ID,
               import.meta.env.vite_TEMPLATE_ID,
               e.target,
               import.meta.env.VITE_PUBLIC_KEY
           ).then(() => {
           alert("message successfully sent!");
           setFormData({name: "", email: "", message: ""});
       }).catch(()=> alert("Oops! Something went wrong, please try again!"));
   }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-4 w-150">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
              text-transparent text-center">
                  Get In Touch
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                      placeholder="Enter your name"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                  <div className="relative">
                      <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                      placeholder="example@gmail.com"
                      onChange={(e) =>setFormData({...formData, email: e.target.value}) }
                      />
                  </div>

                  <div className="relative">
                      <textarea
                          id="message"
                          name="message"
                          required
                          rows="5"
                          value={formData.message}
                          className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                          placeholder="your message"
                          onChange={(e) => setFormData({...formData, message: e.target.value}) }
                      />
                  </div>

                  <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 roounded font-medium transition relative overflow-hidden hover:-transition-y-0.5
                  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
              </form>
            </div>
        </section>
    )
}