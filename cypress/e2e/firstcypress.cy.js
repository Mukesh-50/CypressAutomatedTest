
describe('Smoke Test', () => {

    it('verify title', () => {
        cy.visit("https://ineuron-courses.vercel.app")
        cy.title().should("contain", "Courses")

    });

    it('verify exact title', () => {
        cy.visit("https://ineuron-courses.vercel.app")
        cy.title().should("eq", "iNeuron Courses")

    });

    it('verify partial url', () => {
        cy.visit("https://ineuron-courses.vercel.app")
        cy.url().should("contain", "ineuron")
    });
});