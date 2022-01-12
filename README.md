# Svelte-sidebar

A simple sidebar implemented in Svelte and TailwindCSS.

## Installation

```bash
npm install -D @codewithshin/svelte-sidebar@latest
```

## Sidebar package for single menu

Use the `Sidebar` component for single menu.

<img width="500" src="https://raw.githubusercontent.com/shinokada/svelte-sidebar/main/static/images/single-menu.png" />

You can set `siteName`, `headClass`, `hamburgerClass`, `asideClass`, `navClass`, `navDivClass` and `lists`.

See the demo1.

The default values are:

```js
siteName="Demo"
headerClass="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"
hamburgerClass="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"
asideClass="absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg"
navClass="p-12 text-xl"
lists=[
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ]
```

### Example

#### Simplest

```js
<script>
  import { Sidebar } from "@codewithshin/svelte-sidebar";
  let lists = [
    { url: "sidebar-module/item1", name: "Item 1" },
    { url: "sidebar-module/item2", name: "Item 2" },
    { url: "sidebar-module/item3", name: "Item 3" },
  ];
  let siteName = "Svelte-Sidebar";
</script>

<Sidebar {lists} {siteName} />
<div class="container mx-auto">
  <main class="p-8">
    <slot />
  </main>
</div>
```

#### Custom styles

```js
<script>
  import { Sidebar } from "@codewithshin/svelte-sidebar";
  let lists = [
    { url: "sidebar-module/item1", name: "Item 1" },
    { url: "sidebar-module/item2", name: "Item 2" },
    { url: "sidebar-module/item3", name: "Item 3" },
  ];
  let siteName = "Svelte-Sidebar";
  let hamburgerClass =
    "text-blue-500 hover:text-blue-700 cursor-pointer mr-4 border-none focus:outline-none";
  let headerClass =
    "bg-red-200 py-3 px-10 items-center text-yellow-600 border-b-2";
  let asideClass = "absolute w-auto h-full bg-purple-200 border-r-2 shadow-lg";
  let navClass = "p-5 text-xl";
  let navDivClass = "pb-10";
</script>

<Sidebar {lists} {siteName} {headerClass} {asideClass} {navClass} {navDivClass}{hamburgerClass}/>
<div class="container mx-auto">
  <main class="p-8">
    <slot />
  </main>
</div>
```

## For mulitple-menu

<img width="500" src="https://raw.githubusercontent.com/shinokada/svelte-sidebar/main/static/images/multiple-menu.png" />

If you want to add multiple menus, then use `Aside`, `Navbar`, `SidebarList`, and `Nav` components.

See the demo2.

### Aside

You can set `asideClass` in the `Aside` module. The default values is:

```js
asideClass="absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg"
```

### Navbar

In the `Navbar` package, you can set `hamburgerClass`, `siteName`, and `headerClass`. The default values are:

```js
siteName="Demo"
hamburgerClass="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"
headerClass="bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2"
```

### Nav

In the `Nav`, you can set `navClass` and `navDivClass`. The default values are:

```js
navClass = "pt-2 px-12 text-xl";
navDivClass = "pb-10";
```

### Example

#### Simplest

```js
<script>
  import { Aside, Nav, SidebarList, Navbar } from "@codewithshin/svelte-sidebar";
  let siteName = "Multiple menu items";
  export let lists = [
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ];
  export let lists2 = [
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ];
</script>

<Navbar {siteName} />
<Aside>
  <Nav {navClass}>
    <h3>Menu 1</h3>
    {#each lists as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
  <Nav {navClass}>
    <h3>Menu 2</h3>
    {#each lists2 as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
</Aside>
```

#### Custom styles

```js
<script>
  import { Aside, Nav, SidebarList, Navbar } from '@codewithshin/svelte-sidebar';
  let siteName = 'Multiple menu items';
  export let lists = [
    { url: 'item1', name: 'Item 1' },
    { url: 'item2', name: 'Item 2' }
  ];
  export let lists2 = [
    { url: 'item1', name: 'Item 1' },
    { url: 'item2', name: 'Item 2' }
  ];

  let headerClass = 'bg-red-200 py-3 px-10 items-center text-yellow-600 border-b-2';
  let hamburgerClass =
    'text-red-500 hover:text-red-700 cursor-pointer mr-4 border-none focus:outline-none';
  let asideClass = 'absolute w-auto h-full bg-purple-200 border-r-2 shadow-lg';
  let navClass = 'pt-6 px-12 text-xl';
  let navDivClass = 'pb-7';
</script>

<Navbar {siteName} {headerClass} {hamburgerClass} />
<Aside {asideClass}>
  <Nav {navClass} {navDivClass}>
    <h3>Menu 1</h3>
    {#each lists as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
  <Nav {navClass}>
    <h3>Menu 2</h3>
    {#each lists2 as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
</Aside>
```
