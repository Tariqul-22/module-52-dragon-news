import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {loginByEmail} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    console.log("login page :",location);


    const handleLogin = (e) =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        loginByEmail(email, password)
        .then(result =>{
            console.log(result.user);

            // navigate user
            navigate(location?.state ? location.state : "/")   

        })
        .catch(error =>{
            console.log(error.message);
        })



    }
    return (
        <div className="bg-gray-100 pb-24">
            <Navbar></Navbar>
            <div className="w-full md:w-3/4 lg:w-1/2 p-16 card-body bg-white mx-auto mt-24">
                <p className="text-xl font-bold text-center pb-8 border-b">Login your account</p>
                <form onSubmit={handleLogin} className="mt-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email Address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered text-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="current-password" placeholder="Enter your password" name="password" className="input input-bordered text-sm" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="mt-4">Dont’t Have An Account ? <Link className="text-blue-500 font-semibold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;