import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/jhbaskdjbf"
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    console.log(contactData);

    handleClearForm();
  };

  return (
    <>
      <div children=" container">
        <div className="   border-black d-flex flex-column align-items-center">
          <h1 className=" text-center">Contact Us</h1>

          <form
            onReset={handleClearForm}
            onSubmit={handleSubmit}
            className=" w-25 p-2 shadow"
          >
            <div>
              <label htmlFor="fullName">FullName:</label>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className=" form-control-plaintext border-bottom"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className=" form-control-plaintext border-bottom"
                value={contactData.email}
                onChange={handleChange}
              />
            </div>

            <div className=" ">
              <label htmlFor="religion">Religious:</label>

              <select
                name="religion"
                id="religion"
                value={contactData.religion}
                onChange={handleChange}
              >
                <option value="">..Select..</option>
                <option value="Sanatani">Sanatani</option>
                <option value="Hindusm">Hindusm</option>
                <option value="Buddishm">Buddishm</option>
              </select>
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>
            <div className="d-flex justify-content-center gap-2 my-2">
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
              <button type="reset" className="btn btn-danger">
                clear form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
