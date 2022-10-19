import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <div class="bg-darkbg h-screen flex justify-center items-center flex-col">
        <p class="text-5xl text-white p-5 text-center font-advent">
          Welcome to my Advent of Code writeups!
        </p>
        <a
          href="/advent/1"
          class="text-3xl text-blue-600 visited:text-purple-500 underline mb-3 font-inconsolata"
        >
          2021
        </a>
        <Footer />
      </div>
    </>
  );
}
