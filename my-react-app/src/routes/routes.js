import NotFound from "../pages/Main/NotFound";
import MainRoot from "../pages/Main/MainRoot";
import Home from "../pages/Main/Home";
import Employees from "../pages/Main/Employees";
import EmployeeDetail from "../pages/Main/EmployeeDetail";
import AdminRoot from "../pages/Admin/AdminRoot";
import Employees from "../pages/Admin/Employees";
import AddEmployee from "../pages/Admin/AddEmployee";
import EmployeeDetail from "../pages/Admin/EmployeeDetail";
import EditEmployee from "../pages/Admin/EditEmployee";


export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path: 'employees',
                element: <Employees/>
            },
            {
                path: 'detail',
                element: <EmployeeDetail/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    //Admin Root - admin side
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element: <Dashboard/>
            },
            {
                path:'employees',
                element:<Employees/>
            },
            {
                path:'add-product',
                element:<AddEmployee/>
            },
            {
                path:'products/:id',
                element: <EmployeeDetail/>
            },
            {
                path:'products/edit/:id',
                element: <EditEmployee/>
            }
        ]
    }
]