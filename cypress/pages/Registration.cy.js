class NewUser {

    clickOnNewUserLink() {
        return cy.contains("New user? Signup")
    }

    enterFirstName(name) {
        return cy.get("#name").type(name)
    }

    enterEmail(email) {
        return cy.get("#email").type(email)
    }

    enterPassword(pass) {
        return cy.get("#password").type(pass)
    }


}

export default NewUser