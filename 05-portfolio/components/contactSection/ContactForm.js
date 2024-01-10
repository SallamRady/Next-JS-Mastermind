"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [messageSended, setMessageSended] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = JSON.stringify({ email, subject, message });
    let response = fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setMessageSended(true);
          setEmail("");
          setMessage("");
          setSubject("");
        }
      })
      .catch((err) => {
        console.log("err", err);
        setMessageSended(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
            placeholder="jacob@google.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-white"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {" "}
            Send message{" "}
          </button>
          {messageSended && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
