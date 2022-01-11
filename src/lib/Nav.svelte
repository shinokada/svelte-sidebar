<script>
  export let navClass;
  export let navDivClass;
</script>

<nav class={navClass}>
  <div class={navDivClass}>
    <slot />
  </div>
</nav>
