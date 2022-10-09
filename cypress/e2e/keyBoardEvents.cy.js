describe('Handle Click', () => {


    it('Right Click With Element', () => {

        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get("a").debug()

        cy.get("#email1").type("mukesh@gmail.com")

        //cy.pause()

        cy.get("#password1").type("sampada{enter}")

    });


});