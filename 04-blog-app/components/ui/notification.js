import { useContext } from "react";
import classes from "./notification.module.css";
import NotificationContext from "@/store/notification-context";

function Notification(props) {
  const { title, message, status } = props;
  let contextData = useContext(NotificationContext);

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
      <button
        title="Close"
        onClick={() => contextData.hideNotification()}
        className={classes.closeBtn}
      >
        X
      </button>
    </div>
  );
}

export default Notification;
