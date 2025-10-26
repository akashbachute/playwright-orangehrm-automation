const { test, expect } = require('@playwright/test');
const PageManager = require('../pages/PageManager');

test('Dashboard test using saved session', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'storageState.json' });
  const page = await context.newPage();

  const pageManager = new PageManager(page);
  const dashboardPage = pageManager.getDashboardPage();

  await dashboardPage.openDashboard(); 
    await dashboardPage.waitForPageLoad();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});
