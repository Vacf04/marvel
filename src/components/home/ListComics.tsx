"use client";
import { useComics } from "@/context/ComicsContext";
import Loading from "../helper/Loading";
import ComicCard from "./ComicCard";
import PaginationComics from "./PaginationComics";
import {
  ComicsList,
  ComicsSection,
  ComicsSectionContent,
} from "./ListComics.styles";

export default function ListComics() {
  const { comics, loading } = useComics();

  if (loading) return <Loading />;

  return (
    <ComicsSection>
      <ComicsSectionContent>
        <ComicsList>
          {comics &&
            comics.map((comic) => (
              <li key={comic.id}>
                <ComicCard comic={comic} />
              </li>
            ))}
        </ComicsList>
        <PaginationComics />
      </ComicsSectionContent>
    </ComicsSection>
  );
}
