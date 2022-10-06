import React from 'react'
import Link from 'next/link'

export default function BlogCard(props) {
  return (
    
        <div className="blogCard">
        <div className="blogContent">
          <div className="blogImage">
           <img src="/images/Holi.png" alt=""/>
          </div>
          <div className="categaryTime displayFlex">
            <p className="blogbtn">{props.blogTag}</p>
            <div className="time displayFlex">
              <img src="./time.svg" alt=""/>
              <p className="timeExact">DECEMBER 14, 2019</p>
            </div>
          </div>
              <h2>{props.blogTitle}</h2>
              <p className="blogContentText">
                {props.blogText}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  
              laboris nisi ut aliq m veniam, quis nostrud exercitation ullamco laboris nisi ut aliq m veniam,
              quis nostrud exercitation ullamco  */}
              </p>
              <div className='displayFlex moreWriter'>
                <p className="writer">By- {props.blogAuthor}</p>
                <Link href={'/Blogs/blog'+props.blogTag}>
                <a className="blogbtn">READ MORE</a> 
                </Link>
              </div>
            </div>
        </div>
    
  )
}
