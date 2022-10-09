describe('sample', () => {

    beforeEach(function () {
        cy.fixture("cypressdata").then(function (x) {
            this.x = x;
        })
    })

    it.skip('sample', function () {

        let category = "Mukesh Otwani"

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.login("ineuron@ineuron.ai", "ineuron")

        let countOfElements = 0;

        cy.contains("Manage").realHover()

        cy.wait(3000)

        cy.contains("Manage Courses").click()

        /*cy.xpath("//table[@class='courses-table table table-borderless']//tbody//tr", { timeout: 10000 }).then(function (ele) {
            countOfElements = ele.length
            cy.log(ele.length)
            cy.wrap(ele.length).as("count")
        })
        */

        cy.xpath("//table[@class='courses-table table table-borderless']//tbody//tr", { timeout: 10000 }).its("length").as("beforeadding")

        cy.get('@beforeadding').then(function (count) {
            expect(count).to.be.equal(1)
        })





        // cy.wait('@count').should("have.length", "1")

        //cy.log("total element " + countOfElements)

    });

    it("db click ", function () {

        cy.visit("https://ineuron-courses.vercel.app/login")


        cy.get("input").debug()

        cy.get('[name="email1"]').type("{shift}mukesh@gmail.com", { release: false })



        cy.get('[name="password"]').type("hello{enter}")

        //https://github.com/cypress-io/cypress/issues/2386
        //https://github.com/cypress-io/cypress/issues/7105






    })


});