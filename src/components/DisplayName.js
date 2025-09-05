import { useState } from "react";
import "./displayname.css";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`); 
  };

  return (
    <div className="container">
      <h1 className="heading">Full Name Display</h1>

      <form className="form-control" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
        className="form-control"
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        /><br/>

        <label>Last Name:</label>
        <input
        className="form-control"
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        /><br/>

        <button type="submit">Submit</button>
      </form>

      {/* Show full name after submit */}
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default DisplayName;
