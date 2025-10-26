const LoginPage=require('../pages/LoginPage');
const dashboardPage =require('./dashboardPage');
const AdminPage =require('./AdminPage');

class PageManager{

constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new dashboardPage(page);
    this.adminPage = new AdminPage(page);
  }


   getLoginPage(){
    return this.loginPage;
  }
  
  getDashboardPage(){
    return this.dashboardPage;
  }
  getAdminPage(){
return this.adminPage;
  }
};
module.exports=PageManager;