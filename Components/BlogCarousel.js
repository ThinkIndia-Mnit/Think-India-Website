import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from "next/link";
import BlogCard from '../Components/BlogCard';

function BlogCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
<section className="blog_carousel" style={{
      background: "#FFFFFF",
      boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "30px",
      paddingBottom: "20px",
      }}>
<div className="container blog_cont" style={{ paddingTop: "42px" }}>
  <div className="blog_cards">
  <div style={{ paddingLeft: "20px" }}>
    <div className="initiative_head">
      <p>
        <span style={{ color: "#20c2f5" }}>Our</span> Blogs
      </p>
    </div>
  </div>
    <Carousel responsive={responsive} autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}>
      <BlogCard blogTag="ThinkIndia"
      blogTitle="Think India" blogText="Think India is an initiative to bring together the 
      best talent of this country and to infuse them with a nation first attitude. 
      An active forum of researchers, professionals and students where they debate on national 
      issues, raise their concern and offer innovative solutions to problems. It is a platform 
      for the leaders of tomorrow." 
      blogAuthor="Garima Poonia" />
      <BlogCard blogTag="Holi"
      blogTitle="Holi celebration in India"
      blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  
      laboris nisi ut aliq m veniam, quis nostrud exercitation ullamco laboris nisi ut aliq m veniam,
      quis nostrud exercitation ullamco"
      blogAuthor="Deepak Shukla"/>
      <BlogCard/> 
      <BlogCard/>          
    </Carousel>
  </div>
    <div class="blog_btn">
    <Link href="/Blogs/viewMore">
    <a className="blogButton"> View More </a>
    </Link>
    </div>
</div>
</section>
  )
}

export {BlogCarousel}