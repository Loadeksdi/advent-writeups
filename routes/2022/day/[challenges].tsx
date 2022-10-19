import { PageProps } from "$fresh/server.ts";
import Page from "../../../components/Page.tsx";
import { Advent } from "../../2021/day/[challenges].tsx";

const year = 2022;

export const handler: Handlers<Advent | null> = {
  async GET(_, ctx) {
    const { challenges } = ctx.params;
    const solutionResp: Response = await fetch(
      `https://raw.githubusercontent.com/Loadeksdi/advent${year}/main/day${challenges}/index.js`,
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

export default function ChallengesPage({ data }: PageProps<Advent | null>) {
  return <Page advent={data} />;
}
