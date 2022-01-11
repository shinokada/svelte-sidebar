# Svelte-sidebar


## Installation

```bash
npm install -D @codewithshin/svelte-sidebar
```

## How to use it


```bash
<script>
  import Sidebar from "$lib/Sidebar.svelte";
</script>

<Sidebar />
```

## Sidebar package for single menu

Use the Sidebar package for single menu.



You can set `headClass`, `barClass`, `asideClass`, `lists` and `sideName`.

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


## Aside module


```js
asideClass (default: "absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg")
```

## Navbar

```js
siteName (default: "Demo")

barClass (default: "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none")

headerClass (default: "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2")
```

```js

```
