"use client";
import { ComicWithRarity } from "@/context/ComicsContext";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import {
  ComicThumb,
  ComicTitle,
  ImageContainer,
  PriceContainer,
  RareTag,
} from "./ComicCard.styles";

export default function ComicCard({ comic }: { comic: ComicWithRarity }) {
  return (
    <article data-cy="comic-card">
      <Link href={`/comic/${comic.id}`}>
        <ImageContainer>
          {comic.isRare && <RareTag data-cy="rare-comic">RARE</RareTag>}
          <ComicThumb
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt={comic.title + " thumb"}
            width={200}
            height={400}
          />
        </ImageContainer>
      </Link>
      <ComicTitle>{comic.title}</ComicTitle>
      <PriceContainer>
        <p>${comic.price}</p>
        <AddToCartButton comicId={comic.id} />
      </PriceContainer>
    </article>
  );
}
