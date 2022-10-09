
describe('Handle JS Alerts', () => {
    it('Normal Alert', function () {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click()

        cy.on("window:alert", function (msg) {
            expect(msg).to.be.equal("I am a JS Alert")
        })
    });

    it('Confirm Alert', function () {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()

        cy.on("window:confirm", function (msg) {
            expect(msg).to.be.equal("I am a JS Confirm")

            return false

        })

        cy.contains("You clicked: Cancel").should("be.visible")

    });

    it.only('Prompt Alert', function () {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then(function (win) {
            cy.contains("Click for JS Prompt").click()
            cy.stub(win, "prompt").returns("Cypress")
        })
        cy.contains("You entered: Cypress").should("be.visible")

    });

    // https://docs.cypress.io/guides/references/trade-offs#Multiple-tabs











});