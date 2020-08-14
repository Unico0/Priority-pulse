import React, { Component } from "react";
import "./App.css";
import Header from "./components/headerComponent";
import PatientDetailForm from "./components/patientDetailForm";
import Description from "./components/description";
import PatientTable from "./components/patientTable";

class App extends Component {
  state = {
    patientDetail: {
      patientName: "",
      patientAge: "",
      case: "",
      plevel: "",
      contact: "",
    },
    patientData: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const patientData = [...this.state.patientData, this.state.patientDetail];
    this.setState({ patientData });
    console.log(this.state.patientData);
  };

  handleChange = ({ currentTarget }) => {
    const patientDetail = { ...this.state.patientDetail };
    patientDetail[currentTarget.name] = currentTarget.value;
    this.setState({ patientDetail });
  };

  render() {
    return (
      <>
        <div className="screen">
          <Header />
          <div className="row">
            <div className="col-12 col-md-7 mx-auto">
              <Description />
            </div>
            <div className="col-12 col-md-4 mx-auto mt-5">
              <PatientDetailForm
                onSubmit={this.handleSubmit}
                patientDetail={this.state.patientDetail}
                onChangeInput={this.handleChange}
              />
            </div>
          </div>
          <div className="mt-5">
            {this.state.patientData.length && (
              <PatientTable data={this.state.patientData} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
