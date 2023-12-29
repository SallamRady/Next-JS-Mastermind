const { createContext, useState } = require("react");

const initState = {
  notification: null,
  showNotification: function (data) {},
  hideNotification: function () {},
};

const NotificationContext = createContext(initState);

export function NotificationContextProvider({ children }) {
  // prepare context store
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  let contextStore = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={contextStore}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
