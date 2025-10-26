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

})




});