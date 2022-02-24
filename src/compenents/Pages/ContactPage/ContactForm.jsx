import { Formik } from "formik";

export default function ContactForm() {
  return (
    <div>
      {/* <FormPart
        fieldArr={["First Name", "Last Name", "Phone"]}
        buttonValue="send"
        formName="Contact Us"
      /> */}

      <Formik
        initialValues={{ firstName, lastName, phoneNumber, Email, message }}
      ></Formik>
    </div>
  );
}
