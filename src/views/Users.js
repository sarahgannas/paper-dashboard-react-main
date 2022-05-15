import React from "react";
import { Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import UsersTable from "components/Tables/UsersTable";

export default function Users() {
  return (
      <div className="content">
        <Row>
          <Col md="12">
            <UsersTable />
          </Col>
        </Row>
      </div>
  );
}