<script>
  export let navClass = "p-8 text-xl";
  export let navDivClass = "pb-8";
</script>

<nav class={navClass}>
  <div class={navDivClass}>
    <slot />
  </div>
</nav>
