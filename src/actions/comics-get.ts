"use server";

import crypto from "crypto";

const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

export type Comic = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
};

export type ComicData = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
};

export async function getComics(
  limit = 20,
  offset = 0
): Promise<{ data: ComicData | null; error: string | null }> {
  try {
    if (!publicKey || !privateKey) {
      console.error(
        "Marvel API keys are not defined in environment variables."
      );
      throw new Error(`An error occurred, try again later.`);
    }
    const ts = new Date().getTime();
    const hash = crypto
      .createHash("md5")
      .update(ts + privateKey + publicKey)
      .digest("hex");

    const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      throw new Error("An error occurred, try again later.");
    }

    const responseJson = await response.json();
    const data = responseJson.data;
    return { data, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) return { data: null, error: error.message };
    return { data: null, error: "An unknown error occurred." };
  }
}
