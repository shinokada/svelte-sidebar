import { writable } from 'svelte/store';

export const sidebarOpen = writable(false);
export const sidebarIsInert = writable(true);
export const sidebarResponsive = writable(false);