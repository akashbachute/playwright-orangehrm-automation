class BasePage {
 constructor(page) {
    this.page = page;
  }

  async waitForPageLoad() {
    return await this.page.waitForLoadState('networkidle');
  }

};
module.exports=BasePage;