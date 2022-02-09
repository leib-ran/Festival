import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { ErrorMessage } from "../../Pages/CheckoutPage/ErrorMessage";

export function CostomerDetails() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [streetName, setStreet] = useState(null);
  const [houseNumber, setHouseNumber] = useState(null);
  const [city, setCity] = useState(null);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
    setTimeout(() => {
      setOpacity(0);
    }, 10000);
  }, [err]);

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/order", {
        firstName: firstName,
        lastName: lastName,
        streetName: streetName,
        houseNumber: houseNumber,
        city: city,
        note: note,
      })
      .catch((err) => {
        setError(err.response.data);
        setLoading(true);
      });
  };
  const fields = [
    { firstName: "First Name", func: setFirstName, fieldValue: firstName },
    { lastName: "Last Name", func: setLastName, fieldValue: lastName },
    { streetName: "Street Name", func: setStreet, fieldValue: streetName },
    {
      houseNumber: "House Number",
      func: setHouseNumber,
      fieldValue: houseNumber,
    },
    { city: "City", func: setCity, fieldValue: city },
  ];
  return (
    <div>
      <div className="text-left font-bold">Shipping Details</div>
      <hr />
      <form action="" onSubmit={submit}>
        {fields.map((element) => {
          const keyName = Object.keys(element)[0];
          const valueName = Object.values(element)[0];
          return (
            <div key={keyName} className="box-border pl-8">
              <div className="h-6"></div>
              <div>{element.fieldValue && `*${valueName}`}</div>
              <input
                onChange={(e) => element.func(e.target.value)}
                type="text"
                className="border-b-2 text-xl focus:border-blue-400 border-gray-400 w-11/12 focus:outline-none"
                placeholder={`*${valueName}`}
              />
              {err ? (
                <ErrorMessage err={err} opacity={opacity} name={keyName} />
              ) : (
                <div>
                  {loading && (
                    <div className={`opacity-${opacity} text-green-400`}>
                      Success
                    </div>
                  )}
                </div>
              )}
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

        <button className="bg-blue-500 text-center  text-center w-full text-white font-bold rounded-md p-2">
          save
        </button>
      </form>
    </div>
  );
}

// class FormField{
//   constructor(fieldName,placeholder){
//     this.fieldName = fieldName
//     this.placeholder = placeholder
//     this.getPlaceHolder = this.getPlaceHolder.bind(this)
//     this.getFieldName = this.getFieldName.bind(this)
//   }

//   getPlaceHolder(){
//     return this.placeholder
//   }

//   getFieldName(){
//     return this.placeholder
//   }
// }

// const firstName = new FormField()
