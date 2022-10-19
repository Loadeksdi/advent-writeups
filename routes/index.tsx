import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <div class="bg-purple-900 h-screen flex justify-center items-center flex-col">
        <p class="text-5xl text-white p-5 text-center">
          Welcome to my Advent of Code writeups!
        </p>
        <a
          href="/advent/1"
          class="text-3xl text-pink-300 visited:text-red-700 underline mb-3"
        >
          2021
        </a>
        <Footer />
      </div>
    </>
  );
}
