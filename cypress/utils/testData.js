const authCredentials = { username: "admin", password: "password123" };

const perfectUserInfo = {
  firstname: "Monday",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

const firstNameMissing = {
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

const userInfoToBeUpdated = {
  firstname: "Tuesday",
  lastname: "Tom",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

const additionalNeeds = {
  additionalneeds: "Lunch and Dinner",
};

const improperBookingDates = {
  checkin: "2018-02-01",
  checkout: "2019-01-01",
};

export {
  authCredentials,
  perfectUserInfo,
  firstNameMissing,
  userInfoToBeUpdated,
  additionalNeeds,
  improperBookingDates,
};
