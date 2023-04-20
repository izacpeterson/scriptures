<script>
  export let data;
  let volumes = data.volumes;
</script>

<ul class="flex flex-col items-center">
  {#each volumes as volume}
    <a href={`/scripture/${volume.id}`} class="p-8 m-8 shadow w-3/4 flex items-center justify-center">{volume.volume_title}</a>
  {/each}
</ul>
