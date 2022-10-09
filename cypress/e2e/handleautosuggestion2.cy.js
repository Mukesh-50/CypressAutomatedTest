describe('Handle Google Search', () => {
    it('Select values from google search', () => {

        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type("Mukesh Otwani", { delay: 100 })

        cy.selectValueFromList("//div[@role='option']/div[1]//span", "linkedin")

    });

    it.only('Login Test', () => {

        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.login("ineuron@ineuron.ai", "ineuron")

    });
});