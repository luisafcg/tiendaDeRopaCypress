describe ('Search elements', function(){
    beforeEach(()=>{
        cy .visit ('/');
    })
    it ('Search elements with multiples results',() =>{
           cy.search('dress')
           cy.fixture('searchResults').then((search =>{
           cy.get(search.lighter).should('contain', 'dress');
       }))
    })

    it ('Search elements with not results', () =>{
          cy.search('Vestido rojo')
          cy.fixture('searchResults').then((search =>{
          cy.get(search.mensajeAlerta).should('contain', 'No results were found for your search');
        }))
    })
})