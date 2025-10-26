const BasePage =require('./BasePage');
class AdminPage extends BasePage{

constructor(page){
    super(page);
    this.page = page;   

}
async openAdminPage() {
    return await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

}
};
module.exports=AdminPage;