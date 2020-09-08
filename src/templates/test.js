import React, { useEffect, useState } from "react";
import bgPic from "../static/images/berg.jpg";
import { graphql } from "gatsby";

import Parallax from "../components/parallax";
import Map from "../components/map"


const TestArticle = ({ data }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const [ markdown, setMarkdown ] = useState('');

  let img = <img src={bgPic} className=" w-full z-0 " />;


  useEffect(() => {


    // fetch(testMD).then(res => res.text().then(text => setMarkdown(text)) );

  }, []);


  return(
    <div className=" ">
      <Parallax
        background={img}
      >

        <div className="flex flex-col w-full overflow-hidden">



          <div className="mt-20 z-10 flex flex-row justify-center  w-full">
            <div className="w-1/4">

            </div>
            <div className=" w-1/2  bg-black  opacity-75" >
              <p className=" text-2xl text-white p-3">
                <div className="markdown" dangerouslySetInnerHTML={{__html: html}}/>
              </p>
            </div>
            <div className="relative mt-20 z-10 w-1/4 h-screen ">
              <Map/>
            </div>
          </div>


        </div>





      </Parallax>
    </div>

  )

}

export default TestArticle;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
    `