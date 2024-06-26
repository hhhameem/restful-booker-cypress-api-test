const bookingIdSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "array",
  items: {
    type: "object",
    properties: {
      bookingid: {
        type: "number",
      },
    },
    required: ["bookingid"],
  },
};

const createBookingSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    bookingid: {
      type: "integer",
    },
    booking: {
      type: "object",
      properties: {
        firstname: {
          type: "string",
        },
        lastname: {
          type: "string",
        },
        totalprice: {
          type: "integer",
        },
        depositpaid: {
          type: "boolean",
        },
        bookingdates: {
          type: "object",
          properties: {
            checkin: {
              type: "string",
            },
            checkout: {
              type: "string",
            },
          },
          required: ["checkin", "checkout"],
        },
        additionalneeds: {
          type: "string",
        },
      },
      required: [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds",
      ],
    },
  },
  required: ["bookingid", "booking"],
};

const updateBookingSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    firstname: {
      type: "string",
    },
    lastname: {
      type: "string",
    },
    totalprice: {
      type: "integer",
    },
    depositpaid: {
      type: "boolean",
    },
    bookingdates: {
      type: "object",
      properties: {
        checkin: {
          type: "string",
        },
        checkout: {
          type: "string",
        },
      },
      required: ["checkin", "checkout"],
    },
    additionalneeds: {
      type: "string",
    },
  },
  required: [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates",
    "additionalneeds",
  ],
};

export { bookingIdSchema, createBookingSchema, updateBookingSchema };
