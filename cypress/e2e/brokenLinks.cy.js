describe('First API Call', () => {


    it('Get Request via Cypress', () => {


        // create array which will be having size 0
        // if code is not 2xx or 3xx add link href in that array
        // if array length is not equal to zero

        // Task 2 - find broken images in Cypress using custom command


        cy.visit("https://ineuron-courses.vercel.app/login")


        let sarika = []

        cy.get("a").each(link => {

            cy.request({
                url: link.prop("href"),

                failOnStatusCode: false
            })
                .then(function (resp) {
                    cy.log(resp.status)
                    //sarika.push(link.prop("href"))
                })

        })
        //cy.wrap(sarika).should("have.length")

    });




});