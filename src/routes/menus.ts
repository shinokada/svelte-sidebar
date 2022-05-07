import type { MenuType, TopMenuType } from '$lib/types'

export const mainMenuList: MenuType[] = [
  { href: "/responsive/top-fix", rel:"external", name: "Responsive Top Fixed" },
  { href: "/responsive-no-transition/top-fix", rel:"external", name: "Responsive No Transition" },
  { href: "/responsive-transition/blur", rel:"external", name: "Responsive Transitions" },
  { href: "/transitions/blur", rel:"external", name: "Transitions" },
  { href: "/topmenu", rel:"external", name: "Other menus" },
]

export const menuListResponsive: MenuType[] = [
  { href: "/responsive/top-fix", name: "Responsive Top Fixed" },
  { href: "/responsive/top-fix-2", name: "Responsive Top Fixed 2" },
  { href: "/responsive/top-fix-3", name: "Responsive Top Fixed 3" },
];
export const menuListResponsiveTransition: MenuType[] = [
  { href: "/responsive-transition/blur", name: "Responsive Blur" },
  { href: "/responsive-transition/fade", name: "Responsive Fade" },
  { href: "/responsive-transition/fly-x", name: "Responsive Fly-x" },
  { href: "/responsive-transition/fly-y", name: "Responsive Fly-y" },
  { href: "/responsive-transition/slide", name: "Responsive Slide" },
];

export const menuListResponsiveNoTransition: MenuType[] = [
  { href: "/responsive-no-transition/top-fix", name: "Responsive No Transition" },
  { href: "/responsive-no-transition/top-fix-2", name: "Responsive No Transition 2" },
  { href: "/responsive-no-transition/top-fix-3", name: "Responsive No Transition 3" },
];

export const menuListTransition: MenuType[] = [
  { href: "/transitions/slide", name: "Slide" },
  { href: "/transitions/fade", name: "Fade" },
  { href: "/transitions/fly-x", name: "Fly X" },
  { href: "/transitions/fly-y", name: "Fly Y" },
  { href: "/transitions/blur", name: "Blur" },
];

export const menuList: MenuType[] = [
  { href: "/fixed-menu", rel:'external', name: "Fixed Top Menu" },
  { href: "/inert", rel:'external', name: "Inert" },
  { href: "/multi-custom-style", rel:'external', name: "Multiple-menu Custom Style" },
  { href: "/multi-default", rel:'external', name: "Multiple-menu Default" },
  { href: "/scroll-sidebar", rel:'external', name: "Scroll Sidebar" },
  { href: "/sidebar-custom-style", rel:'external', name: "Sidebar Custom Style" },
  { href: "/topmenu", rel:'external', name: "Top Menu" },
];

export const allMenuList: MenuType[] = [
  { href: "/", name: "Sidebar Default" },
  { href: "/responsive/top-fix", name: "Responsive Top Fixed" },
  { href: "/responsive/top-fix-2", name: "Responsive Top Fixed 2" },
  { href: "/responsive/top-fix-3", name: "Responsive Top Fixed 3" },
  { href: "/responsive-transition/blur", name: "Responsive blur" },
  { href: "/responsive-transition/fade", name: "Responsive fade" },
  { href: "/responsive-transition/fly-x", name: "Responsive fly-x" },
  { href: "/responsive-transition/fly-y", name: "Responsive fly-y" },
  { href: "/responsive-transition/slide", name: "Responsive slide" },
  { href: "/transitions/slide", name: "Slide" },
  { href: "/transitions/fade", name: "Fade" },
  { href: "/transitions/fly-x", name: "Fly X" },
  { href: "/transitions/fly-y", name: "Fly Y" },
  { href: "/transitions/blur", name: "Blur" },
  { href: "/responsive-no-transition/top-fix", name: "Responsive No Transition" },
  { href: "/responsive-no-transition/top-fix-2", name: "Responsive No Transition 2" },
  { href: "/responsive-no-transition/top-fix-3", name: "Responsive No Transition 3" },
  { href: "/fixed-menu", name: "Fixed Top Menu" },
  { href: "/inert", name: "Inert" },
  { href: "/multi-custom-style", name: "Multiple-menu Custom Style" },
  { href: "/multi-default", name: "Multiple-menu Default" },
  { href: "/scroll-sidebar", name: "Scroll Sidebar" },
  { href: "/sidebar-custom-style", name: "Sidebar Custom Style" },
  { href: "/topmenu", name: "Top Menu" },
];

export const topMenus: TopMenuType[] = [
  {
    id:1,
    name: "Responsive",
    href: "/responsive/top-fix",
    rel:'external',
    child: [
      {
        id: 2,
        name: "Responsive Top Fixed",
        href: "/responsive/top-fix"
      },
      {
        id: 3,
        name: "Responsive Top Fixed 2",
        href: "/responsive/top-fix-2"
      },
      {
        id: 4,
        name: "Responsive Top Fixed 3",
        href: "/responsive/top-fix-3"
      },
    ],
  },
  {
    id:11,
    name: "No Transition",
    href: "/responsive-no-transition/top-fix",
    rel:'external',
    child: [
      {
        id: 12,
        name: "Responsive Top Fixed 1",
        href: "/responsive-no-transition/top-fix"
      },
      {
        id: 13,
        name: "Responsive Top Fixed 2",
        href: "/responsive-no-transition/top-fix-2"
      },
      {
        id: 14,
        name: "Responsive Top Fixed 3",
        href: "/responsive-no-transition/top-fix-3"
      },
    ],
  },
  {
    id: 21,
    name: "Responsive Transition",
    href: "/responsive-transition/blur",
    child: [
      {
        id: 22,
        name: "Blur Transition",
        href: "/responsive-transition/blur"
      },
      {
        id: 23,
        name: "Fade Transition",
        href: "/responsive-transition/fade",
      },
      {
        id: 24,
        name: "Fly X Transition",
        href: "/responsive-transition/fly-x",
      },
      {
        id: 25,
        name: "Fly Y Transition",
        href: "/responsive-transition/fly-y",
      },
      {
        id: 26,
        name: "Slide Transition",
        href: "/responsive-transition/slide",
      },
    ],
  },
  {
    id: 31,
    name: "Others",
    href: "/fixed-menu",
    child: [
      {
        id: 32,
        name: "Fixed Top Menu",
        href: "/fixed-menu"
      },
      {
        id: 33,
        name: "Inert",
        href: "/inert",
      },
      {
        id: 34,
        name: "Multiple-menu Custom Style",
        href: "/multi-custom-style",
      },
      {
        id: 35,
        name: "Multiple-menu Default",
        href: "/multi-default",
      },
      {
        id: 36,
        name: "Scroll Sidebar",
        href: "/scroll-sidebar",
      },
      {
        id: 37,
        name: "Sidebar Custom Style",
        href: "/sidebar-custom-style",
      },
      {
        id: 38,
        name: "Sidebar Top Menu",
        href: "/sidebar-topmenu",
      },
      {
        id: 39,
        name: "Top Menu",
        href: "/topmenu",
      },
    ],
  }
];


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
ipsa, iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
veniam quibusdam? Quis.`