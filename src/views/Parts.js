import React from "react";
import { Row, Col } from "reactstrap";
import PartsTable from "components/Tables/PartsTable";

export default function Parts() {
  return (
      <div className="content">
        <Row>
          <Col md="12">
            <PartsTable />
          </Col>
        </Row>
      </div>
  );
}