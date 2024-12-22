

class HomePage {
    openMenu() {
      cy.get('#open-navigation-menu-mobile').click();
    }
  
    logout() {
      cy.get(':nth-child(10) > .next-bve2vl').click();
    }
  }
  
  export default new HomePage();
  