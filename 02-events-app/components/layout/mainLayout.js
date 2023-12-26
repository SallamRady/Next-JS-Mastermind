import React, { useContext } from "react";
import MainHeader from "./main-header/mainHeader";
import Notification from "../ui/notification";
import NotificationContext from "@/store/notification-context";

const MainLayout = ({ Component, pageProps }) => {
  // * extract data from notification
  let contextData = useContext(NotificationContext);
  let { notification } = contextData;
  return (
    <>
      <MainHeader />
      <main>
        <Component {...pageProps} />
      </main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default MainLayout;
