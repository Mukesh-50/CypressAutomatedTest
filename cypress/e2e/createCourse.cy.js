describe('Create Course - Delete Course', function () {


    beforeEach(function () {
        cy.fixture("cypressdata").then(function (jsondata) {
            this.jsondata = jsondata

        })
    })

    it('Create course', function () {
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get('[name="email1"]').type(this.jsondata.username).should("have.value", this.jsondata.username)

        cy.get('[name="password1"]').type(this.jsondata.username).should("have.value", this.jsondata.username)

        cy.get('.submit-btn').should("be.enabled").click()

        cy.contains("Manage").realHover()

        cy.wait(3000)

        cy.contains("Manage Courses").click()

        cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length", "4")

        cy.contains("Add New Course").click({ force: true })

        cy.get("#thumbnail").attachFile("Back1.jpeg")

    });


});