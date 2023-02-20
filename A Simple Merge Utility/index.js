const utilities = require("./utilities");

const mailValues = {};

mailValues.first_name = "Janet";

const emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";

const mergedContent = utilities.merge(emailTemplate, mailValues);

//mergedContent === "Hi Janet! Thanks for completing this code challenge :)";

console.log(mergedContent);
