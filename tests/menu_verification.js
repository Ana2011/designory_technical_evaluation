module.exports = {

    beforeEach: function(browser){
        browser.page.designoryPage()
            .navigate()
    },

    afterEach : function(browser) {
        browser.page.designoryPage()
            .checkMenu()
    },

    after: function(browser) {
        browser.end()
    },

    "Verifying Designory page": function(browser){
        browser.assert.titleEquals("Full Service Advertising Agency | Designory");
    },

    "Verifying Work": function(browser){
        browser.page.designoryPage()
            .checkPage("work")
            .assert.urlContains("work")
            .assert.titleEquals("Designory Work & Case Studies");
    },

    "Verifying About": function(browser){
        browser.page.designoryPage()
            .checkPage("about")
            .assert.urlContains("about")
            .assert.titleEquals("Print & Digital Agency | Designory");
    },

    "Verifying Careers": function(browser){
        browser.page.designoryPage()
            .checkPage("careers")
            .assert.urlContains("careers")
            .assert.titleEquals("Careers | Designory");
    },

    "Verifying Locations": function(browser){
        browser.page.designoryPage()
            .checkPageLocation()
            .assert.urlContains("location")
            .assert.titleEquals("Long Beach Advertising Agency | Designory");
    },

    "Verifying Contact": function(browser){
        browser.page.designoryPage()
            .checkPage("contact")
            .assert.urlContains("contact")
            .assert.titleEquals("Contact | Designory");
    },

    "Verifying News": function(browser){
        browser.page.designoryPage()
            .checkPage("news")
            .assert.urlContains("news")
            .assert.titleEquals("Designory News & Awards | Designory");
    }

}