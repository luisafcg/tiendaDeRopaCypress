describe ('Search elements', function(){
    beforeEach(()=>{
        cy .visit ('/');
    })
    it ('Search elements with multiples results',() =>{
       cy.fixture('index').then((index) =>{
           cy.get(index.elementSearch).type('dress');
           cy.get(index.btnSearch).click();
       })

       cy.fixture('searchResults').then((search =>{
           cy.get(search.lighter).should('contain', 'dress');
       }))
    })

    it ('Search elements with not results', () =>{
        cy.fixture('index').then((index) =>{
          cy.get(index.elementSearch).type('Un vestido rojo');
          cy.get(index.btnSearch).click();  
        })

        cy.fixture('searchResults').then((search =>{
          cy.get(search.mensajeAlerta).should('contain', 'No results were found for your search');
        }))


    })
})