import MainNavbar from "./main-navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
