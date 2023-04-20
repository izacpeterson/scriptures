import { getVerses } from "../../../../../lib/server/db";

export async function load({ params }) {
  let chapter = params.chapter;

  let verses = await getVerses(chapter);

  return { verses: verses, book: verses[0].book_title, chapter: verses[0].chapter_number };
}
