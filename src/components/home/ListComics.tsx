"use client";
import { useComics } from "@/context/ComicsContext";
import Image from "next/image";
import styled from "styled-components";
import Loading from "../helper/Loading";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

const ComicsSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const ComicsSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  justify-items: center;
  row-gap: 2rem;
  column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ComicTitle = styled.p`
  max-width: 25ch;
  margin-top: 0.75rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 225px;
  height: 365px;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

const RareTag = styled.div`
  width: 4rem;
  height: 1rem;
  position: absolute;
  background-color: var(--secondary-color);
  top: 0.25rem;
  left: 0;
  z-index: 3;
  color: var(--main-color);
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.15rem 0.15rem 0;
`;

const ComicThumb = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 2;
  transition: var(--transition) ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  color: var(--secondary-color);
`;

export default function ListComics() {
  const { comics, loading } = useComics();

  if (loading) return <Loading />;

  return (
    <ComicsSection>
      <ComicsSectionContent>
        {comics &&
          comics.map((comic) => (
            <div key={comic.id}>
              <Link href={`/comic/${comic.id}`}>
                <ImageContainer>
                  {comic.isRare && <RareTag>RARE</RareTag>}
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
            </div>
          ))}
      </ComicsSectionContent>
    </ComicsSection>
  );
}
