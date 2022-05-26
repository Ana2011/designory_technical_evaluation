module.exports = {
    "Verifing Designory page": function(browser){
        browser.page
            .degignoryPage()
            .navigate()
            .assert.titleEquals("Full Service Advertising Agency | Designory");
    }
}