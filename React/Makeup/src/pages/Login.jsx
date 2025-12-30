import React, { useState} from "react";

export const Login = () => {

  const [contactData, setContactData] = useState({
    email: "",
    password:"",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      email: "",
      password: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log(contactData);

    handleClearForm();
  };


  return (
    <>
      <div className="   flex justify-center h-[600px] items-center">
        <form 
              //  onReset={handleClearForm}
              onSubmit={handleSubmit} 
         >
          <div className=" rounded-2xl flex flex-col items-center  gap-0.5 p-5 shadow-2xl bg-blue-200 w-[20rem]  ">
            <h1 className="  font-bold  text-[50px]">Login</h1>

            <div className="flex gap-1.5">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className=" border-b-1    ms-8 outline-none"
              />
            </div>

            <div className="flex gap-1.5">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={contactData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="  border-b-1 outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="  px-1 mt-1 my-0.5 rounded border-2 bg-blue-400   hover:shadow hover:bg-gray-500 hover:border"
              >
                login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
