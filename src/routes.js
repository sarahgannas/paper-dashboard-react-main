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
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";
var routes = [
  {
    path: "/dashboard",
    name: "الصفحة الرئيسية",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "الطلبيات",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  
  {
    path: "/user-page",
    name: "ملفات الزبائن",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "قطع الغيار",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },

];
export default routes;
