import { PageProps } from "$fresh/server.ts";
import { Footer } from "../../components/Footer.tsx";

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
    return <p>Challenge not found</p>;
  } else {
    return (
      <main class="bg-pink-400 h-screen flex justify-center">
        <div class="container mx-auto">
          <h1 class="text-5xl text-white p-5 text-center">
            Loadeksdi's {data.year} Advent of Code writeups #{data.day}
          </h1>
          <h1 class="text-3xl text-white border-b p-3 text-left">
            Topic
          </h1>
          <p class="p-3">
            The topic of the challenge can be found{" "}
            <a
              href={data.topic.toString()}
              target="_blank"
              class="text-blue-600 visited:text-purple-600 underline"
            >
              here
            </a>
          </p>
          <h1 class="text-3xl text-white p-3 text-left">My solution</h1>
          <div class="mt-3 overflow-auto max-h-full">
            <pre><code class="language-javascript">{data.solution}</code></pre>
          </div>
          <div class="flex place-content-between">
            <div>
              <a
                href={data.day <= 1 ? undefined : `/advent/${+data.day - 1}`}
                class="text-2xl text-white text-left underline"
              >
                {data.day <= 1 ? " " : "Previous challenge"}
              </a>
            </div>
            <div>
              <a
                href={data.day >= 25 ? undefined : `/advent/${+data.day + 1}`}
                class="text-2xl text-white text-left underline"
              >
                {data.day >= 25  ? " " : "Next challenge"}
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    );
  }
}
