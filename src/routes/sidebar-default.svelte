<script>
  import Sidebar from "$lib/Sidebar.svelte";
  let lists = [
    { url: "", name: "Home" },
    { url: "sidebar-default", name: "Sidebar Default" },
    { url: "sidebar-custom", name: "Sidebar Custom Style" },
    { url: "sidebar-multi-default", name: "Multi-menu Default" },
    { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  ];
  let siteName = "Svelte-Sidebar Default";
</script>

<Sidebar {lists} {siteName} />

<main class="container mx-auto p-8">
  <h1>{siteName}</h1>
</main>
