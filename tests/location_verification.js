module.exports = {

    beforeEach: function(browser){
        browser.page.designoryPage()
            .navigate()
    },

    after: function(browser) {
        browser.end()
    },

    "Verifying Designory page": function(browser){
        browser.assert.titleEquals("Full Service Advertising Agency | Designory");
    },

    "Verifying Locations Chicago": function(browser){
        browser.page.designoryPage()
            .checkPageLocationChicago()
            .assert.urlContains("location")
            .assert.titleEquals("Chicago Advertising Agency | The Designory")
            .assert.textEquals("@locationH1", "CHI")
            .assert.textEquals("@locationPhone", "Phone: +1 312 729 4500")
            .verify.attributeEquals("@locationImg","src","https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY")
        browser.elements('css selector', 'h2', function (result) {
            for(let i=0; i < result.value.length; i++) {
                let element_id = Object.values(result.value[i])[0]
                browser.elementIdCssProperty(element_id, 'font-size', function(res){
                    browser.verify.equal(res.value,'40px')
                })
            }
        })      
    }
}