import React from 'react';
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import {BlogCarousel} from "../../Components/BlogCarousel"
import BlogCard from '../../Components/BlogCard';
import Carousel from 'react-multi-carousel';
import Link from "next/link";

function ViewMore() {
  return (
    <div>
        <Navbar/>
        <section  className="headerBlog all-center">
        <div className="BlogHeadingComponent ">
            <h1>Think India/VSS MNIT Jaipur</h1>
            <p>
              <Link href="/">
              <a>Home</a>
              </Link>
              <span> {'>>'} </span> Blogs </p>
        </div>
    </section>
    <div className="threeblog">
     <div className="viewBlog"> 
     <BlogCard blogTag="ThinkIndia"
      blogTitle="Think India" blogText="Think India is an initiative to bring together the 
      best talent of this country and to infuse them with a nation first attitude. 
      An active forum of researchers, professionals and students where they debate on national 
      issues, raise their concern and offer innovative solutions to problems. It is a platform 
      for the leaders of tomorrow." 
      blogAuthor="Garima Poonia" /> </div> 
     <div className="viewBlog"> <BlogCard blogTag="Holi"
      blogTitle="Holi celebration in India"
      blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  
      laboris nisi ut aliq m veniam, quis nostrud exercitation ullamco laboris nisi ut aliq m veniam,
      quis nostrud exercitation ullamco"
      blogAuthor="Deepak Shukla"/> </div> 
     <div className="viewBlog"> <BlogCard/> </div> 
     <div className="viewBlog"> <BlogCard/> </div> 
      {/* <BlogCard/> */}
    </div>      
    <Footer />
    </div>
  )
}

export default ViewMore