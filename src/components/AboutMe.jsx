import React from "react";
import College_Logo from "../assets/college.png";
const AboutMe = () => {
  return (
    // <section className=" bg-white dark:bg-[#1E1E1E]">
    //   <div className="py-12  ">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className=" mx-auto  dark:text-white space-y-2 text-center">
    //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
    //           About Me
    //         </h2>
    //         <p className="dark:text-gray-600">Libero minima optio qui</p>
    //       </div>
    //       <div className="mt-10">
    //         <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
    //           <div className="relative">
    //             <dt>
    //               <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
    //                 <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
    //               </div>
    //               <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
    //                 Powerful API
    //               </p>
    //             </dt>
    //             <dd className="mt-2 ml-16 text-base text-gray-500">
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //               Maiores impedit perferendis suscipit eaque, iste dolor
    //               cupiditate blanditiis ratione.
    //             </dd>
    //           </div>
    //           <div className="relative">
    //             <dt>
    //               <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
    //                 <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
    //               </div>
    //               <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
    //                 Easy to integrate SDK
    //               </p>
    //             </dt>
    //             <dd className="mt-2 ml-16 text-base text-gray-500">
    //               {" "}
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //               Maiores impedit perferendis suscipit eaque, iste dolor
    //               cupiditate blanditiis ratione.
    //             </dd>
    //           </div>
    //           <div className="relative">
    //             <dt>
    //               <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
    //                 <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
    //               </div>
    //               <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
    //                 Low Transaction Cost
    //               </p>
    //             </dt>
    //             <dd className="mt-2 ml-16 text-base text-gray-500">
    //               {" "}
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //               Maiores impedit perferendis suscipit eaque, iste dolor
    //               cupiditate blanditiis ratione.
    //             </dd>
    //           </div>
    //           <div className="relative">
    //             <dt>
    //               <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
    //                 <img
    //                   src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
    //                   className="bg-white rounded-3xl"
    //                 />
    //               </div>
    //               <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
    //                 Powerful Dashboard
    //               </p>
    //             </dt>
    //             <dd className="mt-2 ml-16 text-base text-gray-500">
    //               {" "}
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //               Maiores impedit perferendis suscipit eaque, iste dolor
    //               cupiditate blanditiis ratione.
    //             </dd>
    //           </div>
    //         </dl>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <>
      <section className="relative pt-16 bg-gray-300 dark:bg-[#1E1E1E] ">
        <div className=" mx-auto  dark:text-white space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About Me
          </h2>
          {/* <p className="dark:text-gray-600">Libero minima optio qui</p> */}
        </div>
        <div className="container mt-8 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12  px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                {/* <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-500 fill-current"
                    />
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote> */}
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img src={College_Logo} alt="college" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">College</h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus JS comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://img.icons8.com/?size=100&id=DzQFf09l3D1p&format=png&color=000000"
                          alt="college"
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Coding</h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://img.icons8.com/?size=100&id=9437&format=png&color=000000"
                          alt="college"
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">School</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img
                          src="https://img.icons8.com/?size=100&id=c0d5ZV9gJXwS&format=png&color=000000"
                          alt="college"
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Intrest</h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus JS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
