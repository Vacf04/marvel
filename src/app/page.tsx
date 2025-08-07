import { getComics } from "@/actions/comics-get";

export default async function Home() {
  const { data, error } = await getComics();

  console.log(data?.results[1].title, error);

  return <div></div>;
}
