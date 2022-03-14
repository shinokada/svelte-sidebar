# Svelte-sidebar

## Installation

```sh
npm i -D @codewithshin/svelte-sidebar@latest
```

## Sidebar default

[Demo](https://svelte-sidebar.vercel.app/sidebar-default)

```html
<script>
  import Sidebar from "@codewithshin/svelte-sidebar";
  let menuList = [
  { url: "", name: "Home" },
  { url: "sidebar-default", name: "Sidebar Default" },
  { url: "sidebar-custom", name: "Sidebar Custom Style" },
  { url: "sidebar-multi-default", name: "Multi-menu Default" },
  { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  { url: "fixed-menu", name: "Fixed Menu" },
];

  let siteName = "Svelte-sidebar";
</script>

<Sidebar lists={menuList} {siteName} {topMenus} />
```

## Custom default sidebar example

[Demo](https://svelte-sidebar.vercel.app/sidebar-custom)

```html
<script>
  import Sidebar from "@codewithshin/svelte-sidebar";
  let menuList = [
  { url: "", name: "Home" },
  { url: "sidebar-default", name: "Sidebar Default" },
  { url: "sidebar-custom", name: "Sidebar Custom Style" },
  { url: "sidebar-multi-default", name: "Multi-menu Default" },
  { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  { url: "fixed-menu", name: "Fixed Menu" },
];
  let siteName = "Svelte-sidebar";
  let headerClass = "bg-pink-700 py-3 px-10 items-center text-white border-b-2";
  let asideClass = "absolute w-auto h-full bg-red-50 pt-8 border-r-2 shadow-lg";
  let navClass = "p-5 text-base";
</script>

<Sidebar
  lists={menuList}
  {siteName}
  {headerClass}
  {asideClass}
  {navClass}
  {topMenus}
/>
```

## Multiple sidebar menu example

[Demo](https://svelte-sidebar.vercel.app/sidebar-multi-default)

```html
<script>
  import Aside from "@codewithshin/svelte-sidebar";
  import Nav from "@codewithshin/svelte-sidebar";
  import SidebarList from "@codewithshin/svelte-sidebar";
  import Navbar from "@codewithshin/svelte-sidebar";
  let menuList = [
  { url: "", name: "Home" },
  { url: "sidebar-default", name: "Sidebar Default" },
  { url: "sidebar-custom", name: "Sidebar Custom Style" },
  { url: "sidebar-multi-default", name: "Multi-menu Default" },
  { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  { url: "fixed-menu", name: "Fixed Menu" },
];

  let siteName = "Svelte-sidebar";
</script>

<Navbar {siteName} {topMenus} />
<Aside>
  <Nav>
    <h3>Menu 1</h3>
    {#each menuList as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav>
    <h3>Menu 2</h3>
    {#each menuList as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
</Aside>
```

## Custom multi-menu example

[Demo](https://svelte-sidebar.vercel.app/sidebar-multi-custom)

```html
<script>
   import Aside from "@codewithshin/svelte-sidebar";
  import Nav from "@codewithshin/svelte-sidebar";
  import SidebarList from "@codewithshin/svelte-sidebar";
  import Navbar from "@codewithshin/svelte-sidebar";
  let menuList = [
  { url: "", name: "Home" },
  { url: "sidebar-default", name: "Sidebar Default" },
  { url: "sidebar-custom", name: "Sidebar Custom Style" },
  { url: "sidebar-multi-default", name: "Multi-menu Default" },
  { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  { url: "fixed-menu", name: "Fixed Menu" },
];

  let siteName = "Svelte-sidebar";
  let navClass = "p-5 text-lg";
  let navDivClass = "pb-10";
  let sideBarListClass = "mb-2 px-4 hover:text-gray-500";
  let hamburgerClass =
    "text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none";
  let asideClass =
    "absolute w-auto h-full bg-gray-700 text-white border-r-2 shadow-lg";
  let headerClass = "bg-gray-700 py-3 px-10 items-center text-white border-b-2";
</script>

<Navbar {siteName} {hamburgerClass} {headerClass} {topMenus} />
<Aside {asideClass}>
  <Nav {navClass} {navDivClass}>
    <h3>Menu 1</h3>
    {#each menuList as { url, name }}
      <SidebarList {url} {name} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass}>
    <h3>Menu 2</h3>
    {#each menuList as { url, name }}
      <SidebarList {url} {name} {sideBarListClass} />
    {/each}
  </Nav>
</Aside>
```

## Top menu example

[Demo](https://svelte-sidebar.vercel.app/topmenu)

## Fixed menu example

[Demo](https://svelte-sidebar.vercel.app/fixed-menu)

```html
<script>
  import Aside from "@codewithshin/svelte-sidebar";
  import Nav from "@codewithshin/svelte-sidebar";
  import SidebarList from "@codewithshin/svelte-sidebar";
  import Navbar from "@codewithshin/svelte-sidebar";
  let menuList = [
  { url: "", name: "Home" },
  { url: "sidebar-default", name: "Sidebar Default" },
  { url: "sidebar-custom", name: "Sidebar Custom Style" },
  { url: "sidebar-multi-default", name: "Multi-menu Default" },
  { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  { url: "fixed-menu", name: "Fixed Menu" },
];
  let topMenus = [
  { route: "/", name: "Home", rel: "external" },
  { route: "about", name: "About", rel: "external" },
  { route: "https://github.com/shinokada/svelte-sidebar", name: "GitHub", rel: "external" },
];

  let siteName = "Svelte sidebar";
  let asideClass =
    "absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 min-h-screen";
  let headerClass =
    "bg-white py-3 px-20 items-center text-gray-600 border-b-2 p-8";
  let navClass = "p-8 bg-white text-xl ";
  let navDivClass = "pb-10";
</script>

<div class="fixed z-50 top-0 left-0 w-full">
  <Navbar {siteName} {headerClass} {topMenus} />
  <Aside {asideClass}>
    <Nav {navClass} {navDivClass}>
      <h3>Menu 1</h3>
      {#each menuList as { url, name, rel }}
        <SidebarList {url} {name} {rel} />
      {/each}
    </Nav>
    <Nav>
      <h3>Menu 2</h3>
      {#each menuList as { url, name, rel }}
        <SidebarList {url} {name} {rel} />
      {/each}
    </Nav>
  </Aside>
</div>
```

## Article

[A Svelte Sidebar Menu Component Implemented with Tailwind CSS](https://medium.com/mkdir-awesome/a-svelte-sidebar-menu-component-implemented-with-tailwind-css-c039b23010e)