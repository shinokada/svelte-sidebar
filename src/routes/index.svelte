<script>
  import Sidebar from "$lib/Sidebar.svelte";
  let lists = [
    { url: "", name: "Home" },
    { url: "about", name: "About" },
  ];
  let siteName = "My demo";
</script>

<Sidebar {lists} {siteName} />
