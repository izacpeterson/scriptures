<script>
  import PageHeader from "$lib/components/PageHeader.svelte";
  export let data;
  let books = data.books;
  let volume = data.volume;

  //   if (volume.long_title === "The Doctrine and Covenants") {
  //     window.location.href = "/scripture/4/82";
  //   }
</script>

<PageHeader title={volume.long_title} subtitle={volume.subtitle} />

<ul class="flex flex-col items-center">
  {#each books as book}
    <a href={`/scripture/${book.volume_id}/${book.book_id}`} class="p-2">{book.book_long_title}</a>
  {/each}
</ul>
