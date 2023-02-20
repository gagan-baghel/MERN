import React, { useState, useEffect } from "react";
import { FormField } from "../Components";
import { Loader } from "../Components";
import  { toast } from 'react-toastify';


const AskGPT = () => {
  const [gptform, setGptform] = useState({
    prompt: "",
    wordLimit: 100,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [gptResponse, setgptResponse] = useState(null);
  const handleChange = (e) => {
    setGptform({ ...gptform, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    if (gptform.prompt) {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8080/api/v1/my_GPT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...gptform }),
        });
        const gptResponsetext = await response.json();
        toast.success("Done");
        setgptResponse(gptResponsetext.text);
      } catch (err) {
        toast.error("error")
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.info("Search is empty");
    }
  };

  useEffect(() => {}, [gptResponse]);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] xs:text-[32px] text-[24px] dark:text-slate-100">
          ASK ME ANYTHING
        </h1>
        <form className="mt-12 mx-w-3xl">
          <FormField
            labelName="Enter What You Want To ASK ?"
            type="text"
            name="prompt"
            placeholder="Ask whatever you want"
            value={gptform.prompt}
            handleChange={handleChange}
          />
          <div className="flex items-center justify-center space-x-5">

            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="wordLimit"
              type="number"
              placeholder="Word Limit"
              value={gptform.wordLimit}
              onChange={handleChange}
            ></input>
            <button
              type="button"
              className="font-inner font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md my-3 "
              onClick={handleClick}
            >
              SEARCH
            </button>
            </div>
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <Loader />
              <p>Bata Raha hu Bhai Ruk 1 Min</p>
            </div>
          ) : null}

          <div className="py-6 rounded-xl border -mx-4 px-4 sm:text-xl text-base text-gray-600 dark:text-gray-300">
            {gptResponse ? (
              gptResponse
            ) : (
              <div className="font-bold text-[#6469ff]">"Pucho Bhai"</div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AskGPT;
