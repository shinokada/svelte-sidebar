import type { Menu, TopMenu } from '$lib/types'

export const menuList: Menu[] = [
  { href: "sidebar-default", name: "Sidebar Default" },
  { href: "sidebar-custom", name: "Sidebar Custom Style" },
  { href: "sidebar-multi-default", name: "Multiple-menu Default" },
  { href: "sidebar-multi-custom", name: "Multiple-menu Custom Style" },
  { href: "fixed-menu", name: "Fixed Menu" },
  { href: "topmenu", name: "Top Menu" },
  { href: "scroll-sidebar", name: "Scroll Sidebar"},
];

export const topMenus: TopMenu[] = [
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
];;


export const lorem =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
veniam quibusdam? Quis.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
veniam quibusdam? Quis.`