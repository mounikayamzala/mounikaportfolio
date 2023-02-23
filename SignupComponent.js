import { useState } from "react";
// import { RadioGroup } from '@headlessui/react'
import { useRouter } from "next/router";
import factory, { postResult } from "../../contexts/factory";
import { urlConsts } from "../../UrlConstants";

const memoryOptions = [
  { name: "Male", inStock: true },
  { name: "Female", inStock: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SignupComponent() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const signUp = async (e) => {
    if (
      firstName == undefined ||
      lastName == undefined ||
      phoneNumber == undefined
    ) {
      alert("Enter All Details");
    } else {
      const obj = {
        firstName: firstName,
        lastName: lastName,
        mobileNumber: phoneNumber,
        gender: "MALE",
      };
      console.log(obj);

      var response = await postResult(urlConsts.signupURL, obj);
      console.log(response);
      if (response.status_code == 200 || response.status_code == 201) {
        sessionStorage.setItem("access_token", response.access_token);
        sessionStorage.setItem("userObj", JSON.stringify(response.data));
        // alert("Created Successfully");
        console.log("response before push");
        router.push("verifyotp");
      } else if (response.status_code == 409) {
        alert("Mobile number already exists");
      } else {
        alert("Something went wrong");
      }
    }
  };

  const gotologin = () => {
    router.push("login");
  };

  return (
    <div>
      <div class="h-screen flex bg-[#1e72f8]">
        <div class="hidden lg:block relative w-0 flex-1">
          <div id="container-inside">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>
            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>

          <div className="flex justify-center items-center h-screen">
            <div className="w-1/2">
              <div className="mb-5">
                <img
                  className="h-36 m-auto text-center "
                  src="../images/logo-white.png"
                />
              </div>

              <div className="text-center">
                <img className="rounded-sm" src="../images/2.png" />
                <div className="mt-5">
                  <h2 className="text-lg text-white">Connect with the world</h2>
                  <p className="text-sm text-white">
                    it is a long established fact that a reader will be
                    distracted by the readable content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white mr-36">
          <div class="mx-auto w-full max-w-sm lg:w-96 ">
            <div>
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Create your account
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Enter your email address and password to access admin panel.
              </p>
            </div>

            <div class="mt-8">
              <div class="mt-6 space-y-6">
                {/* <form class="" method="post" action=""> */}
                <div>
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    First Name{" "}
                  </label>
                  <div class="mt-1 relative">
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      id="firstname"
                      name="firstname"
                      type="text"
                      autocomplete="firstname"
                      required
                      class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-9"
                    />
                    <span className="absolute top-4 left-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Last Name{" "}
                  </label>
                  <div class="mt-1 relative">
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      id="lastname"
                      name="lastname"
                      type="text"
                      autocomplete="lastname"
                      required
                      class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-9"
                    />
                    <span className="absolute top-4 left-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    for="emtelail"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Mobile Number{" "}
                  </label>
                  <div class="mt-1 relative">
                    <input
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      autocomplete="phoneNumber"
                      required
                      class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-9"
                    />

                    <span className="absolute top-4 left-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      I accept{" "}
                      <a href="" className="text-blue-500">
                        {" "}
                        Terms and Conditions{" "}
                      </a>
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={signUp}
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm   font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
                {/* </form> */}
              </div>
              <div className="py-5 text-center">
                <p className=" text-blue-600 ">
                  {" "}
                  <span className="text-gray-500">
                    Already Have Account ?{" "}
                  </span>{" "}
                  <a
                    onClick={gotologin}
                    className="font-semibold cursor-pointer hover:text-red-600"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
