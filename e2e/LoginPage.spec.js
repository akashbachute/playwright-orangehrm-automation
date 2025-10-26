const {test,expect}=require('@playwright/test');
const PageManager=require('../pages/PageManager');
const users=require('../test-data/users.json');

test.describe('Login Page Tests',()=>{

test('Verify that user is able to login with valid credentials',async({page})=>{
    const pageManager=new PageManager(page);
    const loginPage=pageManager.getLoginPage();
    await loginPage.openUrl();
    await loginPage.loginToApplication(users.userName,users.password);
      await loginPage.waitForPageLoad();
    const isLoginSuccessful=await loginPage.verifySuccessfulLogin();
    expect(isLoginSuccessful).toBeTruthy();
      await page.context().storageState({ path: 'storageState.json' });


})

test('Verify that user is not able to login with invalid credentials',async({page})=>{
  const pageManager=new PageManager(page);
  const loginPage=pageManager.getLoginPage();
  await loginPage.openUrl();
  await loginPage.loginToApplication('invalidUser','invalidPass');
    await loginPage.waitForPageLoad();
  const isInvalidLogin=await loginPage.verifyInvalidLogin();
  expect(isInvalidLogin).toBeTruthy();
})


test('Verify that branding image is visible on login page',async({page})=>{
  const pageManager=new PageManager(page);
  const loginPage=pageManager.getLoginPage();
  await loginPage.openUrl();
  await loginPage.waitForPageLoad();
  const isBrandingImageVisible=await loginPage.brandingImageIsVisible();
  expect(isBrandingImageVisible).toBeTruthy();

})



});