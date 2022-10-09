describe('Handle Google Search', () => {
    it('Select values from google search', () => {

        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type("Mukesh Otwani", { delay: 100 })


        //non select dropdown, date picker, auto suggestion/complete

        cy.xpath("//div[@role='option']/div[1]//span")
            .each(function (ele, num1, list1) {
                cy.log(ele.text())

                if (ele.text().includes("cypress")) {
                    cy.wrap(ele).click({ force: true })
                }

            })


    });
});