class Login {


    /* get enterNewUserName() {
         return cy.get("#email1")
     }
 
     */

    set enterNewUserName(email) {
        return cy.get("#email1").type(email)
    }


    enterUserName() {
        return cy.get("#email1")
    }

    get enterNewPassword() {
        return cy.get("#password1")
    }

    enterPassword() {
        return cy.get("#password1")
    }

    get clickOnLoginApplicationButton() {
        return cy.get(".submit-btn")
    }

    clickOnLoginApplication() {
        return cy.get(".submit-btn")
    }

    loginToApplication(username, password) {
        cy.get("#email1").type(username)
        cy.get("#password1").type(password)
        cy.get(".submit-btn").click()
    }


}

export default Login