import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="fixed bottom-12 right-12 flex justify-center items-center">
      <div
        className={`${
          type === "danger"
            ? "bg-red-600 opacity-70"
            : "bg-green-600 opacity-70"
        } p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        {/* <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-3 py-3 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p> */}
        <p className="mr-2 text-left py-3 px-5">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
