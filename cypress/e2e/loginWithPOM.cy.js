import Login from "../pages/Login.cy"
import NewUser from "../pages/Registration.cy"

describe('Login With Page Object Model', () => {


  beforeEach("Load Fixture Data", function () {

    cy.fixture("framework").then(function (data) {
      this.data = data
    })

  })

  it('Login With Valid Credentials', function () {
    const login = new Login()

    cy.visit("https://ineuron-courses.vercel.app/login")

    /*  login.enterUserName().type("ineuron@gmail.com")
 
      login.enterPassword().type("ineuron")
 
      login.clickOnLoginApplication().click()
 
     */

    // login.enterNewUserName = "otwani@gmail.com"

    // login.enterNewUserName.type("mukesh@gmail.com")

    /*  login.enterNewPassword.type("mukesh")
 
      login.clickOnLoginApplicationButton.click()
 
      
    */

    login.loginToApplication("dummy@gmail.com", "dummy")

  });

  it("Register a new user", function () {

    cy.visit("https://ineuron-courses.vercel.app/login")

    const registration = new NewUser()

    registration.clickOnNewUserLink().should("be.enabled").click()

    registration.enterFirstName(this.data.name)

    registration.enterEmail(this.data.email)

    registration.enterPassword(this.data.password)



  })


});