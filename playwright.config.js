/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	fullyParallel: true,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	}
};

export default config;
