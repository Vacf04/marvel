"use client";
import { useComics } from "@/context/ComicsContext";
import Image from "next/image";
import styled from "styled-components";

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
`;

const ComicTitle = styled.p`
  max-width: 20ch;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 225px;
  height: 365px;
  overflow: hidden;
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
`;

export default function ListComics() {
  const { comics, loading, errorMessage } = useComics();

  if (loading)
    return (
      <ComicsSection>
        <p>Loading...</p>
      </ComicsSection>
    );

  return (
    <ComicsSection>
      <ComicsSectionContent>
        {comics &&
          comics.map((comic) => (
            <div key={comic.id}>
              <ImageContainer>
                <ComicThumb
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title + " thumb"}
                  width={200}
                  height={400}
                />
              </ImageContainer>
              <ComicTitle>{comic.title}</ComicTitle>
              <p>{comic.price}</p>
            </div>
          ))}
      </ComicsSectionContent>
    </ComicsSection>
  );
}
