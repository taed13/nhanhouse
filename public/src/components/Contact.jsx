import React from "react";

const Contact = ({ title, detail, color, icon }) => {
  const divStyle = {
    backgroundColor: color,
  };

  return (
    <div className="flex px-2">
      <div
        className="border p-3 rounded-2xl pb-0 flex justify-center"
        style={divStyle}
      >
        {icon} {/* Thay đổi biểu tượng ở đây */}
      </div>
      <div className="p-0 m-0 pl-2 ">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{detail}</p>
      </div>
    </div>
  );
};

export default Contact;
