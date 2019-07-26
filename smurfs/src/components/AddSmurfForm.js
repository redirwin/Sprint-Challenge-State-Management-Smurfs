import React from "react";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";

import { addSmurf } from "../store/actions";

function AddSmurfForm({ touched, errors }) {
  return (
    <section>
      <Form>
        <div className="form-group">
          <Field
            className="input"
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <Field
            className="input"
            name="age"
            type="text"
            placeholder="Age"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <Field
            className="input"
            name="height"
            type="text"
            placeholder="Height"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <button className="btn">Submit</button>
        </div>
      </Form>
    </section>
  );
}
export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: ""
    };
  },

  //   validationSchema: Yup.object().shape({
  //     name: Yup.string()
  //       .required("Name is required.")
  //       .min(2, "Name is required."),
  //     age: Yup.string(),
  //     email: Yup.string()
  //       .required("Email is required.")
  //       .email("Email is not valid.")
  //   }),

  handleSubmit(values, formikBag) {
    formikBag.props.dispatch(addSmurf(values));
  }
})(AddSmurfForm);
