import { getBooks } from "../../../lib/server/db";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  let volume = params.volume;
  if (volume == 4) {
    throw redirect(302, "/scripture/4/82");
  }
  let books = await getBooks(volume);

  return { books: books, volume: { long_title: books[0].volume_long_title, subtitle: books[0].volume_subtitle } };
}
