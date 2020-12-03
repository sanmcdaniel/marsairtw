import { homePageActions } from "../support/pages/homepage";

describe("Successful Search", () => {
  it("Land on home page ==> Select Departure Date ==> Select Return Date ==> Click Search", () => {
    homePageActions.visit();
    homePageActions.selectDepartureDate();
    homePageActions.selectReturnDate();
    homePageActions.clickSearchButton();
  });
});
