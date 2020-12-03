const searchBoxEl = {
  departureDropdown: "#departing",
  departureDropdownValue: {
    july: "#departing option[value='0']",
    december: "#departing option[value='1']",
    julyNextYear: "#departing option[value='2']",
    decemberNextYear: "#departing option[value='3']",
    julyNextTwoYear: "#departing option[value='4']",
    decemberNextTwoYear: "#departing option[value='5']"
  },
  returnDropdown: "#returning",
  returnDropdownValue: {
    july: "#returning option[value='0']",
    december: "#returning option[value='1']",
    julyNextYear: "#returning option[value='2']",
    decemberNextYear: "#returning option[value='3']",
    julyNextTwoYear: "#returning option[value='4']",
    decemberNextTwoYear: "#returning option[value='5']"
  },
  promocodeTextBox: "#promotional_code",
  searchButton: "dd >input[value='Search']"
};

export const homePageActions = {
  visit() {
    cy.visit("https://marsair.thoughtworks-labs.net/Nattapong");
  },

  selectDepartureDate() {
    cy.get(searchBoxEl.departureDropdown).select("0");
  },

  selectReturnDate() {
    cy.get(searchBoxEl.returnDropdown).select("5");
  },

  clickSearchButton() {
    cy.get(searchBoxEl.searchButton).click();
  }
};
