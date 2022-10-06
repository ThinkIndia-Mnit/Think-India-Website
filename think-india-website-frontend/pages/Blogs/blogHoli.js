import React from 'react'
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Link from "next/link";

function blogHoli() {
  return (
    <div>
        <Navbar />
        <section className="singleBlogContent">
        <div className="blogContentTxtImage" style={{margin: "4 vw",}}>
            <div className="categaryTime displayFlex">
                <p className="blogbtn">Think India</p>
                <div className="time displayFlex">
                    <img src="./time.svg" alt=""/>
                    <p className="timeExact">DECEMBER 14, 2019</p>
                </div>
            </div>

            <h2 style={{fontsize:"1.8em",}}>Holi celebration in India</h2>
            <div className="blogImageFull">
                <img src="/images/Holi.png" alt=""/>
            </div>
            <p className="blogContentText">
                <span className="Blog-first-letter">L</span> 
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliq m veniam, quis nostrud exercitation ullamco laboris nisi ut aliq m veniam,
                quis nostrud exercitation ullamco
                SDSLabs Recruitment Drive 2020 <br/>
                We recruit students every year during the winters and select the best minds from the IITR Junta to join
                our venture for leading the technological innovation in the IIT Roorkee campus.

                We are open to all years of students of IITR to apply in our recruitment drive. However, the majority of
                our recruits are in their 1st year of study.
                <br/>
                Recruitment Process
                We provide you with five different methods of landing an interview at SDSLabs during the Recruitment
                Drive. These methods are:
                <br/>
                Being amongst the teams at the SDSLabs’ Syntax Error Hackathon 2019
                Completing SDSLabs’ Winter of Code 2019
                Completing SDSlabs’ Makers 2020
                Placing top at any of our competitions mentioned below
                Placing amongst the top students in SDS’ Recruitment Test and Design problem statement submissions
                Syntax Error
                We call students for an interview who placed in the top 2 first-year-only teams and the top
                second-year-only team at Syntax Error.

                Since the hackathon winners have already been announced, the respective teams will be called during the
                interview process.
                <br/>
                Winter of Code 2019
                Students who were selected for SDSLabs’ Winter of Code 2019 and were able to pass all their evaluations
                successfully will be invited for an interview at SDSLabs during the interview process.

                Makers 2020
                Students who developed on a project idea released during Makers 2020 or developed on their own project
                idea of a similar caliber will be invited for an interview at SDSLabs during the interview process.
                <br/>
                <b> Competitions
                    SDS organizes a variety of competitions for the 1st year junta at IIT Roorkee during the winters. We
                    like to call the Top 2 students from each of these competitions for an interview:
                    <br/></b>
                NoobCTF
                Capture the flag competition
                Hosted at Backdoor with InfoSec IITR
                Beginner’s Hypothesis
                Data Science competition
                Hosted at Cerebro with DSG IITR
                Algophobic
                Competitive programming competition
                Hosted at Codevillage with PAG IITR
                Endgame
                Mathematical problem-solving competition
                Hosted at Erdős
                Recruitment Test and Design Problem statements
            </p>
            <div className="displayFlex moreWriter">
                <p className="writer">By- Deepak Shukla</p>
                <div className="NexPrebtn">
                        <p className="prevBlog NexPre">
                        <Link href="/Blogs/blogThinkIndia">
                            <a>‹ NEWER</a>
                        </Link>
                        </p>
                        <p className="nextBlog NexPre">
                        <Link href="">
                            <a>OLDER ›</a>
                        </Link>
                        </p>
    
                </div>
            </div>
        </div>
        </section>
        <Footer/>
    </div>
  );
}

export default blogHoli;