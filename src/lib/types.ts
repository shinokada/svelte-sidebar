export interface MenuType  {
  href: string;
  name: string;
  rel?: string;
  child?: MenuType[]
}

export interface TopMenuType  {
  id: number;
  href: string;
  name: string;
  rel?: string;
  child?: TopMenuType[]
}

// export interface NavbarType {

// }