import React from 'react'
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Link from "next/link";

function blogThinkIndia() {
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

            <h2 style={{fontsize:"1.8em",}}>THINK INDIA</h2>
            <div className="blogImageFull">
                <img src="/images/thinkIndiaLogo.png" style={{textAlign: "center" }} alt=""/>
            </div>
            <p className="blogContentText">
                <span className="Blog-first-letter">T</span>
                hink India is an initiative to bring together the best talent of this country and 
                to infuse them with a nation first attitude. An active forum of researchers, 
                professionals and students where they debate on national issues, raise their 
                concern and offer innovative solutions to problems. It is a platform for the 
                leaders of tomorrow. It is the only way to win the battle of minds which is being 
                relentlessly waged by the forces of anarchy and those who want the destruction of 
                India. Think India connects and introduce them to the change makers and the process
                of development. <br/>
                Think India MNIT Jaipur have diverse sections like Heritage, art and design, 
                DIY, debating, entrepreneurship and publicity, which work together as a team 
                towards a common goal. <br/>

                Apart from the significant initiatives that all the other sections made you dive into. 
                We also conduct various miscellaneous events that would help individuals and society&apos;s overall 
                growth and development. <br/>

                To enlighten the students with the wise words of dignitaries, various kinds of talks are 
                organised frequently. These help in making their path clear in both career and life. 
                Various experts take sessions on pertinent topics. <br/>

                To make the participants feel the fierce competition in this challenging world. Quizzes are 
                conducted regularly. Our Club also aims to create a sense of moral awareness and help.
                Distribution of pride kit school girls was one of our recent initiatives. <br/>

                Our team is also planning to teach the children of Mess Workers by taking various sessions in future. <br/>

                We have a team of 92 active members who successfully conducted the most significant number of 
                occasions. 
            </p>
            <div className="displayFlex moreWriter">
                <p className="writer">By- Garima Poonia</p>
                <div className="NexPrebtn">
                        <p className="prevBlog NexPre">
                        <Link href="">
                            <a>‹ NEWER</a>
                        </Link>
                        </p>
                        <p className="nextBlog NexPre">
                        <Link href="./blogHoli">
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

export default blogThinkIndia;