import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // // console.log(name,'||', photo,'||', email,'||', password );
        // console.log({name, photo, email, password});

        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log({name, photo, email, password});

        createNewUser(email , password)
        .then(res => {
            const user = res.user;
            setUser(user);
            toast.success('Register Successfuly Done');
            console.log(user);
        })
        .catch((error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        }))
    }

    const {user} = useContext(AuthContext);
    if(user && user?.email){
        return <Navigate to={'/'}></Navigate>;
    }



    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="text-2xl font-bold text-center pt-7">Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">

              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered" required />
                </div>

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
                <button className="btn btn-accent rounded-none">Register</button>
                </div>
            </form>
            <p className="text-center">Already Have An Account ? <Link className="text-green-500 font-semibold" to="/auth/login" > Login</Link> </p>
        </div>
    </div>
    );
};

export default Register;