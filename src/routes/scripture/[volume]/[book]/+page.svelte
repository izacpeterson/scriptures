<script>
  import PageHeader from "$lib/components/PageHeader.svelte";
  export let data;
  let chapters = data.chapters;
  let book = data.book;
</script>

<PageHeader title={book.title} subtitle={book.subtitle} />

<ul class="flex flex-wrap">
  {#each chapters as chapter}
    <a href={`/scripture/${chapter.volume_id}/${chapter.book_id}/${chapter.chapter_id}`} class="p-2">{chapter.chapter_number}</a>
  {/each}
</ul>
