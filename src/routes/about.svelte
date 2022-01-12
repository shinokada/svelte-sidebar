<script>
  import Sidebar from "$lib/Sidebar.svelte";
  let lists = [
    { url: "demo1", name: "Home" },
    { url: "about", name: "About" },
  ];
  let siteName = "My demo";
</script>

<Sidebar {lists} {siteName} />
<main class="container mx-auto p-8">
  <h1>About page</h1>
</main>
