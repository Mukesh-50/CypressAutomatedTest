const testValueFixture = [

    {
        "name": "test1",
        "context": "1"
    },
    {
        "name": "test2",
        "context": "2"
    }

]

describe('DDT for Cypress', function () {

    testValueFixture.forEach(function (fixtureData) {


        describe(fixtureData.context, function () {


            before(function () {

                cy.fixture(fixtureData.name).then(function (testData) {
                    this.testData = testData
                })
            })

            it("Login to application", function () {

                /* cy.log(this.testData.name)
                 cy.log(this.testData.email)
                 cy.log(this.testData.body)  
 
                */


                cy.visit("https://ineuron-courses.vercel.app/login")
                cy.login(this.testData.uname, this.testData.pass)


            })

        })

    })



















});

