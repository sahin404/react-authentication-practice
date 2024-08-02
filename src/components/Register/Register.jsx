import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "./../../provider/AuthProvider";
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signUp } = useContext(authContext);
  const handleForm = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password Length must be minimum 6 characters");
      return;
    }

    // console.log(name, email,password);
    signUp(email, password)
      .then(() => {
        // console.log('successfully Created', result.user);
        setSuccess("Account Create Successfully");
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  };
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              Already have an account? please{" "}
              <Link className="text-blue-600" to="/login">
                Login
              </Link>
            </div>
            <div>
              <h1 className="text-red-500">{error}</h1>
              <h1 className="text-blue-500">{success}</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
