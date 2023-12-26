
import MainLayout from "@/components/layout/mainLayout";
import { NotificationContextProvider } from "@/store/notification-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NotificationContextProvider>
        <MainLayout Component={Component} pageProps={pageProps} />
      </NotificationContextProvider>
    </>
  );
}
