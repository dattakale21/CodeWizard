// src/components/Contact.js

import React from 'react';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import './contact.css'; // Import the external CSS file

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData); // Convert FormData to a plain object

        // Send data to Formspree
        fetch('https://formspree.io/f/mbjndddg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert data to JSON
        })
            .then((response) => {
                if (response.ok) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Message Sent Successfully!',
                        icon: 'success',
                    });
                    form.reset(); // Reset the form after successful submission
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There was an issue sending the email.',
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There was an issue sending the email.',
                });
            });
    };

    return (
        <section className="hero bg-cover bg-center h-screen flex flex-col items-center justify-center text-center w-full contact-section">
            <Navbar /> {/* Render Navbar component */}

            <h2 className="contact-heading">
                Contact <span className="text-teal-500">Us!</span>
            </h2>

            {/* Contact Form */}
            <form
                id="myForm"
                onSubmit={handleSubmit} // Handle form submission
                className="contact-form" // Use external CSS class
            >
                <div className="input-box mb-4">
                    <input
                        type="text"
                        name="Name"
                        id="name1"
                        placeholder="Full Name"
                        autoComplete="off"
                        required
                        className="text-lg text-gray-900 mb-4" // Styling for input
                    />
                    <input
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Email Address"
                        autoComplete="off"
                        required
                        className="text-lg text-gray-900 mb-4" // Styling for input
                    />
                </div>

                <div className="input-box mb-4">
                    <input
                        type="number"
                        name="Mobile"
                        id="phone"
                        placeholder="Mobile Number"
                        autoComplete="off"
                        required
                        className="text-lg text-gray-900 mb-4" // Styling for input
                    />
                    <input
                        type="text"
                        name="Subject"
                        id="subject"
                        placeholder="Email Subject"
                        autoComplete="off"
                        required
                        className="text-lg text-gray-900 mb-4" // Styling for input
                    />
                </div>

                <textarea
                    name="Message"
                    id="messa"
                    cols="9"
                    rows="8" // Adjusted rows for a compact appearance
                    placeholder="Your Message"
                    autoComplete="off"
                    className="w-full p-2 text-lg text-gray-900 bg-gray-200 rounded-lg border-none mb-4 resize-none"
                ></textarea>

                <input
                    type="submit"
                    className="btn" // Use external CSS class
                    value="Send Message"
                />
            </form>

        </section>
    );
};

export default Contact; 
