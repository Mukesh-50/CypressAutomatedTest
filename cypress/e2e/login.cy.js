describe('Login Test With Cypress', () => {

    beforeEach(function(){
        cy.fixture("TestData").then(function(x){
            this.x=x;
        })
    })

    
    it.only('login with valid credentails', function() {
        
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.viewport(1920,1080)

        cy.get('[name="email1"]').type(this.x.uname).should("have.value",this.x.uname)

        cy.get('[name="password1"]').type(this.x.password).should("have.value",this.x.password)

        cy.get('.submit-btn').should("be.enabled").click()

        // add assertion here- check if Welcome text is present then move to next click

        cy.contains("Manage").realHover()

        cy.wait(3000)

        cy.contains("Manage Courses").click()

        cy.xpath("//table[@class='courses-table table table-borderless']//tbody//tr").should("have.length","4")

        cy.get("html").click()

        cy.contains("Add New Course").click({force:true})

        cy.xpath("//input[@name='thumbnail']").attachFile("Back1.jpeg")

        cy.xpath("//input[@name='name']").type(this.x.cname);

        cy.xpath("//textarea[@name='description']").type(this.x.description)

        cy.get("#instructorNameId").type("Ran",{delay:1000})

        cy.xpath("//input[@name='price']").type("200")

        cy.xpath("//div[@class='intructorsList']//p")
        .each(function(ele){
            if(ele.text()==="Random")
            {
                cy.wrap(ele).click()
            }
        })


        cy.xpath("//input[@name='startDate']").click()

        cy.xpath("//div[contains(@class,'react-datepicker__day')]")
        .each(function(ele){
            cy.log(ele.text())
            if(ele.text()==="10")
            {
                cy.wrap(ele).click()
            }
        })

        cy.xpath("//input[@name='endDate']").click()

        cy.xpath("//div[contains(@class,'react-datepicker__day')]")
        .each(function(ele){
            cy.log(ele.text())
            if(ele.text()==="20")
            {
                cy.wrap(ele).click()
            }
        })

        cy.contains("Select Category").click()

        cy.xpath("//button[text()='Testing']").click()

        cy.contains("Save").click()

        cy.xpath("//table[@class='courses-table table table-borderless']//tbody//tr").should("have.length","5")


        cy.xpath("//td[contains(text(),'"+this.x.cname+"')]//preceding::input[1]").should("be.visible")

        cy.xpath("//td[contains(text(),'"+this.x.cname+"')]//preceding::input[1]").click()

        cy.xpath("//td[contains(text(),'"+this.x.cname+"')]//following::button[1]").click()

        //cy.get('.navbar-menu-links > button').click()

        //cy.get('.header').should("be.visible")

        cy.xpath("//table[@class='courses-table table table-borderless']//tbody//tr",{timeout:10000}).should("have.length","4")

        cy.get('.navbar-menu-links > button').click()

        cy.get('.header').should("be.visible")

    });


    it("fixture demo",function(){
        cy.log(this.x.name)
        cy.log(this.x.email)
        cy.log(this.x.body)

    })
});