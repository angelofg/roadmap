import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const user = localStorage.getItem('token') || null;

    if(user){
        return children;
    }else{
        return <Navigate to='/login' />;
    }
};

export default ProtectedRoutes;





// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({
//     canActivate,
//     redirectPath = '/'
// }) => {

//     if(!canActivate){
//         return <Navigate to={redirectPath} replace />
//     }
//     return <Outlet />
// }

// export default ProtectedRoute;