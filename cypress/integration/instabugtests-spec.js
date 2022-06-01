describe('test scenarios' , ()=>{
    it('1st scenario : email not exist' , ()=>{
        // visit my url
        cy.visit('http://localhost:8080/login')

        // write the email and password
        cy.get('#email')
        .type('medomy@gmail.com')

        cy.get('#password')
        .type('A12345')

        // clicking the button
        cy.get('.activebtn').click()

        // assertion that it will contain the messege
        cy.contains('Your email and/or your password are incorrect')
    })

    it('2nd scenario : email exists but password not correct' , ()=>{
        // visit my url
        cy.visit('http://localhost:8080/login')

        // write the email and password
        cy.get('#email')
        .type('mohamed@instabug.com')

        cy.get('#password')
        .type('A12345')

        // clicking the button
        cy.get('.activebtn').click()

        // assertion that it will contain the messege
        cy.contains('Your email and/or your password are incorrect')
    })

    it('3rd scenario : email and password exist' , ()=>{
        // visit my url
        cy.visit('http://localhost:8080/login')

        // write the email and password
        cy.get('#email')
        .type('mohamed@instabug.com')

        cy.get('#password')
        .type('A12345678')

        // clicking the button
        cy.get('.activebtn').click()

        // assertion that it will route to welcome
        cy.url().should('includes' , '/welcome')
    })

    it('4th scenario : not a valid email' , ()=>{
        // visit my url
        cy.visit('http://localhost:8080/login')

        // write the email 
        cy.get('#email')
        .type('dddd')

        cy.get('#email').blur()

        cy.contains('Enter a valid email')

        cy.get('#email').should('have.class', 'err-inp')
    })

})