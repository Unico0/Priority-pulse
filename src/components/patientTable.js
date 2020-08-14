import React from "react";

const PatientTable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Patient Name</th>
          <th>Patient Age</th>
          <th>Case</th>
          <th>Contact</th>
          <th>Priority Level</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{patient.patientName}</td>
            <td>{patient.patientAge}</td>
            <td>{patient.case}</td>
            <td>{patient.contact}</td>
            <td>{patient.plevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
