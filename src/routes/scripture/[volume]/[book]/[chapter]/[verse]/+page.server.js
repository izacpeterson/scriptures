import { getScripture } from "../../../../../../lib/server/db";

export async function load({ params }) {
  const { book, chapter, verse } = params;

  let scripture = await getScripture(book, chapter, verse);

  return { scripture };
}
