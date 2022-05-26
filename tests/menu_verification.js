module.exports = {
    beforeEach: function(browser){
        browser.page
            .degignoryPage()
            .navigate()
    },
    
    after: function(browser) {
        browser.end()
    },

    "Verifing Designory page": function(browser){
        browser.assert.titleEquals("Full Service Advertising Agency | Designory");
    }

}