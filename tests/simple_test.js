module.exports = {
    "First test to verify Nightwatch works correctly": function(browser){
        browser.url("https://www.designory.com/");
        browser.assert.titleEquals("Full Service Advertising Agency | Designory");
    }
}