/// <reference types="cypress" />

context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('https://80.69.180.108:8441')
    })

    it("Example sending the GET request"), ()=>{
        cy.request("https://80.69.180.108:8441")
            .then((response)=>{
                console.log(response);
        })
}
})