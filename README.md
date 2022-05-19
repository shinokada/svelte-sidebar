# Svelte-Sidebar-Menu

[![npm version](https://badgen.net/npm/v/svelte-sidebar-menu)](https://www.npmjs.com/package/svelte-sidebar-menu)
[![npm downloads](https://badgen.net/npm/dw/svelte-sidebar-menu)](https://www.npmjs.com/package/svelte-sidebar-menu)
[![release](https://badgen.net/github/release/shinokada/svelte-sidebar)](https://github.com/shinokada/svelte-sidebar/releases)
[![license](https://badgen.net/npm/license/svelte-sidebar-menu)](https://github.com/shinokada/svelte-sidebar/blob/main/LICENSE)

## Installation

```sh
npm i -D svelte-sidebar-menu@latest
```

## Demo

[Svelte-Sidebar-Menu](https://svelte-sidebar.vercel.app/)

## Features

- [Responsive](https://svelte-sidebar.vercel.app/responsive/top-fix)
- Click outside to close the sidebar.
- [Flowbite-Svelte sidebar integration](https://flowbite-svelte.com/sidebars)
- [Inert](https://svelte-sidebar.vercel.app/inert)
- Svelte trainstions, [fly-x](https://svelte-sidebar.vercel.app/transitions/fly-x), [fly-y](https://svelte-sidebar.vercel.app/transitions/fly-y), [fade](https://svelte-sidebar.vercel.app/transitions/fade),[slide](https://svelte-sidebar.vercel.app/transitions/slide), and [blur](https://svelte-sidebar.vercel.app/responsive-transition/blur).
- [No transition](https://svelte-sidebar.vercel.app/responsive-no-transition/top-fix)
- [Sidebar style](https://svelte-sidebar.vercel.app/sidebar-custom-style)
- [Sidebar style 2](https://svelte-sidebar.vercel.app/multi-custom-style)
- [Top menu](https://svelte-sidebar.vercel.app/sidebar-topmenu)
- [Fixed top menu](https://svelte-sidebar.vercel.app/fixed-menu)
- [Scroll sidebar](https://svelte-sidebar.vercel.app/scroll-sidebar)

## Inert

[HTMLElement.inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert) makes the browser to ignore user input events for the element. For example, when a user press a tab key, it cycles down links and input fields.

Test [Svelte-Sidebar demo](https://svelte-sidebar.vercel.app/inert) by pressing the tab keyboard when the sidebar closed and opened. When the sidebar is closed, the tab ignores the sidebar links and when it is open the tab goes throught the menu links.

## Responsive Top Menu Fixed

[Repo](https://github.com/shinokada/svelte-sidebar/tree/main/src/routes/responsive)

[The demo](https://svelte-sidebar.vercel.app/responsive/top-fix) set the breaking point at 1024. When the window is greater than 1024px, the sidebar is kept open. When the winddow is less than 1024px, the sidebar is open by the bars at top-left.

To make the sidebar responsive, add the following to all files:

## Responsive no transition

[Repo](https://github.com/shinokada/svelte-sidebar/tree/main/src/routes/responsive-no-transition)

## Flowbite-Svelte Sidebar

- [Demo](https://svelte-sidebar.vercel.app/flowbite-svelte-sidebar)
- [Repo](https://github.com/shinokada/svelte-sidebar/tree/main/src/routes/flowbite-svelte-sidebar)

## Transition

[Repo](https://github.com/shinokada/svelte-sidebar/tree/main/src/routes/transitions)

## Top menu fixed

[Repo](https://github.com/shinokada/svelte-sidebar/blob/main/src/routes/fixed-menu.svelte)

## Inert

[Repo](https://github.com/shinokada/svelte-sidebar/blob/main/src/routes/inert.svelte)

## Custome style

- [Repo 1](https://github.com/shinokada/svelte-sidebar/blob/main/src/routes/multi-custom-style.svelte)
- [Repo 2](https://github.com/shinokada/svelte-sidebar/blob/main/src/routes/sidebar-custom-style.svelte)

## Scroll

[Repo](https://github.com/shinokada/svelte-sidebar/blob/main/src/routes/scroll-sidebar.svelte)

## Top menu (not fixed)

[Repo](https://github.com/shinokada/svelte-sidebar/blob/main/src/routes/topmenu.svelte)

## Article

[A Svelte Sidebar Menu Component Implemented with Tailwind CSS](https://medium.com/mkdir-awesome/a-svelte-sidebar-menu-component-implemented-with-tailwind-css-c039b23010e)
