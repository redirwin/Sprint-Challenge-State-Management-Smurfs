import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

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
      <div className="error-group">
        <div className="error-message">{touched.name && errors.name}</div>
        <div className="error-message">{touched.age && errors.age}</div>
        <div className="error-message">{touched.height && errors.height}</div>
      </div>
    </section>
  );
}
export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      height: ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Please enter a name.")
      .min(2, "Please enter a name."),
    age: Yup.string()
      .required("Please enter an age.")
      .min(1, "Please enter an age."),
    height: Yup.string()
      .required("Please enter a height.")
      .min(1, "Please enter a height.")
  }),

  handleSubmit(values, formikBag) {
    console.log(formikBag.props);
    formikBag.resetForm();
    formikBag.props.dispatch(addSmurf(values));
  }
})(AddSmurfForm);
