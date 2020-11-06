import React from "react";

import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input 
      className="form-input"
      onChange={handleChange} {...otherProps} />
      {label ? (
        /* if we passed a laboel we add a label element */
        /* if label value is ture (bigger than 0) then apply Shrink , else we apply form-input-label  */

        <label className={`${otherProps.value.length ? "shrink" : "form-input-label"}  `}>
          {label}
        </label>
      ) :  null }
      {/* if we didnt then we dont render any label  */}
    </div>
  );
};

export default FormInput;
