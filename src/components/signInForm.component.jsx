import { Link } from "react-router-dom";

const SignInForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Do something with the email and password values
  // };

  return (
    <>
      <form className="w-full h-full bg-white px-4 md:px-8 py-8 mb-4 rounded-2xl">
        <div className="mb-5">
          <label
            className="block text-base font-lato font-normal mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="appearance-none rounded-lg w-full py-2 px-3 text-base leading-tight bg-bgwhite focus:bg-[#EAEAEA] focus:outline-none placeholder:text-base"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div>
          <label
            className="block text-base font-lato font-normal mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none rounded-lg w-full py-2 px-3 text-base leading-tight bg-bgwhite focus:bg-[#EAEAEA] focus:outline-none placeholder:text-base"
            id="password"
            type="password"
            placeholder="Your password"
          />
        </div>
        <div className="my-4">
          <a
            className="font-lato font-normal text-base text-link-blue hover:underline hover:underline-offset-2"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <Link
          to={'/dashboard'}
        >
          <div className="w-full flex items-center justify-between">
            <button
              className="w-full bg-black text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </Link>
      </form>
    </>
  );
};

export default SignInForm;
