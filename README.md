# Svelte-sidebar

## Installation

```sh
npm i -D @codewithshin/svelte-sidebar@latest
```

## A11y



## Sidebar default

[Demo](https://svelte-sidebar.vercel.app/)

```html
<script>
  import Sidebar from "@codewithshin/svelte-sidebar";
  const menuList = [
    { href: "/", name: "Sidebar Default" },
    { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
    { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
    { href: "multi-default", name: "Multiple-menu Default" },
    { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
    { href: "fixed-menu", name: "Fixed Top Menu" },
    { href: "scroll-sidebar", name: "Scroll Sidebar"},
  ];

  let siteName = "Svelte-sidebar";
</script>

<Sidebar lists={menuList} {siteName} />
```

## Custom default sidebar example

[Demo](https://svelte-sidebar.vercel.app/sidebar-custom-style)

```html
<script>
  import Sidebar from "@codewithshin/svelte-sidebar";
  const menuList = [
    { href: "/", name: "Sidebar Default" },
    { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
    { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
    { href: "multi-default", name: "Multiple-menu Default" },
    { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
    { href: "fixed-menu", name: "Fixed Top Menu" },
    { href: "scroll-sidebar", name: "Scroll Sidebar"},
  ];
  let siteName = 'Custom Styled Sidebar';
  let headerClass = 'bg-pink-700 py-3 px-10 items-center text-white border-b-2';
  let asideClass = 'absolute w-auto h-screen bg-red-50 pt-8 border-r-2 shadow-lg';
  let navClass = 'p-5 text-base';
</script>

<Sidebar lists={menuList} {siteName} {headerClass} {asideClass} {navClass} />
```

## Multiple sidebar menu example

[Demo](https://svelte-sidebar.vercel.app/multi-default)

```html
<script>
  import { Aside, Nav, SidebarList, Navbar } from "@codewithshin/svelte-sidebar";
  const menuList = [
    { href: "/", name: "Sidebar Default" },
    { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
    { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
    { href: "multi-default", name: "Multiple-menu Default" },
    { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
    { href: "fixed-menu", name: "Fixed Top Menu" },
    { href: "scroll-sidebar", name: "Scroll Sidebar"},
  ];

  let siteName = 'Default Styled Multi-menu Sidebar';
</script>

<Navbar {siteName} />
<Aside>
  <Nav>
    <h3>Menu 1</h3>
    {#each menuList as { href, name, rel }}
      <SidebarList {href} {name} {rel} />
    {/each}
  </Nav>
  <Nav>
    <h3>Menu 2</h3>
    {#each menuList as { href, name, rel }}
      <SidebarList {href} {name} {rel} />
    {/each}
  </Nav>
</Aside>
```

## Custom multi-menu example

[Demo](https://svelte-sidebar.vercel.app/multi-custom-style)

```html
<script>
  import { Aside, Nav, SidebarList, Navbar } from "@codewithshin/svelte-sidebar";
  const menuList = [
    { href: "/", name: "Sidebar Default" },
    { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
    { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
    { href: "multi-default", name: "Multiple-menu Default" },
    { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
    { href: "fixed-menu", name: "Fixed Top Menu" },
    { href: "scroll-sidebar", name: "Scroll Sidebar"},
  ];

  let siteName = 'Custom Styled Multi-menu Sidebar';
  let navClass = 'p-5 text-lg';
  let navDivClass = 'pb-10';
  let sideBarListClass = 'mb-2 px-4 hover:text-gray-500';
  let hamburgerClass =
    'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none';
  let asideClass = 'absolute w-auto h-screen bg-gray-700 text-white border-r-2 shadow-lg';
  let headerClass = 'bg-gray-700 py-3 px-10 items-center text-white border-b-2';
</script>

<Navbar {siteName} {hamburgerClass} {headerClass} />
<Aside {asideClass}>
  <Nav {navClass} {navDivClass}>
    <h3>Menu 1</h3>
    {#each menuList as { href, name }}
      <SidebarList {href} {name} {sideBarListClass} />
    {/each}
  </Nav>
  <Nav {navClass}>
    <h3>Menu 2</h3>
    {#each menuList as { href, name }}
      <SidebarList {href} {name} {sideBarListClass} />
    {/each}
  </Nav>
</Aside>
```

## Top menu example

[Demo](https://svelte-sidebar.vercel.app/sidebar-topmenu)

```html
<script>
  import { Aside, Nav, SidebarList, Navbar, TopMenu } "$lib/Aside.svelte";
  const menuList = [
    { href: "/", name: "Sidebar Default" },
    { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
    { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
    { href: "multi-default", name: "Multiple-menu Default" },
    { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
    { href: "fixed-menu", name: "Fixed Top Menu" },
    { href: "scroll-sidebar", name: "Scroll Sidebar"},
  ];
  const topMenus = [
  {
    id: 1,
    name: "Menu",
    href: "/"
  },
  {
    id: 2,
    name: "Dropdown",
    href: "/",
    child: [
      {
        id: 3,
        name: "Dropdown 1-1",
        href: "/"
      },
      {
        id: 4,
        name: "Dropdown 1-2",
        href: "/"
      },
      {
        id: 5,
        name: "Dropdown 1-3",
        href: "/"
      },
    ],
  },
  {
    id: 6,
    name: "Dropdown",
    href: "/",
    child: [
      {
        id: 7,
        name: "Dropdown 2-1",
        href: "/"
      },
      {
        id: 8,
        name: "Dropdown 2-2",
        href: "/",
      },
      {
        id: 9,
        name: "Dropdown 2-3",
        href: "/",
      },
    ],
  }
];
  let siteName = "Svelte-sidebar";
</script>

<Navbar {siteName}>
  <TopMenu {topMenus} />
</Navbar>
<Aside>
  <Nav>
    <h3>Menu 1</h3>
    {#each menuList as { href, name, rel }}
      <SidebarList {href} {name} {rel} />
    {/each}
  </Nav>
  <Nav>
    <h3>Menu 2</h3>
    {#each menuList as { href, name, rel }}
      <SidebarList {href} {name} {rel} />
    {/each}
  </Nav>
</Aside>
```

## Fixed menu example

[Demo](https://svelte-sidebar.vercel.app/fixed-menu)

```html
<script>
  import { Aside, Nav, SidebarList, Navbar, TopMenu } from "@codewithshin/svelte-sidebar";
  const menuList = [
    { href: "/", name: "Sidebar Default" },
    { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
    { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
    { href: "multi-default", name: "Multiple-menu Default" },
    { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
    { href: "fixed-menu", name: "Fixed Top Menu" },
    { href: "scroll-sidebar", name: "Scroll Sidebar"},
  ];
  const topMenus = [
  {
    id: 1,
    name: "Menu",
    href: "/"
  },
  {
    id: 2,
    name: "Dropdown",
    href: "/",
    child: [
      {
        id: 3,
        name: "Dropdown 1-1",
        href: "/"
      },
      {
        id: 4,
        name: "Dropdown 1-2",
        href: "/"
      },
      {
        id: 5,
        name: "Dropdown 1-3",
        href: "/"
      },
    ],
  },
  {
    id: 6,
    name: "Dropdown",
    href: "/",
    child: [
      {
        id: 7,
        name: "Dropdown 2-1",
        href: "/"
      },
      {
        id: 8,
        name: "Dropdown 2-2",
        href: "/",
      },
      {
        id: 9,
        name: "Dropdown 2-3",
        href: "/",
      },
    ],
  }
];

  let siteName = 'Fixed Top Menu';
  let asideClass =
    'absolute w-auto bg-white overflow-scroll h-screen py-8 shadow-lg z-50 px-4 min-h-screen';
  let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 p-8';
  let navClass = 'p-8 bg-white text-xl ';
  let navDivClass = 'pb-10';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
  <Navbar {siteName} {headerClass}>
    <TopMenu {topMenus} />
  </Navbar>
  <Aside {asideClass}>
    <Nav {navClass} {navDivClass}>
      <h3>Menu 1</h3>
      {#each menuList as { href, name, rel }}
        <SidebarList {href} {name} {rel} />
      {/each}
    </Nav>
    <Nav {navClass} {navDivClass}>
      <h3>Menu 2</h3>
      {#each menuList as { href, name, rel }}
        <SidebarList {href} {name} {rel} />
      {/each}
    </Nav>
  </Aside>
</div>
```

## Scroll sidebar

[Demo](https://svelte-sidebar.vercel.app/scroll-sidebar)

```html
<script lang="ts">
  import { Aside, Nav, SidebarList, Navbar } from '@codewithshin/svelte-sidebar';
  const longMenuList = [
  { href: "/", name: "Sidebar Default" },
  { href: "sidebar-custom-style", name: "Sidebar Custom Style" },
  { href: "sidebar-topmenu", name: "Sidebar Top Menu" },
  { href: "multi-default", name: "Multiple-menu Default" },
  { href: "multi-custom-style", name: "Multiple-menu Custom Style" },
  { href: "fixed-menu", name: "Fixed Top Menu" },
  { href: "scroll-sidebar", name: "Scroll Sidebar"},
];
  let siteName = 'Scroll Sidebar';
  let asideClass =
    'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg z-50  h-screen overflow-scroll';
</script>

<Navbar {siteName} />

<Aside {asideClass}>
  <Nav>
    <h3>Long Side Menu</h3>
    {#each longMenuList as { href, name, rel }}
      <SidebarList {href} {name} {rel} />
    {/each}
  </Nav>
</Aside>
```

## Article

[A Svelte Sidebar Menu Component Implemented with Tailwind CSS](https://medium.com/mkdir-awesome/a-svelte-sidebar-menu-component-implemented-with-tailwind-css-c039b23010e)