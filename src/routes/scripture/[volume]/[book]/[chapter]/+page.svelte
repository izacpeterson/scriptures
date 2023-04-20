<script>
  import PageHeader from "$lib/components/PageHeader.svelte";

  export let data;
  let { book, chapter, verses } = data;
</script>

<PageHeader title={`${book} ${chapter}`} subtitle="" />

<ul class="flex flex-col p-2">
  {#each verses as verse}
    <!-- <a href={`/scripture/${verse.volume_id}/${verse.book_id}/${verse.chapter_id}/${verse.id}`} class="py-2">{verse.verse_number}: {verse.scripture_text}</a> -->
    <p class="py-2">{verse.verse_number}: {verse.scripture_text}</p>
  {/each}
</ul>
