import { writable } from 'svelte/store';

export const open = writable(false);
export const isInert = writable(true);
export const responsive = writable(false);