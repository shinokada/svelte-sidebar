# Svelte-sidebar

## Installation

```bash
npm install -D @codewithshin/svelte-sidebar
```

## Sidebar package for single menu

Use the `Sidebar` package for single menu.

<img width="500" src="https://raw.githubusercontent.com/shinokada/svelte-sidebar/main/static/images/single-menu.png" />

You can set `headClass`, `barClass`, `asideClass`, `lists` and `sideName`.

See the demo1.

The default values are:

```js
headerClass="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"

barClass="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"

asideClass="absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg"

lists=[
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ]

siteName="Demo"
```

### Example

```js
<script>
  import { Sidebar } from "@codesithshin/svelt-sidebar";
  let lists = [
    { url: "sidebar-module/item1", name: "Item 1" },
    { url: "sidebar-module/item2", name: "Item 2" },
    { url: "sidebar-module/item3", name: "Item 3" },
  ];
  let siteName = "Svelte-Sidebar";
  let headerClass =
    "bg-red-200 py-3 px-10 items-center text-yellow-600 border-b-2";
  let asideClass = "absolute w-auto h-full bg-purple-200 border-r-2 shadow-lg";
</script>

<Sidebar {lists} {siteName} {headerClass} {asideClass} />
<div class="container mx-auto">
  <main class="p-8">
    <slot />
  </main>
</div>
```

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
```

## For mulitple-menu

<img width="500" src="https://raw.githubusercontent.com/shinokada/svelte-sidebar/main/static/images/multiple-menu.png" />

If you want to add multiple menus, then use `Aside`, `Navbar`, `SidebarList`, and `Nav` packages. 

See the demo2.

### Aside module

You can set `asideClass` in the `Aside` module. The default values is:

```js
asideClass="absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg"
```

## Navbar

```js
siteName (default: "Demo")

barClass (default: "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none")

headerClass (default: "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2")
```

### Example

