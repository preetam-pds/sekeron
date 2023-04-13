import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from '@sekeron/domain';
import { Layout } from "../components/layout/Layout";

const ProtectedRoute = () => {
    const loggedInUser = getLocalStorageItem('token');

    return (
        (loggedInUser) ? <Layout> <Outlet /> </Layout> : <Navigate to="/" />
    );
};

export default ProtectedRoute;
