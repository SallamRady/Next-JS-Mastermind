import { useContext, useState } from "react";
import classes from "./contact-form.module.css";
import NotificationContext from "@/store/notification-context";
import Notification from "../ui/notification";

function ContactForm() {
  // declaration variables.
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  // access notification context
  let contextData = useContext(NotificationContext);

  const handleSubmitMethod = (e) => {
    e.preventDefault();
    if (
      !enteredEmail.includes("@") ||
      enteredName.trim() === "" ||
      enteredMessage.trim() === ""
    ) {
      console.log("Invalid Input.");
      return;
    }
    // send data
    let newMessage = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    contextData.showNotification({
      title: "Pending!",
      message: "Message Sending...",
      status: "pending",
    });

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        contextData.showNotification({
          title: "Success!",
          message: "Message Sended Successfully.",
          status: "success",
        });
        setEnteredMessage("");
        setEnteredName("");
        setEnteredEmail("");
      })
      .catch((err) => {
        contextData.showNotification({
          title: "Error!",
          message: "Unexpected error.",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmitMethod}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {contextData.notification && (
        <Notification
          title={contextData.notification.title}
          message={contextData.notification.message}
          status={contextData.notification.status}
        />
      )}
    </section>
  );
}

export default ContactForm;
