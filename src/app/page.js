"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full md:px-8 flex items-center flex-col px-6 md:flex-row">
        <div className="md:w-2/4 md:mr-10">
          <div className="text-2xl font-bold md:text-5xl">
            <h1>WELCOME TO THE CHS FILM CLUB.</h1>
          </div>
          <div className="mt-4">
            <p className="text-md text-gray-600 md:text-lg">
              Welcome to the Cuthbertson High School Film Club, where your
              passion for storytelling takes center stage! Our club is a dynamic
              community of creative minds, cinephiles, and aspiring filmmakers
              who share a deep love for the art of filmmaking. Whether you're a
              seasoned filmmaker or just beginning to explore the world of
              movies, there's a place for you here.{" "}
            </p>
          </div>
          <div className="mt-4 w-full flex flex-col">
            <Link href={"/joinfilmclub"}>
              <button className="bg-filmcluborange py-2 rounded-md text-white font-medium">
                Join Film Club
              </button>
            </Link>
            <button className="mt-2 border-2 border-filmcluborange py-2 rounded-md text-black font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-4 md:w-1/2">
          <img src="https://imgix.bustle.com/inverse/94/8a/38/6b/0df2/4e7b/8bdd/3a5592fffb2f/6824890-jurassic-parkjpg.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" />
        </div>
      </div>
    </div>
  );
}
