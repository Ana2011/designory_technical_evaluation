module.exports = {
    beforeEach: function(browser){
        browser.page
            .degignoryPage()
            .navigate()
    },

    after: function(browser) {
        browser.end()
    },

    "Verifying Designory page": function(browser){
        browser.assert.titleEquals("Full Service Advertising Agency | Designory");
    },

    "Verifying Work": function(browser){
        browser.page.degignoryPage()
            .checkPage("work")
            .assert.urlContains("work")
            .assert.titleEquals("Designory Work & Case Studies");
    },

    "Verifying About": function(browser){
        browser.page.degignoryPage()
            .checkPage("about")
            .assert.urlContains("about")
            .assert.titleEquals("Print & Digital Agency | Designory");
    },

    "Verifying Careers": function(browser){
        browser.page.degignoryPage()
            .checkPage("careers")
            .assert.urlContains("careers")
            .assert.titleEquals("Careers | Designory");
    },

    // "Verifying Locations": function(browser){
    //     // TO CHECK WHAT OT DO
    // },

    "Verifying Contact": function(browser){
        browser.page.degignoryPage()
            .checkPage("contact")
            .assert.urlContains("contact")
            .assert.titleEquals("Contact | Designory");
    },

    "Verifying News": function(browser){
        browser.page.degignoryPage()
            .checkPage("news")
            .assert.urlContains("news")
            .assert.titleEquals("Designory News & Awards | Designory");
    }

}