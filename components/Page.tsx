import { Advent } from "../routes/2021/day/[challenges].tsx";
import Footer from "./Footer.tsx";
import Safelink from "./Safelink.tsx";

interface PageProps {
  advent: Advent | null;
}

export default function Page(props: PageProps) {
  if (!props.advent) {
    return (
      <div class="flex place-items-center justify-center h-screen">
        <p class="text-2xl text-white font-inconsolata">
          Challenge not found 😥
        </p>
      </div>
    );
  } else {
    return (
      <body class="bg-darkbg flex flex-col">
        <main class="flex-1 justify-center mx-20">
          <div class="container mx-auto">
            <h2 class="text-5xl text-white p-5 text-center font-advent">
              <a href="/">
                Loadeksdi's {props.advent.year}{" "}
                Advent of Code writeups #{props.advent.day}
              </a>
            </h2>
            <h2 class="text-3xl text-white border-b p-3 text-left font-inconsolata">
              Topic
            </h2>
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
          </div>
        </main>
        <div class="mt-2 mx-10 flex place-content-between font-inconsolata">
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
      </body>
    );
  }
}
