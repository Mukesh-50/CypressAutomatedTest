describe('This is my first test suite', function () {
    it('My First TC', function () {
        expect(true).to.equal(true)
    })

    it('My Second Test', function () {
        expect(true).to.equal(false)
    })

    it.skip('My Third Test', function () {
        expect(true).to.equal(false)
    })

    it("My 4th Test")

    /* ==== Test Created with Cypress Studio ==== */
    it('Login To Application', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://ineuron-courses.vercel.app/');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.navbar-menu-links > button').click();
        cy.get('#email1').clear('i');
        cy.get('#email1').type('ineuron@ineuron.ai');
        cy.get('#password1').clear();
        cy.get('#password1').type('ineuron');
        cy.get('.submit-btn').click();
        cy.get('.content').click();
        cy.get('.errorMessage').should('have.text', 'Email and Password Doesn\'t match');
        /* ==== End Cypress Studio ==== */
    });
})