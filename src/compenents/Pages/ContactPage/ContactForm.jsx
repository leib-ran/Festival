import { Formik } from "formik";
import { useHistory } from "react-router";
import { ContactApi } from "../../../core/http/contact";
import { Validation } from "../../../core/util/validations/validation";

export default function ContactForm() {
  const history = useHistory();
  return (
    <div>
      {/* <FormPart
        fieldArr={["First Name", "Last Name", "Phone"]}
        buttonValue="send"
        formName="Contact Us"
      /> */}

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        validate={Validation.contactFormValidation}
        onSubmit={(values) => {
          ContactApi.getContactApi(values);
          history.push("/approved-contact-page");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="  w-screen relative">
            <img
              src="http://localhost:8000/images/categories/night.jpg"
              alt=""
              className="w-screen h-screen   hidden md:block absolute   z-0 "
            />
            <div className="h-96 w-full bg-black md:w-96 md:h-full flex flex-col items-center m-auto">
              <form
                className=" bg-black md:absolute shadow-lg w-full md:w-136 m-auto md:mt-56 h-screen md:bg-white md:h-72 h-full border-box pl-8 p-2 z-10"
                onSubmit={handleSubmit}
              >
                <h1 className="text-white md:text-black  text-3xl">
                  Contact Us
                </h1>
                <div className="  md:flex gap-10  ">
                  <div>
                    <div className="h-5 text-white md:text-red-500">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      className="border-gray-300 border mb-2 focus:outline-none focus:border-sky-300  focus:ring-1 focus:ring-sky-500 mb-2focus:outline-blue-300 p-1 w-full md:w-64 border-box"
                      onChange={handleChange}
                      value={values.firstName}
                    />
                  </div>
                  <div>
                    <div className="h-5 text-white md:text-red-500">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                      value={values.lastName}
                      className="border-gray-300 border  focus:outline-none focus:border-sky-300  focus:ring-1 focus:ring-sky-500 focus:outline-blue-300 p-1 md:w-64 w-full border-box"
                    />
                  </div>
                </div>

                <div className="md:flex gap-10 mt-2">
                  <div>
                    <div className="h-5 text-white md:text-red-500">
                      {errors.email && touched.email && errors.email}
                    </div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Enter Email"
                      className="border-gray-300 border mb-2 focus:outline-none focus:border-sky-300  focus:ring-1 focus:ring-sky-500 h-10 focus:outline-blue-300 p-1 w-64 border-box"
                    />
                  </div>
                  <div>
                    <div className="h-5 text-white md:text-red-500">
                      {errors.message && touched.message && errors.message}
                    </div>
                    <textarea
                      name="message"
                      placeholder="message"
                      onChange={handleChange}
                      value={values.message}
                      id=""
                      cols="31"
                      rows="4"
                      className="focus:border-sky-300 border-gray-300 border focus:outline-non focus:ring-1 focus:ring-sky-500  focus:outline-blue-300 p-1"
                    ></textarea>
                  </div>
                </div>
                <div className="m-auto self">
                  <button
                    className="bg-white  md:bg-gray-900 md:text-white text-xl w-20 h-8 "
                    disabled={isSubmitting}
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
