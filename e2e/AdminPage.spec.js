const { test, expect } = require('@playwright/test');
const PageManager = require('../pages/PageManager');

// ✅ Use saved session for this test only
test.use({ storageState: 'storageState.json' });

test('AdminPage test using saved session', async ({ page }) => {
  const pageManager = new PageManager(page);
  const adminPage = pageManager.getAdminPage();

  await adminPage.waitForPageLoad();
  await adminPage.openAdminPage();

  await expect(page).toHaveURL(
    'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'
  );
});
