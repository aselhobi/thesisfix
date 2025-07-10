import React, { useState } from 'react';
import { db } from '../main.jsx';
import { collection, addDoc } from 'firebase/firestore';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add a new document with a generated ID to the "contacts" collection
      await addDoc(collection(db, 'contacts'), formData);
      console.log('Form Data Submitted:', formData);
      // Optionally, reset the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Say Hello send us your thoughts about our platform or share your ideas with our Team!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 focus:outline-none py-2"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 focus:outline-none py-2"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 focus:outline-none py-2"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 focus:outline-none py-2"
              >
                <option value="">Subject</option>
                <option value="inquiry">Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </div>
          <div className="px-2">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 focus:outline-none py-2"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-12 rounded hover:bg-gray-700"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
