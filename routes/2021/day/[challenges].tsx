import { Handlers, PageProps } from "$fresh/server.ts";
import Page from "../../../components/Page.tsx";

const year = 2021;

export class Advent {
  day: number;
  year: number;
  topic: URL;
  solution: string;
  constructor(day: number, year: number, topic: URL, solution: string) {
    this.day = day;
    this.year = year;
    this.topic = topic;
    this.solution = solution;
  }
}

export function returnHandler(year: number) {
  return {
    async GET(_, ctx) {
      const { challenges } = ctx.params;
      let url = "";
      if (year === 2021) {
        url = `advent${year}/main/day${challenges}/index.js`;
      } else if (year === 2022) {
        url = `advent${year}/main/day${challenges}/src/main.rs`;
      }
      const solutionResp: Response = await fetch(
        `https://raw.githubusercontent.com/Loadeksdi/${url}`,
      );
      if (solutionResp.status === 404) {
        return ctx.render(null);
      }
      const content: string = await solutionResp.text();
      const topic: URL = new URL(
        `https://adventofcode.com/${year}/day/${challenges}`,
      );
      const advent: Advent = new Advent(challenges, year, topic, content);
      return ctx.render(advent);
    },
  };
}

export const handler: Handlers<Advent | null> = {
  GET: returnHandler(year).GET,
};

export default function ChallengesPage({ data }: PageProps<Advent | null>) {
  return <Page advent={data} />;
}
