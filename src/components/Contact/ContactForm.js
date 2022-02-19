import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { ContactContainer, ContactSection } from "./ContactStyle";

function NotEdited(props) {
  return (
    <div>
      <Form.Button onClick={props.edit}>Edit</Form.Button>
    </div>
  );
}

function IsSubmit(props) {
  return (
    <div>
      <Form.Button onClick={props.submit}>Submit</Form.Button>
    </div>
  );
}

function FormExampleSubcomponentControl(props) {
  const [submit, setSubmit] = useState(false);

  let isbutton = IsSubmit ? (
    <IsSubmit submit={() => setSubmit(false)} />
  ) : (
    <NotEdited edit={() => setSubmit(true)} />
  );

  return (
    <ContactContainer id="contact">
      <ContactSection>
        <h1>Contact</h1>
        <Form style={{ margin: "100px 100px 100px 100px" }}>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.TextArea
            label="Message"
            placeholder="Tell us your message..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          {isbutton}
        </Form>
      </ContactSection>
    </ContactContainer>
  );
}

export default FormExampleSubcomponentControl;
