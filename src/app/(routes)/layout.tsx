import React from "react";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default RoutesLayout;
