import ListComics from "@/components/home/ListComics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marvel Comics | Comics",
};

export default function Home() {
  return <ListComics />;
}
