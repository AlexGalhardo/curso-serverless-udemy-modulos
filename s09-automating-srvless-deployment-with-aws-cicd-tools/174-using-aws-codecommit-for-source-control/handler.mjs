"use strict";

import moment from "moment";

export const logger = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless CI/CD Demo",
      version: "v4.0",
      timestamp: moment().unix(),
    }),
  };
};
