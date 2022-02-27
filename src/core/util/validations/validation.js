import { emailPattern, patternName } from "../../consts";
export class Validation {
  static contactFormValidation(values) {
    const patterns = {
      firstName: patternName,
      lastName: patternName,
      email: emailPattern,
      message: patternName,
    };
    const errors = {};
    for (let iter in values) {
      if (values[iter] == "") {
        errors[iter] = "Required";
      } else if (!patterns[iter].test(values[iter])) {
        errors[iter] = `${iter} invalid`;
      }
    }
    return errors;
  }
}
