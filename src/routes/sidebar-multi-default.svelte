<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  let siteName = "Svelte-sidebar Multiple-menu Default";
  let lists = [
    { url: "", name: "Home" },
    { url: "sidebar-default", name: "Sidebar Default" },
    { url: "sidebar-custom", name: "Sidebar Custom Style" },
    { url: "sidebar-multi-default", name: "Multi-menu Default" },
    { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  ];
  let lists2 = [
    { url: "", name: "Home" },
    { url: "sidebar-default", name: "Sidebar Default" },
    { url: "sidebar-custom", name: "Sidebar Custom Style" },
    { url: "sidebar-multi-default", name: "Multi-menu Default" },
    { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
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
