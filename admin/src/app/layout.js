import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";


const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Elegant Ecommerce",
  description: "Ecommerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " mx-auto max-w-screen-2xl"}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
