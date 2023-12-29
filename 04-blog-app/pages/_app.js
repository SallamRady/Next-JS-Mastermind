import MainLayout from "@/components/layout/main-layout";
import { NotificationContextProvider } from "@/store/notification-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NotificationContextProvider>
  );
}
