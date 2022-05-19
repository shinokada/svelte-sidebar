import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Svelte-Sidebar');
});

// Responsive
test('Responsive top-fix page has expected h1', async ({ page }) => {
	await page.goto('/responsive/top-fix');
	expect(await page.textContent('h1')).toBe('Responsive with top menu fixed');
});

test('Responsive top-fix 2 page has expected h1', async ({ page }) => {
	await page.goto('/responsive/top-fix-2');
	expect(await page.textContent('h1')).toBe('Responsive with top menu fixed 2');
});

test('Responsive top-fix 3 page has expected h1', async ({ page }) => {
	await page.goto('/responsive/top-fix-3');
	expect(await page.textContent('h1')).toBe('Responsive with top menu fixed 3');
});

// Responsive no transition
test('Responsive No Transition page has expected h1', async ({ page }) => {
	await page.goto('/responsive-no-transition/top-fix');
	expect(await page.textContent('h1')).toBe('Responsive No Transition');
});

test('Responsive No Transition 2 page has expected h1', async ({ page }) => {
	await page.goto('/responsive-no-transition/top-fix-2');
	expect(await page.textContent('h1')).toBe('Responsive No Transition 2');
});

test('Responsive No Transition 3 page has expected h1', async ({ page }) => {
	await page.goto('/responsive-no-transition/top-fix-3');
	expect(await page.textContent('h1')).toBe('Responsive No Transition 3');
});

// Transisions
test('Blur Demo page has expected h1', async ({ page }) => {
	await page.goto('/transitions/blur');
	expect(await page.textContent('h1')).toBe('Blur Demo');
});

test('Fade Demo page has expected h1', async ({ page }) => {
	await page.goto('/transitions/fade');
	expect(await page.textContent('h1')).toBe('Fade Demo');
});

test('Fly-x Demo page has expected h1', async ({ page }) => {
	await page.goto('/transitions/fly-x');
	expect(await page.textContent('h1')).toBe('Fly-x Demo');
});

test('Fly-y Demo page has expected h1', async ({ page }) => {
	await page.goto('/transitions/fly-y');
	expect(await page.textContent('h1')).toBe('Fly-y Demo');
});

test('Slide Demo page has expected h1', async ({ page }) => {
	await page.goto('/transitions/slide');
	expect(await page.textContent('h1')).toBe('Slide Demo');
});

// other menus
test('Fixed top menu page has expected h1', async ({ page }) => {
	await page.goto('/fixed-menu');
	expect(await page.textContent('h1')).toBe('Fixed Top Menu Demo');
});

test('Inert page has expected h1', async ({ page }) => {
	await page.goto('/inert');
	expect(await page.textContent('h1')).toBe('Inert Demo');
});

test('Custom Styled Multi-menu Sidebar page has expected h1', async ({ page }) => {
	await page.goto('/multi-custom-style');
	expect(await page.textContent('h1')).toBe('Custom Styled Multi-menu Sidebar');
});

test('Multi-menu Sidebar page has expected h1', async ({ page }) => {
	await page.goto('/multi-default');
	expect(await page.textContent('h1')).toBe('Multi-menu Sidebar');
});

test('Scroll sidebar page has expected h1', async ({ page }) => {
	await page.goto('/scroll-sidebar');
	expect(await page.textContent('h1')).toBe('Scroll Sidebar Demo');
});

test('Custom Style page has expected h1', async ({ page }) => {
	await page.goto('/sidebar-custom-style');
	expect(await page.textContent('h1')).toBe('Custom Style');
});

test('Top menu page has expected h1', async ({ page }) => {
	await page.goto('/topmenu');
	expect(await page.textContent('h1')).toBe('Top Menu');
});

// Flowbite-svelte sidebar page
test('Flowbite-Svelte Sidebar page has expected h1', async ({ page }) => {
	await page.goto('/flowbite-svelte-sidebar');
	expect(await page.textContent('h1')).toBe('Flowbite Svelte Sidebar');
});

// Props page
test('Props page has expected h1', async ({ page }) => {
	await page.goto('/props');
	expect(await page.textContent('h1')).toBe('Props');
});
