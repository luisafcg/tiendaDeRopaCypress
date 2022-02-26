describe ('Login', ()=>{

    beforeEach(() =>{
        cy.visit('/');
    })

    it ('Login with incorrect email', () =>{
        cy.login('micorreo@gmail.com', 'contrasena');
        
    })
})