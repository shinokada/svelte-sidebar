<script>
  import Hamburger from "./components/Hamburger.svelte";
  export let headerClass =
    "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2";
  export let siteName = "Demo";
  export let barClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
</script>

<header class={headerClass}>
  <nav class="flex">
    <Hamburger {barClass} />
    <svg width="100%" height="30">
      <text x="0" y="20">{siteName}</text>
    </svg>
  </nav>
</header>

<style>
  text {
    fill: currentColor;
  }
</style>
