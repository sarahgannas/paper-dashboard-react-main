import React from "react";
import {  Row, Col } from "reactstrap";
import OrdersTable from "components/Tables/OrdersTable";

export default function Orders() {
  return (
      <div className="content">
        <Row>
          <Col md="12">
            <OrdersTable />
          </Col>
        </Row>
      </div>
  );
}