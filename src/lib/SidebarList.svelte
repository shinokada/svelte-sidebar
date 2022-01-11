<script>
  import { open } from "./store";

  export let url;
  export let name;
  export let sideBarListClass = "border-b border-gray-400 mb-2 px-4";
  function toggleSide() {
    open.update((n) => (n = !n));
  }
</script>

<div class={sideBarListClass}>
  <a class="block" href="/{url}" on:click={toggleSide}>{name}</a>
</div>
