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
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  // CardTitle,
  Table,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
  
} from "reactstrap";

function OrderTables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                 <Row>
                 <Col>
                <Button color="success">ADD</Button>
                <Button color="danger">DELETE</Button>
                <Button color="warning">EDIT</Button> 
                 </Col>
                 <Col>
                 <Form inline className="ml-auto">
                   <FormGroup style={{paddingLeft:500}}>
                    <Input type="text" placeholder="Search"/>
                   </FormGroup>
                   <Button color="black" icon round>
                    <i className="nc-icon nc-zoom-split"></i>
                   </Button>
                  </Form>
                   </Col> 
                  </Row>
              </CardHeader>
              <CardBody>
              <Table stripped bordered hover variant="dark" className="text-center">
                  <thead className="text-primary"  >
                    <tr> 
                      <th><h5> الحالة</h5></th>
                      <th><h5> مدة التأمين</h5> </th>
                       <th><h5>الجودة</h5></th>
                       <th><h5>السعر</h5></th>
                      <th><h5>الاسم</h5></th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                   
                      <td>  3 ايام </td>
                      <td>شهر</td>
                      <td>اصلية</td>
                      <td>500</td>
                      <td>S10 شاشة  </td>
                      
                    </tr>
                    <tr> 
                      <td>  10 ايام </td>
                      <td>شهر</td>
                      <td>درجة أولى</td>
                      <td>200</td>
                      <td>S10 شاشة  </td>
                   
                    </tr>
                    <tr>
                      <td> اسبوعين </td>
                      <td>شهر</td>
                      <td>درجة أولى</td>
                      <td>300</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                      <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                      
                    </tr>
                    <tr>
                      <td> اسبوعين  </td>
                      <td>شهرين</td>
                      <td>اصلية</td>
                      <td>800</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td>  3 ايام </td>
                      <td>شهر</td>
                      <td>درجةأولى </td>
                      <td>500</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                      <td>  3 ايام </td>
                      <td>شهر</td>
                      <td>اصلية</td>
                      <td>500</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr> 
                      <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr> 
                      <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    <tr>
                    <td> اسبوع </td>
                      <td> أشهر 3</td>
                      <td>اصلية</td>
                      <td>600</td>
                      <td>S10 شاشة  </td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OrderTables;
