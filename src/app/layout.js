import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "./components/Navbar/NavbarComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AiDVISE",
  description: "All-in-One Search Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <NavbarComp/>
        {children}</body>
    </html>
  );
}
