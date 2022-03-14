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
  let topMenus = [
  { route: "/", name: "Home", rel: "external" },
  { route: "about", name: "About", rel: "external" },
  { route: "https://github.com/shinokada/svelte-sidebar", name: "GitHub", rel: "external" },
];
  let lorem ="Lorem ipsum dolor sit amet consectetur adipisicing elit."
  let siteName = "Svelte-sidebar";
</script>

<Sidebar lists={menuList} {siteName} {topMenus} />
<main class="container mx-auto p-24">
  <h1 class="text-3xl">
    {siteName}
  </h1>
  <p class="pt-4">
    {lorem}
  </p>
</main>
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
  let topMenus = [
  { route: "/", name: "Home", rel: "external" },
  { route: "about", name: "About", rel: "external" },
  { route: "https://github.com/shinokada/svelte-sidebar", name: "GitHub", rel: "external" },
];
  let lorem ="Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
<main class="container mx-auto p-24">
  <h1 class="text-3xl">
    {siteName}
  </h1>
  <p class="pt-4">
    {lorem}
  </p>
</main>
```

## Multiple sidebar menu example

[Demo](https://svelte-sidebar.vercel.app/sidebar-multi-default)

```
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
  let lorem ="Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
<main class="container mx-auto p-24">
  <h1 class="text-3xl">
    {siteName}
  </h1>
  <p class="pt-4">
    {lorem}
  </p>
</main>
```

## Custom multi-menu example

[Demo](https://svelte-sidebar.vercel.app/sidebar-multi-custom)

## Top menu example

[Demo](https://svelte-sidebar.vercel.app/topmenu)

## Fixed menu example

[Demo](https://svelte-sidebar.vercel.app/fixed-menu)

## Article

[A Svelte Sidebar Menu Component Implemented with Tailwind CSS](https://medium.com/mkdir-awesome/a-svelte-sidebar-menu-component-implemented-with-tailwind-css-c039b23010e)