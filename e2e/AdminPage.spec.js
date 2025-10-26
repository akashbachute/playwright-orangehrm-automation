const { test, expect } = require('@playwright/test');
const PageManager = require('../pages/PageManager');

test('Dashboard test using saved session', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'storageState.json' });
  const page = await context.newPage();
    const pageManager = new PageManager(page);
    const getAdminPage= pageManager.getAdminPage();
    await getAdminPage.waitForPageLoad();
    await getAdminPage.openAdminPage(); 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
});