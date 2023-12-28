import { League_Spartan } from "next/font/google";
import "./globals.css";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Cuthbertson Film Club",
  description:
    "Welcome to the Cuthbertson High School Film Club, where storytelling meets the art of filmmaking! Our club is a vibrant community dedicated to exploring, learning, and creating cinematic experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./Cuthbertson_Favicon.png" sizes="any" />
      <body className={league.className}>{children}</body>
    </html>
  );
}
