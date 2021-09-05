import FormPart from "../Form/FormPart";

export default function ContactForm() {
  return (
    <div>
      <FormPart
        fieldArr={["First Name", "Last Name", "Phone"]}
        buttonValue="send"
        formName="Contact Us"
      />
    </div>
  );
}
