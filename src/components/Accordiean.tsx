// import React from "react";
import "../assets/css/accordin.css"
type data={
    que:any;
    answer:any;
}
function Accordiean({que,answer}:data) {
  return (
    <div>
      <div>
        <div className="c-full">
          <div className="m-3 rounded overflow-hidden">

            <div className="group outline-none accordion-section" tabIndex={1}>
              <div className="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-100 cursor-pointer pr-5 relative">
                <div className="group-focus:text-white transition ease duration-100">
                {que}
                </div>
                <div className="h-5 w-5 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-100 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <i className="fa-chevron-down">+</i>
                </div>
              </div>
              <div className="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-100">
                <p className="p-2 text-gray-400 text-justify">
                  {answer}
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordiean;
