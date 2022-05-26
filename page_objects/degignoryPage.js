module.exports = {
    url: 'https://www.designory.com/',
    elements: {
        navigator: {
            selector: '#nav-toggle'
        }
    },
    commands: [{
        checkPage(pageName) {
            return this
                .waitForElementVisible("@navigator")
                .click("@navigator")
                .click(`a[href="/${pageName}"]`)
        }

    }]
}
