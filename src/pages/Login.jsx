import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";




const Login = () => {

    const {setUser, userLogin} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)

        const email = form.get('email')
        const password = form.get('password')

        console.log({email, password})

        userLogin(email, password)
        .then(res => {
            const user = res.user;
            setUser(user);
            toast.success('Login Successfuly Done');
        })
        .catch(error => {
            toast.error('Wrrong email/password');
            console.log(error.code)
        })
    } 

    const {user} = useContext(AuthContext);
    if(user && user?.email){
        return <Navigate to={'/'}></Navigate>;
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-bold text-center pt-7">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    
                    <div className="form-control mt-6">
                    <button className="btn btn-accent rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center">Dont Have An Account ? <Link className="text-red-500 font-semibold" to="/auth/register" > Resgister</Link> </p>
            </div>
        </div>
    );
};

export default Login;