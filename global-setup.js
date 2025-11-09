const { chromium } = require('@playwright/test');
const users = require('./test-data/users.json');

async function globalSession() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Open Login Page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByPlaceholder('Username').fill(users.userName);
  await page.getByPlaceholder('Password').fill(users.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Wait for dashboard to load
  await page.waitForURL('**/dashboard/**');
  await page.waitForSelector('.oxd-topbar-header-breadcrumb'); // header visible

  // ✅ Save session state
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
};

module.exports = globalSession;
