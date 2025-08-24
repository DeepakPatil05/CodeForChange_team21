import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Mastercard <Code for Change 2.0>",
  description: "Hackathon by Mastercard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster richColors closeButton position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
