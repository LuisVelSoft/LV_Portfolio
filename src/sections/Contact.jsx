import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/Models/ContactExperience';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          message: formData.message
          
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }
   
  return (
    <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
                title="Connect for Advisory or Leadership Support"
                sub="📧 Contact Information"
            />
            <div className="mt-16 grid-12-cols">
                {/* Contact form - left side */}
                <div className="xl:col-span-6 xl:col-start-4">
                    <div className="flex-center card-border rounded-xl p-10">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"    
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={handleChange} 
                                    required
                                />
                            </div>
                            {submitMessage && (
                                <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                                    {submitMessage}
                                </p>
                            )}
                            <button type="submit" disabled={isSubmitting}>
                                <div className="cta-button group">
                                    <div className="bg-circle"/>
                                    <p className="text">{isSubmitting ? 'Sending...' : 'Send Message'}</p>
                                    <div className="arrow-wrapper">
                                        <img src="/images/arrow-down.svg" alt="arrow" />
                                    </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
                {/* 3D Experience- right side */}
                {/* <div className="xl:col-span-7 min-h-96">
                    <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
                        <ContactExperience/>
                    </div>
                </div> */}
               
            </div>
        </div>
    </section>
  )
}

export default Contact