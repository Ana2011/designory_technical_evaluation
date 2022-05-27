module.exports = {

    "Verify Accept": function(browser){
        browser.page.degignoryPage()
            .checkCookieGot()
            .assert.not.visible('@cookieContainer')
            .end();
    },

    "Verify X": function(browser){
        browser.page.degignoryPage()
            .checkCookieX()
            .assert.not.visible('@cookieContainer')
            .end();
    },

    "Verify Clean": function(browser){
        browser.page.degignoryPage()
            .checkCookieClean()
            .assert.visible('@cookieContainer')
            .end();
    },

}