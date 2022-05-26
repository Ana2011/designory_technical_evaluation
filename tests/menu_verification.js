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
    }

}