import { Advent } from "../routes/2021/day/[challenges].tsx";
import Footer from "./Footer.tsx";
import Safelink from "./Safelink.tsx";

interface PageProps {
  advent: Advent | null;
}

export default function Page(props: PageProps) {
  if (!props.advent) {
    return (
      <div class="flex flex-col place-items-center justify-center h-screen">
        <p class="text-2xl text-white font-inconsolata">
          Challenge not found 😥
        </p>
      </div>
    );
  } else {
    return (
      <main class="h-full flex justify-center mx-8">
        <div class="container mx-auto">
          <h1 class="text-5xl text-white p-5 text-center font-advent">
            <a href="/">
              Loadeksdi's {props.advent.year}{" "}
              Advent of Code writeups #{props.advent.day}
            </a>
          </h1>
          <h1 class="text-3xl text-white border-b p-3 text-left font-inconsolata">
            Topic
          </h1>
          <p class="p-3 text-white font-inconsolata">
            The topic of the challenge can be found{" "}
            <a
              href={props.advent.topic.toString()}
              target="_blank"
              class="text-blue-600 visited:text-purple-500 underline"
            >
              here
            </a>
          </p>
          <h1 class="text-3xl text-white p-3 text-left font-inconsolata">
            My solution
          </h1>
          <div class="mt-2">
            <pre><code class="language-javascript">{props.advent.solution}</code></pre>
          </div>
          <div class="mt-2 flex place-content-between font-inconsolata">
            <Safelink
              day={props.advent.day}
              next={false}
              year={props.advent.year}
            />
            <Safelink
              day={props.advent.day}
              next={true}
              year={props.advent.year}
            />
          </div>
          <Footer />
        </div>
      </main>
    );
  }
}
