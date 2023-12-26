import { useRef, useState } from "react";

// import packages
export default function Home() {
  const emailInput = useRef();
  const feedbackInput = useRef();
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailInput.current.value;
    let feedback = feedbackInput.current.value;
    console.log(email, feedback);
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email, feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("res data", data);
      })
      .catch((err) => console.lof("error ", err));
  };

  const loadFeedbacks = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        console.log("res data", data);
        setFeedbacks(data?.data);
      })
      .catch((err) => console.lof("error ", err));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-controller">
          <label>Your Email :</label>
          <input
            className="inputField"
            name="email"
            type="email"
            ref={emailInput}
            alt="example@g.com"
          />
        </div>
        <div className="input-controller">
          <label>Your Feedback :</label>
          <textarea
            className="inputField"
            name="feedback"
            ref={feedbackInput}
            cols={15}
            rows={5}
          ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbacks}>Load Feedbacks</button>
      <ul>
        {feedbacks?.map((ele) => (
          <li key={ele?.id}>{ele?.feedback}</li>
        ))}
      </ul>
    </div>
  );
}
