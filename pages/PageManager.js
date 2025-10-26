const LoginPage=require('../pages/LoginPage');

class PageManager{

constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }


   getLoginPage(){
    return this.loginPage;
  }
  
};
module.exports=PageManager;