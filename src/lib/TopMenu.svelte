<script>
  export let topMenus;
  export let topul;
  export let topli;
</script>

<div
  class="container flex flex-wrap flex-end justify-between items-center mx-auto"
>
  <button
    data-collapse-toggle="mobile-menu"
    type="button"
    class="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="mobile-menu-2"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      class="w-10 h-10"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      /></svg
    >
    <svg
      class="hidden w-10 h-10"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
  <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
    <ul class={topul}>
      {#each topMenus as { route, name, rel }}
        <li class={topli}>
          <a href={route} {rel}>{name}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
