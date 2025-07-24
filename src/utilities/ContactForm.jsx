import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mdkderad");

    if (state.succeeded) {
        return (
            <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                    Thanks for your message!
                </h3>
                <p className="text-gray-600 mt-2">I'll get back to you soon.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="sr-only">
                    Your Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">
                    Your Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-sm text-gray-600 mt-1"
                />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Your Message"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                ></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-sm text-gray-600 mt-1"
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full p-3 bg-gray-800 text-white font-semibold rounded-md transition-all hover:bg-gray-900 disabled:bg-gray-400"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
