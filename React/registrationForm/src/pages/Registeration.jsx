import React, { useState } from "react";

export const Registeration = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    emailAddress: "",
    dateOfBirth: "",
    qualification: "",
    grade: "",
    preferredCourse: "",
    address: "",
    city: "",
    pinCode: "",
    guardianName: "",
    guardianContact: "",
  });

//   const handleChange = (e) => {
//     const {name ,value} = e.target;
//   }



  return (
     <>
     {/* <Toaster  position="top-center"  reverseOrder={false} /> */}
     
      <div className="  p-1 m-5 flex justify-center ">
        <form className=" borde rounded shadow-2xl p-3.5 ">
          <fieldset className=" border-2 border-emerald-500  shadow-2xl w-4xl rounded mb-1.5">
            <legend className="ms-10 text-blue-800">
              Personal Information
            </legend>

            <div className=" grid grid-cols- px-2 my-1">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={registerData.fullName}
                placeholder="Enter your name"
                className=" outline-green-400 -ms-1 p-1 "
              />

              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                value={registerData.emailAddress}
                placeholder="Enter your email"
                className=" outline-green-400 -ms-1 p-1"
              />
              <label htmlFor="dateOfBirth">D.O.B</label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={registerData.dateOfBirth}
                className=" outline-green-400 -ms-1 p-1"
              />
            </div>
          </fieldset>

          <fieldset className=" border-2 border-emerald-500  shadow-2xl w-4xl rounded mb-1.5">
            <legend className="ms-10 text-blue-800">Academic Details</legend>

            <div className=" grid grid-cols- px-2 my-1">
              <label htmlFor="qualification">Qualification:</label>
              <select
                name="qualification"
                id="qualification"
                value={registerData.qualification}
                className=" outline-green-400 -ms-1 p-1"
              >
                <option value="">...Select...</option>
                <option value="10th">10th standard</option>
                <option value="12th">12th standard</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>

              <label htmlFor="grade">Percentage/Grade:</label>
              <input
                type="text"
                name="grade"
                id="grade"
                value={registerData.grade}
                placeholder="Enter your Grade"
                className=" outline-green-400 -ms-1 p-1"
              />
            </div>
          </fieldset>

          <fieldset className=" border-2 border-emerald-500  shadow-2xl w-4xl rounded mb-1.5">
            <legend className="ms-10 text-blue-800">Course Information</legend>

            <div className=" felx grid px-2 my-1">
              <label htmlFor="preferredCourse">Preferred Course:</label>
              <select
                name="preferredCourse"
                id="preferredCourse"
                value={registerData.preferredCourse}
                className=" outline-green-400 -ms-1 p-1"
              >
                <option value="">...Select Courses...</option>
                <option value="Java">Java</option>
                <option value="DSA">DSA</option>
                <option value="MERN">MERN</option>
              </select>

              <div className=" flex  items-center  gap-2 ">
                <label htmlFor="batchTime">Batch Timing Preference:</label>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value="Morning"
                  className=" ms-5 mt-0.5"
                />
                <span>Morning</span>

                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value="AfterNoom"
                  className=" ms-5 mt-0.5"
                />
                <span>Afternoon</span>

                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value="Evening"
                  className=" ms-5 mt-0.5"
                />
                <span>Evening</span>
              </div>
            </div>
          </fieldset>

          <fieldset className=" border-2 border-emerald-500  shadow-2xl w-4xl rounded mb-1.5">
            <legend className="ms-10 text-blue-800">Address</legend>

            <div className=" grid grid-cols- px-2 my-1">
              <label htmlFor="address">Residential Address:</label>
              <textarea
                name="address"
                id="address"
                placeholder="Enter your Address"
                className=" outline-green-400 -ms-1 p-1"
              ></textarea>

              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
                className=" outline-green-400 -ms-1 p-1"
              />

              <label htmlFor="pinCode">Pin Code:</label>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                placeholder="Enter pincode"
                className=" outline-green-400 -ms-1 p-1"
              />
            </div>
          </fieldset>

          <fieldset className=" border-2 border-emerald-500  shadow-2xl w-4xl rounded mb-1.5">
            <legend className="ms-10 text-blue-800">Guardian Details</legend>

            <div className=" grid grid-cols- px-2 my-1">
              <label htmlFor="guardianName">Guardian’s Full Name:</label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                placeholder="Enter your guardian name"
                className=" outline-green-400 -ms-1 p-1"
              />

              <label htmlFor="guardianContact">
                Guardian’s Contact Number:
              </label>
              <input
                type="tel"
                name="guardianContact"
                id="guardianContact"
                placeholder="+91"
                className=" outline-green-400 -ms-1 p-1"
              />
            </div>
          </fieldset>

          <fieldset className=" border-2 border-emerald-500  shadow-2xl w-4xl rounded mb-1.5">
            <legend className="ms-10 text-blue-800">
              Additional Information
            </legend>

            <div className="flex  items-center  gap-2 my-1 px-2">
              <label htmlFor="address">How did you hear about us: </label>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value="Friends"
                className=" ms-5 mt-0.5"
              />
              <span>Friends</span>

              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value="Online add"
                className=" ms-5 mt-0.5"
              />
              <span>Online add</span>

              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value="Newspaper"
                className=" ms-5 mt-0.5"
              />
              <span>Newspaper</span>

              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value="Other"
                className=" ms-5 mt-0.5"
              />
              <span>Other</span>
            </div>
          </fieldset>

          <div className=" text-center ">
            <button
              type="submit"
              className=" border-2  text-2xl shadow p-1 rounded bg-emerald-700 text-amber-50  hover:bg-amber-50 hover:text-emerald-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Registeration;
