const BasePage=require('./BasePage');
class LoginPage extends BasePage{

constructor(page){
    super(page);
    this.page = page;
    this.userName=page.getByPlaceholder('Username');
    this.password =page.getByPlaceholder('Password');
    this.loginButton=page.getByRole('button', { name: 'Login' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' }); 
    this.invalidCredential = page.getByText('Invalid credentials');
    this.brandingImage = page.getByAltText('company-branding');


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

async brandingImageIsVisible(){
    return await this.brandingImage.isVisible();
}

async verifyInvalidLogin(){
    return await this.invalidCredential.isVisible();
}

};
module.exports=LoginPage;
