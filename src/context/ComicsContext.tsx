"use client";
import { getComics } from "@/actions/comics-get";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Comic } from "@/actions/comics-get";

export type ComicsContextProps = {
  comics: ComicWithRarity[] | null;
  loading: boolean;
  errorMessage: string | null;
};

export type ComicWithRarity = Comic & {
  isRare: boolean;
  price: number;
};

export const ComicsContext = createContext<ComicsContextProps | null>(null);

export const useComics = () => {
  const context = React.useContext(ComicsContext);
  if (context === null) {
    throw new Error("useContext must be used inside a Provider");
  }
  return context;
};

export const ComicsProvider = ({ children }: { children: ReactNode }) => {
  const [comics, setComics] = useState<ComicWithRarity[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setLoading(true);
        setErrorMessage(null);
        const { data: comicData, error } = await getComics();
        if (!comicData && error) {
          throw new Error(error);
        }
        const totalComics = comicData?.results.length;
        if (totalComics) {
          const numberOfRares = Math.floor(totalComics * 0.1);
          let i = 0;
          const randomIndexes: number[] = [];
          while (i <= numberOfRares) {
            const randomIndex = Math.floor(Math.random() * totalComics);
            if (!randomIndexes.includes(randomIndex)) {
              randomIndexes.push(randomIndex);
            }
            i++;
          }

          const comicsWithRarity = comicData?.results.map((comic, index) => {
            return {
              id: comic.id,
              title: comic.title,
              thumbnail: comic.thumbnail,
              creators: comic.creators,
              isRare: randomIndexes.includes(index),
              price: 50,
            };
          });
          setComics(comicsWithRarity);
        }
      } catch (e) {
        console.error("Failed to fetch comics:", e);
        setErrorMessage("An error occurred, try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  return (
    <ComicsContext.Provider value={{ comics, loading, errorMessage }}>
      {children}
    </ComicsContext.Provider>
  );
};
