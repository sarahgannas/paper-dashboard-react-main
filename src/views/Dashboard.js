/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import OrdersPendingTable from "components/Tables/OrdersPendingTable";
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
import DatePicker from "react-datepicker";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Dashboard() {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <>
      <div className="content">

        {/* 4 tabs container */}
        <Row>

          {/* Tab 1 */}
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">قيد التجهيز</p>
                      <CardTitle tag="p">50</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="fas fa-sync-alt" /> تسليم اليوم
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          {/* Tab 2 */}
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">الطلبيات الجاهزة</p>
                      <CardTitle tag="p">20</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="far fa-calendar" /> Added Today
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          {/* Tab 3 */}
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">لا يمكن تصليحه </p>
                      <CardTitle tag="p">25</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="far fa-clock" /> Clients didn't recieve yet
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          {/* Tab 4 */}
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">العملاء الجدد</p>
                      <CardTitle tag="p">5</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="fas fa-sync-alt" /> Added Today
                </div> */}
              </CardFooter>
            </Card>
          </Col>
        </Row>

        {/* Check customer and add customer container */}
        <Row style={{alignItems:"center", justifyContent:'center'}}>
          {/* Check customer */}
        <Col lg="5" md="6" sm="6">
            <Card className="card-stats" >
            <CardHeader>
                <CardTitle tag="h5"   >التحقق من العميل</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                <Col md="6" xs="5">
                  <FormGroup>
                        <label>رقم التليفون</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                       التحقق
                      </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md="4" xs="7">
                  <FormGroup>
                        <Input
                          type="text"
                          placeholder="الإسم"
                          disabled
                        />
                      </FormGroup>
                  </Col>
                  <Col md="4" xs="5">
                  <FormGroup>
                        <Input
                          type="text"
                          placeholder="الجهاز"
                          disabled
                        />
                      </FormGroup>
                  </Col>
                  <Col md="4" xs="7">
                  <FormGroup>
                        <Input
                          type="text"
                          placeholder="الحالة"
                          disabled
                        />
                      </FormGroup>
                  </Col>
                  <Col md="4" xs="7">
                  <FormGroup>
                        <label>موعد التسليم</label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </FormGroup>
                  </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                <Col md="12" xs="7">
                  <FormGroup>
                        <Input
                          type="textarea"
                          placeholder="ملاحظات إضافية..."
                          disabled
                        />
                      </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          {/* Add customer */}
        <Col lg="5" md="6" sm="6">
            <Card className="card-stats">
            <CardHeader>
                <CardTitle tag="h5"> إضافة عميل جديد</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                  <FormGroup>
                        <label> رقم التليفون</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                  </Col>
                  <Col md="4" xs="7">
                  <FormGroup>
                        <label>الإسم</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                  </Col>
                  <Col md="4" xs="5">
                  <FormGroup>
                        <label>الجهاز</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                  </Col>
                </Row>
                <Row>
                <UncontrolledDropdown>
        <DropdownToggle caret>
            الحالة
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>عادي</DropdownItem>
          <DropdownItem>VIP</DropdownItem>
          <DropdownItem>Blacklist</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
                  <Col md="4" xs="7">
                  <FormGroup>
                        <label>موعد التسليم</label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col md="12" xs="7">
                  <FormGroup>
                        <label>ملاحظات إضافية...</label>
                        <Input
                          type="textarea"
                        />
                      </FormGroup>
                  </Col>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        إرسال
                      </Button>
                    </div>
                </Row>
              </CardBody>
              {/* <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Due Today
                </div>
              </CardFooter> */}
            </Card>
          </Col>
          </Row>
        <Row>
          <OrdersPendingTable />
        </Row>
        {/* Graph container */}
        {/* <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Dashboard;
