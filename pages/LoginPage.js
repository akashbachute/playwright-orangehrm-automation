const BasePage=require('./BasePage');
class LoginPage extends BasePage{

constructor(page){
    super(page);
    this.page = page;
    this.userName=page.getByPlaceholder('Username');
    this.password =page.getByPlaceholder('Password');
    this.loginButton=page.getByRole('button', { name: 'Login' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' }); 

}


async openUrl(){
    return await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}


async loginToApplication(userName, password)
{
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
}

async verifySuccessfulLogin()
{
return await this.dashboardHeading.isVisible();
} 



};
module.exports=LoginPage;