import React, { useEffect, useState } from "react"

const DayBlog = ( {day, scrollTop} ) => {

  const [ ref, setRef ] = useState(null);

  const [ active, setActive ] = useState(false);

  useEffect(() => {

    console.log("scroolll", ref, ref && ref.getBoundingClientRect(),  scrollTop);
    setActive(ref && ref.getBoundingClientRect().y < scrollTop)

  }, [ref, scrollTop]);


  return(
    <div  className={(active ? "text-white " : " text-gray-500")} ref={el => setRef(el)}>
      <p className=" text-xl font-bold ">
        {"Tag" + day}
      </p>
      <p>
        jahslödhjasdf#
        adfjsdjfks
        dfksüdfj
        sdjfs
        fdjs+dfjsdfjsodfj
        sdfjsüo+dfj
      </p>
    </div>
  )

};


export default DayBlog;