import { useDispatch } from "react-redux"
import { logout } from "../store/authSlice";

const DashboardPage = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Dashboard</h1>
            <button
                onClick={() => dispatch(logout())}
            >
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;