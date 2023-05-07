import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const totalAdmissions = 25; // replace with dynamic data
  const unpaidAdmissions = 10; // replace with dynamic data

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const renderTable = () => {
    switch (activeTab) {
      case "admissions":
        return <h1>Admissions Table</h1>; // replace with actual table component
      case "unpaid":
        return (
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        ); // replace with actual table component
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <Row>
        <Col md={3}>
          <div className="sidebar">

          <div className="adname">
          <span>Admin Name : </span>
          <h2>Sunil</h2>
          </div>



            <ul>
                


              <li>
                <a href="#" onClick={() => toggleTab("dashboard")}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" onClick={() => toggleTab("admissions")}>
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" onClick={() => toggleTab("unpaid")}>
                  Unpaid Admissions
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={9}>
          <div className="main-content">
            <Row>
              <Col md={4}>
                <Card>
                  <CardHeader>Total Admissions</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">{totalAdmissions}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardHeader>Unpaid Admissions</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">{unpaidAdmissions}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardHeader>Other Metric</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">0</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={12}>{renderTable()}</Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanel;
