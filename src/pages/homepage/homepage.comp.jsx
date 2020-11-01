import React from "react";
import Directory from "../../components/directory/directory.comp" ;
import "./homepage.style.scss";

const Homepage = () => {
  
  // adding the Directory to homepage 
  return (
    <div className="homepage">
      <Directory/>
    </div>
  );
};

export default Homepage;
