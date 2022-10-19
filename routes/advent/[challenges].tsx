import { PageProps } from "$fresh/server.ts";
import Footer from "../../components/Footer.tsx";
import Safelink from "../../components/Safelink.tsx";

const year = 2021;

class Advent {
  day: number;
  year: number;
  topic: URL;
  solution: string;
  constructor(day: number, topic: URL, solution: string) {
    this.day = day;
    this.year = year;
    this.topic = topic;
    this.solution = solution;
  }
}

export const handler: Handlers<Advent | null> = {
  async GET(_, ctx) {
    const { challenges } = ctx.params;
    const solutionResp: Response = await fetch(
      `https://raw.githubusercontent.com/Loadeksdi/advent/main/day${challenges}/index.js`,
    );
    if (solutionResp.status === 404) {
      return ctx.render(null);
    }
    const content: string = await solutionResp.text();
    const topic: URL = new URL(
      `https://adventofcode.com/${year}/day/${challenges}`,
    );
    const advent: Advent = new Advent(challenges, topic, content);
    return ctx.render(advent);
  },
};

export default function ChallengesPage({ data }: PageProps<Advent | null>) {
  if (!data) {
    return <div class="flex flex-col place-items-center justify-center h-screen"><p class="text-2xl text-white">Challenge not found 😥</p></div>;
  } else {
    return (
      <main class="h-full flex justify-center">
        <div class="container mx-auto">
          <h1 class="text-5xl text-white p-5 text-center">
            Loadeksdi's {data.year} Advent of Code writeups #{data.day}
          </h1>
          <h1 class="text-3xl text-white border-b p-3 text-left">
            Topic
          </h1>
          <p class="p-3 text-white">
            The topic of the challenge can be found{" "}
            <a
              href={data.topic.toString()}
              target="_blank"
              class="text-blue-600 visited:text-red-700 underline"
            >
              here
            </a>
          </p>
          <h1 class="text-3xl text-white p-3 text-left">My solution</h1>
          <div class="mt-2 overflow-auto max-h-screen">
            <pre><code class="language-javascript">{data.solution}</code></pre>
          </div>
          <div class="mt-2 flex place-content-between">
            <Safelink day={data.day} next={false} />
            <Safelink day={data.day} next={true} />
          </div>
          <Footer />
        </div>
      </main>
    );
  }
}
