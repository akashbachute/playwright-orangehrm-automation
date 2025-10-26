const LoginPage=require('../pages/LoginPage');
const dashboardPage =require('./dashboardPage');

class PageManager{

constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new dashboardPage(page);
  }


   getLoginPage(){
    return this.loginPage;
  }
  
  getDashboardPage(){
    return this.dashboardPage;
  }
};
module.exports=PageManager;