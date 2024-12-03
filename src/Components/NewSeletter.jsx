import React from "react";

const NewSeletter = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();

    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe Now & Get 20% Off{" "}
      </p>
      <p className="text-gary-400 mt-3">
        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPES SETTINGS
        INDUSTRY
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="Email"
          placeholder="Enter Your Email address"
          required
        />
        <button className="bg-black text-white text-xs px-10 py-4"   type="Submit">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewSeletter;
