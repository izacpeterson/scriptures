<script>
  export let data;
  let scripture = data.scripture[0];
</script>

<h2 class="bg-primary text-primary-content w-full text-center p-2">{scripture.volume_long_title}</h2>
<main class="flex flex-col items-center px-4">
  <h1 class="text-4xl p-4">{scripture.book_title}</h1>
  <h2 class="p-2">Chapter {scripture.chapter_number}, Verse {scripture.verse_number}</h2>
  <p>{scripture.verse_number}: {scripture.scripture_text}</p>
</main>

<!-- <pre>{JSON.stringify(scripture, null, 2)}</pre> -->
