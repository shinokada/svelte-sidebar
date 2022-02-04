<script>
  import Hamburger from "./components/Hamburger.svelte";
  export let headerClass =
    "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2";
  export let siteName = "Demo";
  export let hamburgerClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
  export let topMenus;
  export let svgClass = "w-4/5 h-9 text-lg pt-1 pl-8";
  export let svgText;
  export let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium pt-1";
  export let topli = "text-lg";
</script>

<header class={headerClass}>
  <nav class="flex">
    <Hamburger class={hamburgerClass} />
    <div class={svgClass}>
      <div class={svgText}>{siteName}</div>
    </div>
    <slot>
      {#if topMenus}
        <ul class={topul}>
          {#each topMenus as { route, name, rel }}
            <li class={topli}>
              <a href={route} {rel}>{name}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </slot>
  </nav>
</header>
