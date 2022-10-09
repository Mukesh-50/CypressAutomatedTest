describe('Fixture demo', function () {

    beforeEach(function () {
        cy.fixture("cypressdata").then(function (jsondata) {
            this.jsondata = jsondata

        })
    })

    it('Fixture demo for json file', function () {
        cy.log(this.jsondata.name)
        cy.log(this.jsondata.email)
        cy.log(this.jsondata.body)
    });
});