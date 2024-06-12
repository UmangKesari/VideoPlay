import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        {console.log("INside button comp")}
        <button className="bg-gray-300 rounded-lg px-5 py-1 m-2">{name}</button>
    </div>
  );
};

export default Button;