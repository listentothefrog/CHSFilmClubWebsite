"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div class="max-w-full px-4 sm:px-6 lg:px-8 max-h-3.5">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 class="block text-3xl font-bold text-black sm:text-4xl lg:text-6xl lg:leading-tight">
              WELCOME TO THE CHS FILM CLUB.
            </h1>
            <p class="mt-3 text-lg text-gray-800">
              Welcome to the Cuthbertson High School Film Club, where your
              passion for storytelling takes center stage! Our club is a dynamic
              community of creative minds, cinephiles, and aspiring filmmakers
              who share a deep love for the art of filmmaking. Whether you're a
              seasoned filmmaker or just beginning to explore the world of
              movies, there's a place for you here.
            </p>

            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-filmcluborange text-white hover:bg-orange-600"
                href="/joinfilmclub"
              >
                Join Film Club
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-filmcluborange shadow-sm "
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div class="ms-4">
            <Image
              class="md:w-3/4"
              src="/Film-rolls-pana.svg"
              width={600}
              height={600}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
