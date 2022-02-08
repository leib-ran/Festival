import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { isEditShippingDetails } from "../../../actions";
import { getUrlDataBase } from "../../../helper/config";
import { getUser } from "../../../helper/userTools";
import { ErrorMessage } from "./ErrorMessage";

const ShippingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Minimum Two Charcter")
    .max(50, "Max fifty Charcter")
    .required("required"),
  lastName: Yup.string()
    .min(2, "Minimum Two Charcter")
    .max(50, "Max fifty Charcter")
    .required("required"),
  streetName: Yup.string()
    .min(2, "Minimum Two Charcter")
    .max(50, "Max fifty Charcter")
    .required("required"),
  houseNumber: Yup.number("Enter Number").required("required"),
  city: Yup.string()
    .min(2, "Minimum Two Charcter")
    .max(50, "Max fifty Charcter")
    .required("required"),
  note: Yup.string(),
});

export function ShippingDetailsEdit() {
  const [loading, setLoading] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [err, setError] = useState(null);
  const [note, setNote] = useState(null);
  const [user, setUser] = useState(null);
  const [userShipping, setUserShipping] = useState(null);
  const dispatch = useDispatch();

  const fields = [
    { firstName: "First Name" },
    { lastName: "Last Name" },
    { streetName: "Street Name" },
    {
      houseNumber: "House Number",
    },
    { country: "country" },
    { city: "City" },
  ];

  useEffect(async () => {
    const user = await getUser();
    setUserShipping(user.shippingDetails);
    setUser(user);
  }, []);

  useEffect(() => {
    setOpacity(100);
    setTimeout(() => {
      setOpacity(0);
    }, 10000);
  }, [err]);

  return (
    <div>
      <div className="text-left font-bold">shipping details</div>
      <Formik
        initialValues={{
          firstName: userShipping ? userShipping.firstName : "",
          lastName: userShipping ? userShipping.lastName : "",
          streetName: userShipping ? userShipping.streetName : "",
          houseNumber: userShipping ? userShipping.houseNumber : "",
          city: userShipping ? userShipping.city : "",
          country: userShipping ? userShipping.country : "",
          note: userShipping ? userShipping.note : "",
        }}
        validationSchema={ShippingSchema}
        onSubmit={async (values, errors) => {
          const user = await getUser();
          const valuesNotes = values;
          await axios.put(`${getUrlDataBase()}/users`, {
            userEmail: user.userEmail,
            shippingDetails: valuesNotes,
          });
          dispatch(isEditShippingDetails(false));
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            {fields.map((field) => {
              const keyName = Object.keys(field)[0];
              const valueName = Object.values(field)[0];
              return (
                <div key={keyName} className="box-border pl-8">
                  <div className="h-6"></div>
                  <div>{values[keyName] && `${valueName}*`}</div>
                  <Field
                    className="border-b-2 text-xl focus:border-blue-400 border-gray-400 w-11/12 focus:outline-none"
                    name={keyName}
                    placeholder={valueName + "*"}
                  />
                  <div className="h-4">
                    {errors[keyName] && touched[keyName] ? (
                      <ErrorMessage
                        err={errors}
                        opacity={opacity}
                        name={keyName}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
            <div className="border-box pl-8">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Note"
                className="focus:outline-none border-2 border-gray-400 w-11/12 border-box mt-2"
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>

            <button
              className="bg-blue-500 text-center  text-center w-full text-white font-bold rounded-md p-2"
              type="submit"
              onClick={() => {
                setError(errors);
              }}
            >
              save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
