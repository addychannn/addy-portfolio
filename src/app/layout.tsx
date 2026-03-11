import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Addy | UI/UX Designer & Front-End Developer",
  description:
    "Portfolio of Adelynne Malubay - UI/UX Designer, Creative Designer, and Front-End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>
        {children}
        <script
          src="https://mrey-ai.vercel.app/js/embed-mreyagent.js?agentName=addy-knowledge-base&cname=Addy.channn"
          defer
        ></script>
      </body>
    </html>
  );
}
