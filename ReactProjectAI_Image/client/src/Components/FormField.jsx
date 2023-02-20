import React from "react";

const FormField = ({
  labelName,
  type,
  placeholder,
  name,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name} 
          className="block text-sm xs:text-xl font-medium text-grey-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-base bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black border-[#6469ff] border dark:bg-[#6469ff] dark:text-slate-100 hover:bg-[rgb(88,92,221)]"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 sm:text-xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default FormField;
