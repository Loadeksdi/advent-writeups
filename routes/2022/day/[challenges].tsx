import { Handlers, PageProps } from "$fresh/server.ts";
import Page from "../../../components/Page.tsx";
import { Advent, returnHandler } from "../../2021/day/[challenges].tsx";

const year = 2022;

export const handler: Handlers<Advent | null> = {
  GET: returnHandler(year).GET,
};

export default function ChallengesPage({ data }: PageProps<Advent | null>) {
  return <Page advent={data} />;
}
