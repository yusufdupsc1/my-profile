import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Adjust the path to the actual location of the Header component


const jetBrainsMono = JetBrains_Mono({
  
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});


export const metadata: Metadata = {
  title: "Nextjs-Webapp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-white loading loose">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
