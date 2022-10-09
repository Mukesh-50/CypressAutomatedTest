describe('First API Call', () => {


    it('Get Request via Cypress', () => {


        cy.request("", "https://www.linkedin.com").then(function (resp) {

            cy.log(resp.status)

            cy.log(resp.duration)

            // cy.log(resp.body)

            cy.log(resp.statusText)

            cy.log(resp)

        })


    });


});