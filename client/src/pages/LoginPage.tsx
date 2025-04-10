import { useDispatch } from "react-redux"
import { loginStart, loginSuccess } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(loginStart());

        setTimeout(() => {
            dispatch(loginSuccess('fake-jwt-token'));
        }, 1000)
        navigate('/dashboard');
    };

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Sign in with Google
                </button>
            </div>

        </div>
    );
};

export default LoginPage;