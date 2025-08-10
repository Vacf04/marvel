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
import { useCart } from "@/context/CartContext";
import Notification from "../helper/Notification";

export default function ListComics() {
  const { comics, loading } = useComics();
  const { message } = useCart();

  if (loading) return <Loading />;

  return (
    <>
      {message && <Notification message={message} />}
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
    </>
  );
}
