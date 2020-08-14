import React, { Component } from "react";
import Input from "./input";

class PatientDetailForm extends Component {
  render() {
    const { onSubmit, patientDetail, onChangeInput } = this.props;
    return (
      <div className="patientForm py-3 px-4">
        <h1 className="mb-1">Patient Detail</h1>
        <p>Fill the Details Below</p>
        <form className="my-5" onSubmit={onSubmit}>
          <Input
            name="patientName"
            value={patientDetail.patientName}
            placeholder="Patient Name"
            onChange={onChangeInput}
          />
          <Input
            name="patientAge"
            value={patientDetail.patientAge}
            placeholder="Patient Age"
            onChange={onChangeInput}
          />
          <Input
            name="case"
            value={patientDetail.case}
            placeholder="Case"
            onChange={onChangeInput}
          />
          <Input
            name="plevel"
            value={patientDetail.plevel}
            placeholder="Priority Level"
            onChange={onChangeInput}
          />

          <Input
            name="contact"
            value={patientDetail.contact}
            placeholder="Contact"
            onChange={onChangeInput}
          />

          <button type="submit" className="button">
            Submit
          </button>
          <p>Getting problem in submitting</p>
        </form>

        <button className="button">Track Patient</button>
      </div>
    );
  }
}

export default PatientDetailForm;
