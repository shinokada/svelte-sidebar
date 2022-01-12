<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  let siteName = "Svelte-sidebar Multiple-menu Default";
  let lists = [
    { url: "", name: "Home" },
    { url: "sidebar-default", name: "Item 1" },
    { url: "sidebar-custom", name: "Item 2" },
    { url: "sidebar-multi-default", name: "Item 3" },
  ];
  let lists2 = [
    { url: "", name: "Profile" },
    { url: "sidebar-default", name: "Item 4" },
    { url: "sidebar-custom", name: "Item 5" },
    { url: "sidebar-multi-default", name: "Item 6" },
  ];
</script>

<Navbar {siteName} />
<Aside>
  <Nav>
    <h3>Menu 1</h3>
    {#each lists as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
  <Nav>
    <h3>Menu 2</h3>
    {#each lists2 as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
</Aside>

<main class="container mx-auto p-8">
  <h1>{siteName}</h1>
</main>
