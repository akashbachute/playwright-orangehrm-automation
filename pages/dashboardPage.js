const BasePage = require('./BasePage');

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async openDashboard() {
        // If session is loaded, just go to the dashboard URL
        return await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }

}
module.exports = DashboardPage;