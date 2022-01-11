<script>
  import Sidebar from "$lib/Sidebar.svelte";
  let lists = [
    { url: "sidebar-module/item1", name: "Item 1" },
    { url: "sidebar-module/item2", name: "Item 2" },
    { url: "sidebar-module/item3", name: "Item 3" },
  ];
  let siteName = "Svelte-Sidebar";
  let headerClass =
    "bg-red-200 py-3 px-10 items-center text-yellow-600 border-b-2";
  let asideClass = "absolute w-auto h-full bg-purple-200 border-r-2 shadow-lg";
  let navClass = "p-5 text-xl";
</script>

<Sidebar {lists} {siteName} {headerClass} {asideClass} {navClass} />
<div class="container mx-auto">
  <main class="p-8">
    <slot />
  </main>
</div>
