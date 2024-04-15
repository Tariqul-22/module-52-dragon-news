import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e) =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        
        const name = form.get('name')
        const photoURL = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photoURL, email, password);


        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })

    }
    return (
        <div className="bg-gray-100 pb-24">
            <Navbar></Navbar>
            <div className="w-full md:w-3/4 lg:w-1/2 p-16 card-body bg-white mx-auto mt-24">
                <p className="text-xl font-bold text-center pb-8 border-b">Register your account</p>
                <form onSubmit={handleRegister} className="mt-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered text-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo URL" name="photoURL" className="input input-bordered text-sm" required />
                    </div>
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
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="mt-4">Already Have An Account ? <Link className="text-blue-500 font-semibold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;