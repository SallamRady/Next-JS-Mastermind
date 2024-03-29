import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Send your message to us." />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
