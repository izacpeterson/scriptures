import { getScripture } from "../../../lib/server/db";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  let book = url.searchParams.get("book");
  let chapter = url.searchParams.get("chapter");
  let verse = url.searchParams.get("verse");

  let scriptures = await getScripture(book, chapter, verse);

  return json(scriptures);
}
