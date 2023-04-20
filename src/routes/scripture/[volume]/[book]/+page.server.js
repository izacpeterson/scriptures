import { getChapters } from "../../../../lib/server/db";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  let book = params.book;
  let volume = params.volume;
  let chapters = await getChapters(book);
  chapters = chapters.map((chapter) => {
    chapter.volume_id = volume;
    return chapter;
  });
  console.log(chapters[0]);
  if (chapters.length == 1) {
    throw redirect(302, `/scripture/${volume}/${book}/${chapters[0].chapter_id}`);
  }

  return { chapters, book: { title: chapters[0].book_long_title, subtitle: chapters[0].book_subtitle } };
}
