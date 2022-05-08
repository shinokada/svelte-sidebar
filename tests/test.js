import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Default Demo');
});

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

test('Responsive top-fix 3 page has expected h1', async ({ page }) => {
	await page.goto('/responsive/top-fix-3');
	expect(await page.textContent('h1')).toBe('Responsive with top menu fixed 3');
});
