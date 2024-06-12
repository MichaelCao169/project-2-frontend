import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const { setAuth, trusted, setTrusted } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth", { identifier, password });
      // console.log(response.data);
      const username = response?.data?.username;
      const accessToken = response?.data?.accessToken;
      const fullname = response?.data?.fullname;
      const email = response?.data?.email;
      const streamToken = response?.data?.streamToken;
      const image = response?.data?.image;
      setAuth({ username, fullname, email, accessToken, streamToken, image });
      setIdentifier("");
      setPassword("");
      setHasError(false);
      navigate(from, { replace: true });
    } catch (error) {
      setHasError(true);
      console.log(error);
      if (!error?.response) {
        setMessage("No server response");
      } else if (error.response?.status === 400) {
        setMessage(error.response.data);
      } else {
        setMessage("Internal server error");
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("trusted", trusted);
  }, [trusted]);

  const toggleTrusted = () => {
    setTrusted((prev) => !prev);
  };

  return (
    <div className="h-screen w-screen flex bg-[var(--login-right-bg)]">
      <div className="h-full w-[1800px] flex items-center justify-center">
        {/* Box */}
        <div
          className="w-[500px] h-[420px] gap-5 rounded-lg  border-[var(--login-border-color)]  flex flex-col
                 bg-[var(--login-form-container)]"
        >
          {/* Icon */}
          <svg
            width={60}
            fill="rgba(19 123 205)"
            className="h-20 flex m-0 ml-0 mt-0"
            viewBox="0 0 840 840"
          >
            <path
              d="M939.26837 728.567104c-10.365815 0-18.729934-8.365143-18.729934-18.729934s8.365143-18.729934 18.729934-18.729934 18.729934 8.365143 18.729934 18.729934-8.364119 18.729934-18.729934 18.729934z m0-24.730926c-3.273361 0-6.000992 2.727631-6.000992 6.000992s2.727631 6.000992 6.000992 6.000992c3.273361 0 6.000992-2.727631 6.000992-6.000992s-2.727631-6.000992-6.000992-6.000992z"
              fill="#F16723"
            />
            <path
              d="M594.484202 177.021582m-3.819092 0a3.819092 3.819092 0 1 0 7.638184 0 3.819092 3.819092 0 1 0-7.638184 0Z"
              fill=""
            />
            <path
              d="M91.127842 666.738765m-3.819093 0a3.819092 3.819092 0 1 0 7.638185 0 3.819092 3.819092 0 1 0-7.638185 0Z"
              fill=""
            />
            <path
              d="M926.721679 557.448222m-3.819092 0a3.819092 3.819092 0 1 0 7.638184 0 3.819092 3.819092 0 1 0-7.638184 0Z"
              fill=""
            />
            <path
              d="M82.216968 820.946134m-3.819093 0a3.819092 3.819092 0 1 0 7.638185 0 3.819092 3.819092 0 1 0-7.638185 0Z"
              fill=""
            />
            <path
              d="M274.794439 261.762427c-12.001984 0-21.639816-9.637833-21.639816-21.639817s9.637833-21.639816 21.639816-21.639816c12.001984 0 21.639816 9.637833 21.639816 21.639816s-9.637833 21.639816-21.639816 21.639817z m0-30.549667c-4.90953 0-8.910874 4.00032-8.910874 8.910874s4.00032 8.910874 8.910874 8.910874c4.90953 0 8.910874-4.00032 8.910874-8.910874s-4.00032-8.910874-8.910874-8.910874z"
              fill="#FBD20A"
            />
            <path
              d="M94.946934 566.904827H69.488025c-3.455613 0-6.364471-2.909882-6.364471-6.364472s2.909882-6.364471 6.364471-6.364471h25.458909c3.455613 0 6.364471 2.909882 6.364471 6.364471s-2.909882 6.364471-6.364471 6.364472z"
              fill="#F16723"
            />
            <path
              d="M82.216968 579.633769c-3.455613 0-6.364471-2.909882-6.364471-6.364471v-25.458909c0-3.455613 2.909882-6.364471 6.364471-6.364471 3.455613 0 6.364471 2.909882 6.364471 6.364471v25.458909c0.001024 3.454589-2.908858 6.364471-6.364471 6.364471z"
              fill="#F16723"
            />
            <path
              d="M171.687139 234.486122m-5.637513 0a5.637513 5.637513 0 1 0 11.275026 0 5.637513 5.637513 0 1 0-11.275026 0Z"
              fill=""
            />
            <path
              d="M786.152463 323.046059m-5.637513 0a5.637513 5.637513 0 1 0 11.275026 0 5.637513 5.637513 0 1 0-11.275026 0Z"
              fill=""
            />
            <path
              d="M158.593694 296.67794h-6.364472v-6.364471c0-3.455613-2.909882-6.364471-6.364471-6.364471s-6.364471 2.909882-6.364471 6.364471v6.364471h-6.364471c-3.455613 0-6.364471 2.909882-6.364471 6.364471 0 3.455613 2.909882 6.364471 6.364471 6.364471h6.364471v6.364472c0 3.455613 2.909882 6.364471 6.364471 6.364471s6.364471-2.909882 6.364471-6.364471v-6.364472h6.364472c3.455613 0 6.364471-2.909882 6.364471-6.364471s-2.908858-6.364471-6.364471-6.364471z"
              fill="#4E9BD4"
            />
            <path
              d="M826.158734 258.125586h-6.364471v-6.364471c0-3.455613-2.909882-6.364471-6.364471-6.364471s-6.364471 2.909882-6.364471 6.364471v6.364471h-6.364471c-3.455613 0-6.364471 2.909882-6.364472 6.364471 0 3.455613 2.909882 6.364471 6.364472 6.364471h6.364471v6.364471c0 3.455613 2.909882 6.364471 6.364471 6.364472s6.364471-2.909882 6.364471-6.364472v-6.364471h6.364471c3.455613 0 6.364471-2.909882 6.364471-6.364471 0.001024-3.454589-2.908858-6.364471-6.364471-6.364471z"
              fill="#FBD20A"
            />
            <path
              d="M617.396708 225.938727H404.270882c-51.644776 0-93.470491 41.824692-93.470492 93.470491v60.736878h67.64708v-40.188523c0-31.4599 25.458909-56.918809 56.918809-56.918809h151.116259c31.4599 0 56.918809 25.458909 56.918809 56.918809v40.188523h67.465852v-60.736878c0-51.6458-41.824692-93.470491-93.470491-93.470491z"
              fill="#FBFEFF"
            />
            <path
              d="M617.396708 228.48513l-181.121219-2.545379c-51.644776 0-93.470491 41.824692-93.470491 93.470491v48.007935h35.642472v-27.45958c0-31.4599 25.458909-56.918809 56.918809-56.918809h151.116259c31.4599 0 56.918809 25.458909 56.918809 56.918809v28.004287l67.648103 0.182252v-46.189515c-0.182252-51.6458-42.006943-93.470491-93.652742-93.470491z"
              fill="#4E9BD4"
            />
            <path
              d="M710.867199 391.056618h-67.465852c-6.000992 0-10.910522-4.90953-10.910522-10.910522v-40.188523c0-25.458909-20.549378-46.007263-46.007263-46.007263H435.367303c-25.458909 0-46.007263 20.549378-46.007263 46.007263v40.188523c0 6.000992-4.90953 10.910522-10.910522 10.910522h-67.64708c-6.000992 0-10.910522-4.90953-10.910522-10.910522v-60.736878c0-57.645768 46.735246-104.381013 104.381013-104.381013h213.125826c57.645768 0 104.381013 46.735246 104.381014 104.381013v60.736878c-0.002048 6.000992-4.911578 10.910522-10.91257 10.910522z m-56.554306-21.821044h45.643784v-49.826356c0-45.462556-37.097413-82.558945-82.558946-82.558945H404.270882c-45.462556 0-82.558945 37.097413-82.558946 82.558945v49.826356h45.826036v-29.278001c0-37.460892 30.368439-67.829331 67.829331-67.829331h151.116259c37.460892 0 67.829331 30.368439 67.829331 67.829331v29.278001z"
              fill=""
            />
            <path
              d="M859.619307 838.767882h-46.189515V367.417153h46.189515c16.002304 0 28.913498 12.911194 28.913497 28.913498v413.522709c0 16.003328-12.911194 28.914522-28.913497 28.914522z"
              fill="#3769A5"
            />
            <path
              d="M203.510519 838.767882h-41.461213c-16.002304 0-28.913498-12.911194-28.913497-28.913498V396.330651c0-16.002304 12.911194-28.913498 28.913497-28.913498h41.461213v471.350729z"
              fill="#FBFEFF"
            />
            <path
              d="M819.794263 838.767882H194.053914c-16.002304 0-28.913498-12.911194-28.913498-28.913498V396.330651c0-16.002304 12.911194-28.913498 28.913498-28.913498h625.740349c16.002304 0 28.913498 12.911194 28.913498 28.913498v413.522709c0 16.003328-12.911194 28.914522-28.913498 28.914522z"
              fill="#4E9BD4"
            />
            <path
              d="M573.026637 575.451197c-3.455613 0-6.910202-1.636169-8.910874-4.728302-3.455613-4.90953-2.1819-11.819732 2.727631-15.093094L853.436063 358.506279c4.90953-3.455613 11.819732-2.1819 15.093094 2.727631 3.455613 4.90953 2.1819 11.819732-2.727631 15.093093L579.208857 573.450526c-1.81842 1.454941-4.00032 2.000672-6.18222 2.000671zM448.641976 576.17918c-2.1819 0-4.364823-0.545731-6.183243-2.000672L155.866063 376.872734c-4.90953-3.455613-6.183243-10.183563-2.727631-15.093093 3.455613-4.90953 10.183563-6.183243 15.093094-2.727631l286.59267 197.305774c4.90953 3.455613 6.183243 10.183563 2.72763 15.093094-1.999648 3.09111-5.455261 4.728302-8.90985 4.728302z"
              fill=""
            />
            <path
              d="M859.619307 849.678404H162.049306c-22.003296 0-39.825044-17.820724-39.825043-39.825044V396.330651c0-22.003296 17.820724-39.825044 39.825043-39.825044h697.570001c22.003296 0 39.825044 17.820724 39.825043 39.825044v413.522709c0 22.00432-17.821748 39.825044-39.825043 39.825044zM162.049306 378.327675a17.928232 17.928232 0 0 0-18.002975 18.002976v413.522709a17.928232 17.928232 0 0 0 18.002975 18.002976h697.570001a17.928232 17.928232 0 0 0 18.002975-18.002976V396.330651a17.928232 17.928232 0 0 0-18.002975-18.002976H162.049306z"
              fill=""
            />
            <path
              d="M538.111124 666.738765h-54.554658c-17.639496 0-32.005631-14.366135-32.005632-32.005631v-92.742509c0-17.639496 14.366135-32.005631 32.005632-32.005631h54.554658c17.639496 0 32.005631 14.366135 32.005631 32.005631v92.742509c0.181228 17.639496-14.183883 32.005631-32.005631 32.005631z"
              fill="#3769A5"
            />
            <path
              d="M509.378854 666.738765h-25.822388c-17.639496 0-32.005631-14.366135-32.005632-32.005631v-92.742509c0-17.639496 14.366135-32.005631 32.005632-32.005631h25.822388c0.90921 0 1.454941 0.726959 1.454941 1.454941v153.843889c0 0.727982-0.726959 1.454941-1.454941 1.454941z"
              fill="#FBFEFF"
            />
            <path
              d="M506.833475 666.738765c-12.911194 0-23.458237-10.547043-23.458237-23.458236V533.444254c0-12.911194 10.547043-23.458237 23.458237-23.458236 12.911194 0 23.458237 10.547043 23.458236 23.458236v109.836275c0 12.911194-10.547043 23.458237-23.458236 23.458236z"
              fill="#4E9BD4"
            />
            <path
              d="M538.111124 677.650311h-54.554658c-23.640488 0-42.916153-19.275665-42.916154-42.916153v-92.742509c0-23.640488 19.275665-42.916153 42.916154-42.916153h54.554658c23.640488 0 42.916153 19.275665 42.916153 42.916153v92.742509c0.182252 11.275025-4.182572 22.003296-12.365463 30.187211-8.001664 8.182892-18.912186 12.728942-30.55069 12.728942z m-54.554658-156.753771c-11.638504 0-21.094085 9.456605-21.094086 21.094085v92.742509c0 11.638504 9.456605 21.094085 21.094086 21.094085h54.554658c5.81874 0 11.092774-2.1819 15.093093-6.183243 4.00032-4.00032 6.000992-9.092102 6.000992-14.729614v-92.924761c0-11.638504-9.456605-21.094085-21.094085-21.094085l-54.554658 0.001024z"
              fill=""
            />
            <path
              d="M188.416401 794.579039c-3.455613 0-6.364471-2.909882-6.364471-6.364471v-59.64644c0-3.455613 2.909882-6.364471 6.364471-6.364471 3.455613 0 6.364471 2.909882 6.364472 6.364471v59.64644c0.001024 3.454589-2.908858 6.364471-6.364472 6.364471zM188.416401 461.795831c-3.455613 0-6.364471-2.909882-6.364471-6.364471 0-28.186539 22.912506-51.099045 51.099045-51.099045 3.455613 0 6.364471 2.909882 6.364471 6.364471 0 3.455613-2.909882 6.364471-6.364471 6.364471-21.094085 0-38.370103 17.276017-38.370102 38.370103 0.001024 3.455613-2.908858 6.364471-6.364472 6.364471zM188.416401 495.256403c-3.455613 0-6.364471-2.909882-6.364471-6.364471v-10.001312c0-3.455613 2.909882-6.364471 6.364471-6.364471 3.455613 0 6.364471 2.909882 6.364472 6.364471v10.001312c0.001024 3.454589-2.908858 6.364471-6.364472 6.364471z"
              fill="#FFFFFF"
            />
          </svg>
          {/* Title */}
          <div className="ml-5 mt-1 text-sm text-[var(--login-text-color)]">
            Welcome to BotCV, <br></br>
            Login to your account.
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-2">
            {/* Input */}
            <div className="ml-5 mr-5 relative">
              <label
                htmlFor="identifier"
                className="absolute px-1 font-semibold bg-[var(--login-form-container)]
                             left-3 z-20 text-blue text-xs  "
              >
                {" "}
                Username or Email{" "}
              </label>
              <input
                type="text"
                id="identifier"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-[var(--login-form-container)]
                                 text-[var(--login-input-text-color)] border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>

            <div className="mt-14 ml-5 mr-5 relative">
              <label
                htmlFor="password"
                className="absolute px-1 font-semibold bg-[var(--login-form-container)]
                            left-3 z-20 text-blue text-xs  "
              >
                {" "}
                Password{" "}
              </label>
              <input
                type="password"
                id="password"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-[var(--login-form-container)]
                                 text-[var(--login-input-text-color)] border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div className="mt-28 ml-5 flex justify-between items-center mr-5">
              <div className="flex justify-between items-center mt-[-20px]">
                <input
                  type="checkbox"
                  id="trusted"
                  className="checkbox-primary checkbox w-4 h-4"
                  onChange={toggleTrusted}
                  checked={trusted}
                ></input>
                <label htmlFor="trusted" className="text-sm pl-1">
                  Trust this device
                </label>
              </div>
              <button
                type="submit"
                className="inline-block w-16 h-10 bg-blue text-white font-semibold rounded-md hover:bg-blue-600 duration-300"
              >
                Login
              </button>
            </div>

            <div className="flex justify-end mt-2">
              <span
                className={`flex-1 w-[100px] pl-5 ${
                  hasError ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </span>
              <Link to="/forgot" className="mr-4">
                <div className="inline text-sm font-light text-gray-500 underline underline-offset-4">
                  Forgot password?
                </div>
              </Link>
            </div>
          </form>

          <hr className="w-[90%] self-center border-gray-300 mt-5" />

          {/* Register */}
          <div className="pt-4 mt-1 px-3 flex items-center gap-2 justify-center">
            <div className=" text-sm text-gray-500 font-normal ">
              Don't have an account ?
            </div>

            <Link to="/register" className="mr-4">
              <div className="inline text-sm font-light text-blue hover:underline underline-offset-4">
                Sign up now!
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full w-[750px] bg-gradient-to-b from-[#191714] to-[#2234AE] text-white p-4 text-center md:text-left">
        <div className="flex flex-col ml-2 h-full gap-6">
          <h1 className="text-5xl font-bold mb-5  mt-[150px]">
            Bot<span className="text-blue">CV</span>
          </h1>
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold mb-2">
              One Love 
            </h2>
            <h2 className="text-4xl font-bold mb-2">
              One Future 
            </h2>
            <p>
                BotCV - #1 Recruitment Website in Vietnam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
