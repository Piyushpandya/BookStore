import { Link } from "react-router";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="signingbox flex items-center justify-center h-screen w-screen ">
      <div className="sign flex items-center justify-center border rounded-3xl p-3 m-5 w-110 ">
        <div className="bg-white p-6 rounded-lg ">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-xl font-semibold">Sign Up</h2>
            <Link to="/" className="text-gray-500 hover:text-gray-700 ">
              X
            </Link>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true, minLength: 3 })}
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true, minLength: 11 })}
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 4 })}
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
              <div className="login flex">
                <p className=" flex justify-center items-center">
                  Already have account ?
                </p>
                <Link
                  to="/"
                  className=" ml-1 text-blue-500 flex justify-center items-center underline "
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
