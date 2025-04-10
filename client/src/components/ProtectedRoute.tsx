import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Navigate } from "react-router-dom";
import { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { userToken } = useSelector((state: RootState) => state.auth);

    if (!userToken) {
        return <Navigate to='/login' replace />;
    }

    return children;
}

export default ProtectedRoute;