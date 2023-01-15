import React from "react";

const Card = () => {
  return (
    <div>
      <div className="lg:p-8 lg:mt-24">
        <h2 className="text-6xl font-bold text-center">
          We Provide <br /> <span className="text-green-600">Best Quality</span> Services
        </h2>
        <div className="w-1/2 mx-auto border-2 mt-5 border-gray-500 opacity-20"></div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-2/3 gap-5 mx-auto mt-10">
          <div className="lg:p-6 py-8 lg:mt-5 border-black rounded-3xl hover:shadow-xl bg-lime-50 hover:bg-white hover:duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </div>
            <p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Business Setup
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We help entrepreneurs set up new businesses and the right guidance to grow capital.
            </p>
          </div>
          <div className="max-w-sm p-6 py-8 mt-5 border-black rounded-3xl hover:shadow-xl bg-green-50 hover:bg-white hover:duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </div>
            <p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Accounting
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We help businesses with the tax expertise and financial accounting with transparency
            </p>
          </div>
          <div className="max-w-sm p-6 py-8 mt-5 border-black rounded-3xl hover:shadow-xl bg-emerald-50 hover:bg-white hover:duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </div>
            <p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Audit
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We assist organizations with exploring complex regulations along with developing trust
              and proficiency.
            </p>
          </div>
          <div className="max-w-sm p-6 py-8 mt-5 border-black rounded-3xl hover:shadow-xl bg-teal-50 hover:bg-white hover:duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </div>
            <p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                VAT and Tax advisory
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We are here to help you out with all that is connected with Value Added Tax in the
              United Arab Emirates.
            </p>
          </div>
          <div className="max-w-sm p-6 py-8 mt-5 border-black rounded-3xl hover:shadow-xl bg-sky-50 hover:bg-white hover:duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </div>
            <p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Merger & Acquisition
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We help you resolve strategic value faster and with more certainty while keeping pace
              with changes in the market.
            </p>
          </div>
          <div className="max-w-sm p-6 py-8 mt-5 border-black rounded-3xl hover:shadow-xl bg-blue-50 hover:bg-white hover:duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </div>
            <p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Liquidation
              </h5>
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We can give our Top-class expertise to the financial valuation of your assets, so that
              you get the absolute value of your assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
