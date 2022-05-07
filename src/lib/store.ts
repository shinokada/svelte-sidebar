import { writable } from 'svelte/store';

// used to toggle the visibility of the sidebar
export const sidebarOpen = writable(false);
export const sidebarIsInert = writable(true);

// Responsive component set to true when the screen is more than 1024px
// then it hide the hamburger menu
export const sidebarStayOpen = writable(false);