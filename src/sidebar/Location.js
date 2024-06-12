import React from "react";
import InputField from "../Components/InputField";

const Location = ({ handleChange }) => {
  
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sizebar-label-container">
          <input type="radio" name="test"id="test"  value="" onChange={handleChange} />
          <span className="checkmark"> </span> All
        </label>
        <br />
        <InputField
          handleChange={handleChange}
          value="ha noi"
          title="Ha Noi"
          name="test"
          
        />
        <br />
        <InputField
          handleChange={handleChange}
          value="da nang"
          title="Da Nang"
          name="test"
        />
        <br />
        <InputField
          handleChange={handleChange}
          value="ho chi minh"
          title="Ho Chi Minh"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
