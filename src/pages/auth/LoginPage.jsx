import { useAuth } from "../../hooks/useAuth";
import { useState } from "react"
import { LoginService } from '../../services/AuthService'

const LoginPage = () => {
  const divStyle = {
    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login }  = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (email && password) {
      // Replace with actual authentication logic
      const data  = await LoginService(email, password)
      login(data)
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <section className="gradient-form h-screen bg-neutral-200 dark:bg-sky-200">
      <div className="container h-full p-10 mx-auto">
        <div
          className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full md:w-6/12 mx-auto">
            <div
              className="block rounded-lg bg-white shadow-lg dark:bg-sky-900">
              <div className="px-4 md:px-0 ">
                <div className="md:mx-6 md:p-12">

                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      Welcome to Munyua's Dairy Farm
                    </h4>
                  </div>

                  <form onSubmit={handleLogin}>
                    <p className="mb-4">Please login to your account</p>

                    <div className="relative mb-4" data-twe-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value) }
                      />
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="z-40 pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >Email
                      </label>
                    </div>

                    <div className="relative mb-4" data-twe-input-wrapper-init>
                      <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <label
                        htmlFor="exampleFormControlInput11"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >Password
                      </label>
                    </div>

                    <div className="mb-12 pb-1 pt-1 text-center">
                      <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        type="submit"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        style={divStyle}
                      >
                        Log in
                      </button>
                      <a href="#!">Forgot password?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;