# Svelte-sidebar

## Installation

```bash
npm install -D @codewithshin/svelte-sidebar
```

## How to use it

```svelte
<script>
  import Sidebar from "$lib/Sidebar.svelte";
</script>

<Sidebar />
```

## Sidebar package for single menu

Use the Sidebar package for single menu.

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

