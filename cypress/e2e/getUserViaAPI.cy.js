describe('Get All Users', () => {
    it('Verify API response Code', () => {


        cy.request({
            method: 'DELETE',
            url: "https://gorest.co.in/public/v2/users/4434",
            headers: {
                "Authorization": "Bearer 7a99fa78ea0075bf8f8105a75e72e9539fd169ddab9327297f1809a8c5c24240"
            }
        }).then(function (response) {
            //cy.log(response)
            //cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body).has.property("status", "active")
            expect(response.body).has.property("name", "Manoj")
            expect(response.body).has.property("gender", "male")

        })

    });
});