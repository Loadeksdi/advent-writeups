import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <main class="bg-darkbg h-screen flex-1">
        <div class="flex flex-col justify-center items-center h-full">
          <p class="text-5xl text-white p-5 text-center font-advent animate-pulse">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
