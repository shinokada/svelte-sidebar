<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  let siteName = "Multiple menu items";
  let lists = [
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ];
  let lists2 = [
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ];
  let navClass = "pt-2 px-12 text-xl";
  let navDivClass = "pb-10";
  let sideBarListClass = "border-b border-red-400 mb-2 px-4";
  let hamburgerClass =
    "text-blue-500 hover:text-blue-700 cursor-pointer mr-4 border-none focus:outline-none";
  let asideClass = "absolute w-auto h-full bg-purple-200 border-r-2 shadow-lg";
</script>

<Navbar {siteName} {hamburgerClass} />
<Aside {asideClass}>
  <Nav {navClass} {navDivClass}>
    <h3>Menu 1</h3>
    {#each lists as list}
      <SidebarList url={list.url} name={list.name} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass}>
    <h3>Menu 2</h3>
    {#each lists2 as list}
      <SidebarList url={list.url} name={list.name} {sideBarListClass} />
    {/each}
  </Nav>
</Aside>

About page
