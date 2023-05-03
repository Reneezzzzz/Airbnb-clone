import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegesiterModel from "./components/modals/RegesiterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegesiterModel />
          {/* <Modal isOpen actionLabel="submit" title="hello" /> */}
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
