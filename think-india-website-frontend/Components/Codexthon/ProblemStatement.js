import React from "react";

const ProblemStatement = () => {
  return (
    <div
      className="lg:px-20 lg:py-20 md:px-20 md:py-20 px-5 py-10"
      id="problem"
    >
      <div className="text-5xl my-5" style={{ color: "#ADEFD1FF" }}>
        PROBLEM STATEMENTS
      </div>
      <div className="text-2xl">
        <ol className="list-decimal mx-5">
          <li className="my-10">
            <div className="my-5 text-4xl underline font-semibold">
              Traffic Light Optimizations
            </div>
            <div className="my-5 text-2xl bg-cyan-900 p-3 rounded-xl">
              <i>
                Generally Traffic Light Systems in real world are static and the
                time of switching between Red , Green Light is not optimal with
                respect to traffic on their sides. Sometimes there is a Long
                Queue on the Red Light Side while on the Green Light Side very
                few vehicles are moving.
              </i>
            </div>
          </li>
          <li className="my-10">
            <div className="my-5 text-4xl underline font-semibold">
              Stock Market Prediction and analysis
            </div>
            <div className="my-5 text-2xl bg-cyan-900 p-3 rounded-xl">
              <i>
                Use various tools and techniques to create a website or
                application on which we can analyze data for various stock
                markets not just Indian Stock Market. And also can upload custom
                excel sheets of data and analyze the data and also can download
                the data in form of excel sheet. There should be predictions
                based on data also that how the market will perform in future.
              </i>
            </div>
          </li>
          <li className="my-10">
            <div className="my-5 text-4xl underline font-semibold">
              Video and Image Recommendation System
            </div>
            <div className="my-5 text-2xl bg-cyan-900 p-3 rounded-xl">
              <i>
                The need of ML is increasing day by day. We see a lot of content
                on internet. But in order to show relevant content to the user,
                a recommendation system also needs to be maintained. You can
                design a ML model to recommend video or image. There should be
                proper platform like website or android app to showcase the
                algorithm on dummy data.
              </i>
            </div>
          </li>
          <li className="my-10">
            <div className="my-5 text-4xl underline font-semibold">
              Electric vehicles
            </div>
            <div className="my-5 text-2xl bg-cyan-900 p-3 rounded-xl">
              <i>
                You can make a platform which focuses on enhancing the EV in any
                way like fuel stations, servicing etc.
              </i>
            </div>
          </li>
          <li className="my-10">
            <div className="my-5 text-4xl underline font-semibold">
              Set priority for delivery
            </div>
            <div className="my-5 text-2xl bg-cyan-900 p-3 rounded-xl">
              <i>
                Real world delivery system applications do not meet the
                requirement of providing delivery priority on basis of
                urgency. Generally we observe in real world that there is someone
                who is in desparate need of a delivery, example medications and
                other who are not as much desparate for their delivery. In such
                circumstances, the delivery system should be effective and
                should cater that person who needs his/her delivery urgently.
                Develop an application(web app or android app) that caters to
                this requirement.
              </i>
            </div>
          </li>
          <li className="my-10">
            <div className="my-5 text-4xl underline font-semibold">
              College/campus related issues
            </div>
            <div className="my-5 text-2xl bg-cyan-900 p-3 rounded-xl">
              <i>
                Can decide their own problem statement, judgement will be based
                on scalability of problem and corresponding solution.
              </i>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProblemStatement;
