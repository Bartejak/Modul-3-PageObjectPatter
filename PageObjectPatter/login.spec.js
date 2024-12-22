

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';

describe("Pierwszy test auto", () => {

  it("1 Otwieranie strony LMS", () => {
    Login.visit();  
  });

  it("2 Znajdź wejście z pocztą, wpisz email i hasło", () => {
    Login.visit();  
    Login.fillEmail("user888@gmail.com");  
    Login.fillPassword("1234567890");  
  });

  it("3 sprawdzenie przycisku submit", () => {
    Login.visit();  
    Login.checkSubmitButtonText();  
  });

  it("4 logowanie do strony", () => {
    Login.visit();  
    Login.fillEmail("user888@gmail.com");  
    Login.fillPassword("1234567890");  
    Login.submit();  
  });

  it("5 logowanie i wylogowanie", () => {
    Login.visit();  
    Login.fillEmail("user888@gmail.com");  
    Login.fillPassword("1234567890");  
    Login.submit();  

    HomePage.openMenu();  
    HomePage.logout();  
  });
});
