import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <div class="bg-darkbg h-screen flex justify-center items-center flex-col">
        <p class="text-5xl text-white p-5 text-center font-advent">
          Welcome to my Advent of Code writeups!
        </p>
        <div class="flex gap-10 text-3xl text-blue-600 visited:text-purple-500 underline mb-3 font-inconsolata">
          <a href="/2021/day/1">
            2021
          </a>
          <a href="2022/day/1">
            2022
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
