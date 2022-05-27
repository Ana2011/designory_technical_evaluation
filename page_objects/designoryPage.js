module.exports = {
    url: 'https://www.designory.com/',
    elements: {
        navigator: '#nav-toggle',
        cookieContainer: '#cookie-container',
        buttonGot: "button.cookie-button",
        buttonX: "button.cookie-x-button"
    },
    commands: [{
        checkPage(pageName) {
            return this
                .waitForElementVisible("@navigator")
                .click("@navigator")
                .click(`a[href="/${pageName}"]`)
        },

        checkPageLocation() {
            return this
                .waitForElementVisible("@navigator")
                .click("@navigator")
                .click(`li>a[href="#"]`)
                .click(`li>a[href="/locations/long-beach"]`)
        },

        checkMenu() {
            return this
                .waitForElementVisible("@navigator")
                .click("@navigator")
                .assert.elementsCount("nav>ul>li>a", 6)
                .assert.textEquals("nav>ul>li:nth-child(1)", "WORK")
                .assert.textEquals("nav>ul>li:nth-child(2)", "ABOUT")
                .assert.textEquals("nav>ul>li:nth-child(3)", "CAREERS")
                .assert.textEquals("nav>ul>li:nth-child(4)", "LOCATIONS")
                .assert.textEquals("nav>ul>li:nth-child(5)", "CONTACT")
                .assert.textEquals("nav>ul>li:nth-child(6)", "NEWS")
        },

        checkCookieGot() {
            return this
                .navigate()
                .waitForElementVisible('@cookieContainer')
                .click('@buttonGot')
                .navigate()
        },

        checkCookieX() {
            return this
                .navigate()
                .waitForElementVisible('@cookieContainer')
                .click('@buttonX')
                .navigate()
        },

        checkCookieClean() {
            return this
                .navigate()
                .waitForElementVisible('@cookieContainer')
                .click('@buttonGot')
                .deleteCookies(function() {})
                .navigate()
        },
    }]
}
