export interface MenuType  {
  href: string;
  name: string;
  rel?: string;
  child?: MenuType[]
}

export interface TopMenuType  {
  id: string;
  href?: string;
  name: string;
  rel?: string;
  child?: TopMenuType[]
}

export interface TransitionParamTypes {
  amount?: number;
	delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  opacity?: number;
  x?: number;
  y?: number;
}

export type TransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur';
