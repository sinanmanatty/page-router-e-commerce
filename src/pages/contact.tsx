import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

      <div className="text-center">
        <h1 className="text-4xl text-black font-bold mb-4">
          Contact Us 📩
        </h1>
        <p className="text-gray-600">
          We'd love to hear from you. Reach out with any questions or feedback.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl text-blue-400 font-semibold mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 text-gray-500">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Contact Information
            </h2>

            <p className="mb-2 text-blue-400">📧 support@shopsy.com</p>
            <p className="mb-2 text-blue-400">📞 +91 98765 43210</p>
            <p className="mb-2 text-blue-400">📍 Calicut, Kerala, India</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Business Hours
            </h2>

            <p className="text-blue-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-blue-400">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-red-600">Sunday: Closed</p>
          </div>
        </div>

      </div>
    </div>
  );
}