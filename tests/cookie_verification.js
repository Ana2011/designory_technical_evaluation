module.exports = {

    "Verify Accept": function(browser){
        browser.page.designoryPage()
            .checkCookieGot()
            .assert.not.visible('@cookieContainer')
            .end();
    },

    "Verify X": function(browser){
        browser.page.designoryPage()
            .checkCookieX()
            .assert.not.visible('@cookieContainer')
            .end();
    },

    "Verify Clean": function(browser){
        browser.page.designoryPage()
            .checkCookieClean()
            .assert.visible('@cookieContainer')
            .end();
    },

}