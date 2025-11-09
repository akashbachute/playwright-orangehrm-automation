const { chromium } = require('@playwright/test');
const users = require('./test-data/users.json');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Open Login Page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByPlaceholder('Username').fill(users.userName);
  await page.getByPlaceholder('Password').fill(users.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait until Dashboard loads
  await page.waitForURL('**/dashboard/**');

  // ✅ Save session
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
};
