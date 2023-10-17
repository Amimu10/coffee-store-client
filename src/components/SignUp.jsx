import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);

   const handleSignUp = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      createUser(email, password) 
      .then(result => {
        console.log(result.user);
        const createdAt = result.user?.metadata?.creationTime;
        const user = {email, createAt: createdAt}; 
        fetch('https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
           if(data.insertedId > 0){
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'User added to the database',
              showConfirmButton: true, 
              timer: 1500
            })
           } 
        })
 
      })
      .catch(error => console.log(error));
   }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <h1 className="text-3xl font-bold">Register now!</h1>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;