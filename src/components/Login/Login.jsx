import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn,  GithubSignIn,googleSignIn } = useContext(authContext);
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);
    setError("");
    signIn(email, password)
      .then(() => {
        // console.log('Succesfully Logged in.');
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  //login with github
  const handleGitHubSignIn=()=>{
    GithubSignIn()
    .then(result=>{
      console.log(result);
    })
    .catch(err=>{
      console.error(err);
    })
  }

  //login with google
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      console.log(result);
    })
    .catch(err=>{
      console.error(err);
    })
  }
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-md">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div>
              <h1 className="text-red-500">{error}</h1>
            </div>
          </form>
          <div>
            <button onClick={handleGoogleSignIn} className=" bg-green-700 mb-3 text-white p-3 rounded-lg w-full">
              Login With Google
            </button>
            <button onClick={handleGitHubSignIn} className=" bg-orange-700 text-white p-3 rounded-lg w-full">
              Login With Github
            </button>
          </div>
          <div>
            No account? please{" "}
            <Link className="text-blue-600" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
