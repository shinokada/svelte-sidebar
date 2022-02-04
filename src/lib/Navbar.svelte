<script>
  import Hamburger from "./components/Hamburger.svelte";
  export let headerClass =
    "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2";
  export let siteName = "Demo";
  export let hamburgerClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
  export let topMenus;
  export let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium";
  export let topli;
</script>

<header class={headerClass}>
  <nav class="flex">
    <Hamburger {hamburgerClass} />
    <svg width="100%" height="30">
      <text x="0" y="20">{siteName}</text>
    </svg>
    <slot>
      {#if topMenus}
        <ul class={topul}>
          {#each topMenus as { route, name, relext }}
            <li class={topli}>
              <a href={route} rel={relext}>{name}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </slot>
  </nav>
</header>

<style>
  text {
    fill: currentColor;
  }
</style>
