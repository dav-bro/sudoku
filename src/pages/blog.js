import React, { useCallback, useEffect, useState } from "react"
import bgPic from "../static/images/berg.jpg";
import { graphql } from "gatsby";

import Parallax from "../components/parallax";
import Map from "../components/map"
import Header from "../components/header"
import Day from "../components/day"
import DayBlog from "../components/dayBlog"


const Blog = ({ }) => {


  const [ markdown, setMarkdown ] = useState('');

  const [ scrollTop, setScrollTop ] = useState(0);

  let img = <img src={bgPic} className=" w-full z-0 " />;


  useEffect(() => {


    // fetch(testMD).then(res => res.text().then(text => setMarkdown(text)) );

  }, []);


  const handleScroll = (e) => {


    setScrollTop(e.target.documentElement.scrollTop);

    console.log( e.target.documentElement.scrollTop);

  }

  return(
    <div className="relative">
      <Header/>



      <Parallax
        background={img}
        onScroll={handleScroll}
      >
        <div className="  flex flex-row ">
          <div className="w-1/4"/>

          <div className="w-1/2 z-10 mt-20 bg-black text-white p-4 opacity-75">

            <p>
              slug: "/blog/test" date: "2019-05-04" title: "My first blog post"

              h1
              h2
              h3
              h4
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet auctor ex, ut mollis mi. Suspendisse consequat egestas risus sit amet rhoncus. Mauris porttitor magna at quam cursus, in pellentesque sem hendrerit. Nulla ultricies lorem tincidunt arcu laoreet lobortis. Suspendisse rhoncus placerat magna, sit amet ultrices lorem vulputate at. Duis eget pretium eros. Vestibulum eget tortor pulvinar, convallis neque ac, bibendum dolor. Proin vel finibus eros.

              Phasellus a egestas nisl, at finibus enim. Vivamus molestie commodo est, a blandit purus blandit eget. Proin a dignissim purus. Duis eget blandit est, in ornare sapien. Pellentesque auctor egestas nunc, vitae mattis tellus convallis sed. Nulla nec accumsan metus. Donec mattis tincidunt sodales. Donec euismod augue in tristique pharetra.

              Proin ullamcorper lobortis nisi ac imperdiet. Donec facilisis dui at dui luctus pellentesque. Aliquam eleifend congue nunc. Mauris nec dui ut nisl ornare egestas a sit amet odio. Duis porta velit vel egestas bibendum. Aenean venenatis justo velit. Nam ullamcorper eu tellus nec faucibus.

              Nunc urna ex, hendrerit quis volutpat non, sagittis eu mauris. Ut id nisi malesuada, interdum diam ornare, luctus est. Morbi vulputate accumsan libero et aliquet. Etiam eu suscipit augue, nec facilisis dolor. Sed condimentum erat vel erat lobortis iaculis. Aliquam et nisl et ex cursus hendrerit. Maecenas ipsum ex, feugiat et tincidunt quis, finibus at metus.

              Phasellus ullamcorper imperdiet justo vel tincidunt. In venenatis augue ac efficitur feugiat. Maecenas aliquet sed orci vel consectetur. Nunc eget congue diam. Maecenas massa mi, ultricies a quam et, finibus pharetra nunc. Proin vel velit sed dui feugiat aliquet ac quis velit. Donec risus urna, dapibus vel libero eu, faucibus pulvinar dolor. Suspendisse sodales lectus ut metus bibendum lacinia. Quisque ac blandit nulla. Maecenas pellentesque suscipit magna in ullamcorper. Nunc at nibh mattis lorem ullamcorper ultricies in ut mi. v z-10

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet auctor ex, ut mollis mi. Suspendisse consequat egestas risus sit amet rhoncus. Mauris porttitor magna at quam cursus, in pellentesque sem hendrerit. Nulla ultricies lorem tincidunt arcu laoreet lobortis. Suspendisse rhoncus placerat magna, sit amet ultrices lorem vulputate at. Duis eget pretium eros. Vestibulum eget tortor pulvinar, convallis neque ac, bibendum dolor. Proin vel finibus eros.

              </p>

            <DayBlog day={1} scrollTop={scrollTop} />
            <p>
              Phasellus a egestas nisl, at finibus enim. Vivamus molestie commodo est, a blandit purus blandit eget. Proin a dignissim purus. Duis eget blandit est, in ornare sapien. Pellentesque auctor egestas nunc, vitae mattis tellus convallis sed. Nulla nec accumsan metus. Donec mattis tincidunt sodales. Donec euismod augue in tristique pharetra.

              Proin ullamcorper lobortis nisi ac imperdiet. Donec facilisis dui at dui luctus pellentesque. Aliquam eleifend congue nunc. Mauris nec dui ut nisl ornare egestas a sit amet odio. Duis porta velit vel egestas bibendum. Aenean venenatis justo velit. Nam ullamcorper eu tellus nec faucibus.

              Nunc urna ex, hendrerit quis volutpat non, sagittis eu mauris. Ut id nisi malesuada, interdum diam ornare, luctus est. Morbi vulputate accumsan libero et aliquet. Etiam eu suscipit augue, nec facilisis dolor. Sed condimentum erat vel erat lobortis iaculis. Aliquam et nisl et ex cursus hendrerit. Maecenas ipsum ex, feugiat et tincidunt quis, finibus at metus.

              Phasellus ullamcorper imperdiet justo vel tincidunt. In venenatis augue ac efficitur feugiat. Maecenas aliquet sed orci vel consectetur. Nunc eget congue diam. Maecenas massa mi, ultricies a quam et, finibus pharetra nunc. Proin vel velit sed dui feugiat aliquet ac quis velit. Donec risus urna, dapibus vel libero eu, faucibus pulvinar dolor. Suspendisse sodales lectus ut metus bibendum lacinia. Quisque ac blandit nulla. Maecenas pellentesque suscipit magna in ullamcorper. Nunc at nibh mattis lorem ullamcorper ultricies in ut mi. v z-10
              Phasellus a egestas nisl, at finibus enim. Vivamus molestie commodo est, a blandit purus blandit eget. Proin a dignissim purus. Duis eget blandit est, in ornare sapien. Pellentesque auctor egestas nunc, vitae mattis tellus convallis sed. Nulla nec accumsan metus. Donec mattis tincidunt sodales. Donec euismod augue in tristique pharetra.

              Proin ullamcorper lobortis nisi ac imperdiet. Donec facilisis dui at dui luctus pellentesque. Aliquam eleifend congue nunc. Mauris nec dui ut nisl ornare egestas a sit amet odio. Duis porta velit vel egestas bibendum. Aenean venenatis justo velit. Nam ullamcorper eu tellus nec faucibus.

              Nunc urna ex, hendrerit quis volutpat non, sagittis eu mauris. Ut id nisi malesuada, interdum diam ornare, luctus est. Morbi vulputate accumsan libero et aliquet. Etiam eu suscipit augue, nec facilisis dolor. Sed condimentum erat vel erat lobortis iaculis. Aliquam et nisl et ex cursus hendrerit. Maecenas ipsum ex, feugiat et tincidunt quis, finibus at metus.

              Phasellus ullamcorper imperdiet justo vel tincidunt. In venenatis augue ac efficitur feugiat. Maecenas aliquet sed orci vel consectetur. Nunc eget congue diam. Maecenas massa mi, ultricies a quam et, finibus pharetra nunc. Proin vel velit sed dui feugiat aliquet ac quis velit. Donec risus urna, dapibus vel libero eu, faucibus pulvinar dolor. Suspendisse sodales lectus ut metus bibendum lacinia. Quisque ac blandit nulla. Maecenas pellentesque suscipit magna in ullamcorper. Nunc at nibh mattis lorem ullamcorper ultricies in ut mi. v z-10

            </p>

          </div>


          <div className="1/4"/>


        </div>


      </Parallax>


      <div className="fixed top-0 right-0 w-1/4 h-screen mt-20 overflow-hidden ">
        <Map/>
      </div>


    </div>

  )

}

export default Blog;

