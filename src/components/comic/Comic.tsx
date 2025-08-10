"use client";
import { ComicWithRarity, useComics } from "@/context/ComicsContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ComicData,
  ComicSection,
  ComicSectionContent,
  ImageContainerComic,
  CardAddButton,
  ComicTitle,
} from "./Comic.style";
import { ComicThumb, RareTag } from "../home/ComicCard.styles";
import ErrorMessage from "../helper/ErrorMessage";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "@/context/CartContext";
import Notification from "../helper/Notification";

export default function Comic({ id }: { id: string }) {
  const { comics } = useComics();
  const { addToCart, message } = useCart();
  const [comic, setComic] = useState<ComicWithRarity | null>(null);
  console.log(message);

  if (!comics) {
    redirect("/");
  }

  useEffect(() => {
    const comic = comics?.filter((comic) => comic.id === Number(id));
    setComic(comic[0]);
    document.title = `Marvel Comics | ${comic[0].title}`;
  }, [comics, id]);

  if (!comic)
    return (
      <ComicSection>
        <ComicSectionContent>
          <ErrorMessage error={"Comic Not Found"} />
        </ComicSectionContent>
      </ComicSection>
    );
  return (
    <>
      {message && <Notification message={message} />}
      <ComicSection>
        <ComicSectionContent>
          <ImageContainerComic>
            {comic.isRare && <RareTag>RARE</RareTag>}
            <ComicThumb
              src={comic?.thumbnail.path + "." + comic?.thumbnail.extension}
              alt={comic?.title + " thumb"}
              width={500}
              height={500}
            />
          </ImageContainerComic>
          <ComicData>
            <ComicTitle>{comic.title}</ComicTitle>

            {comic.creators.items.length > 0 && (
              <p>Author: {comic.creators.items[0].name}</p>
            )}

            <p>${comic.price}</p>
            <CardAddButton
              onClick={() => addToCart(comic.id)}
              data-cy="add-cart-comic"
            >
              <MdAddShoppingCart /> Add To Cart
            </CardAddButton>
          </ComicData>
        </ComicSectionContent>
      </ComicSection>
    </>
  );
}
