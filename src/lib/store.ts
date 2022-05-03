import { writable } from 'svelte/store';
import type {Writable} from 'svelte/store';

export const sidebarOpen:Writable<boolean> = writable(false);
export const sidebarIsInert:Writable<boolean> = writable(true);
export const sidebarResponsive:Writable<boolean> = writable(false);