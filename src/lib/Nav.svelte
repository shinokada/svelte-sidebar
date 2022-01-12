<script>
  export let navClass = "p-12 text-xl";
  export let navDivClass = "pb-10";
</script>

<nav class={navClass}>
  <div class={navDivClass}>
    <slot />
  </div>
</nav>
