import React,{ useState} from 'react';

export const SignUp = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmEmail: "",
    confirmPassword: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };
  

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      confirmEmail: "",
      confirmPassword: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log(contactData);

    handleClearForm();
  };

  return (
    <>
      <div >
        <div className="  pt-50 h-auto   ">
          

          <form
            onReset={handleClearForm}
            onSubmit={handleSubmit}
            className=" w-100 p-5 shadow-2xl flex flex-col  gap-2 mx-auto  bg-gray-400 rounded-2xl "
          >
             <h1 className=" font-bold text-center text-[50px]">Register</h1>
            <div className="grid grid-cols-2 ">
              <label htmlFor="fullName">FullName:</label>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className=" outline-none border-b "
              />
            </div>
            <div className="grid grid-cols-2 ">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="  outline-none border-b"
                value={contactData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 ">
              <label htmlFor="confirmEmail">Confirm Email:</label>
              <input
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                placeholder="Reenter your Email"
                className="  outline-none border-b"
                value={contactData.confirmEmail}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 ">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="  outline-none border-b"
                value={contactData.password}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 ">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re Enter your password"
                className="  outline-none border-b"
                value={contactData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2">
              <label htmlFor="phone">Phone:</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter your mobile number"
                className="  outline-none border-b"
                value={contactData.phone}
                onChange={handleChange}
              />
            </div>

             <div className="grid grid-cols-2 ">
              <label htmlFor="city">City:</label>
              <input
                type="city"
                name="city"
                id="city"
                placeholder="Enter your city"
                className=" border-b outline-none"
                value={contactData.city}
                onChange={handleChange}
              />
            </div>
            
            <div className="text-center pt-5">
              <button type="submit" className="    border  rounded p-1 text-white hover:bg-blue-500  ">
                Register
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
