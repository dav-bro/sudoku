import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
  Line,
} from "react-simple-maps"


import topoGER from "../static/topo/gadm36_DEU_1.json"
import topoDNK from "../static/topo/gadm36_DNK_1.json"
import topoFRA from "../static/topo/gadm36_FRA_1.json"

const markers = [
  {
    markerOffset: -15,
    name: "Camping Neu Helgoland",
    coordinates: [ 8.888717, 53.228145]
  },
]

const Map = () => {

  const [ top, setTop ] = useState(0);

  const [ map, setMap ] = useState(null);

  const data = useStaticQuery(
    graphql`
        query {
            allDay1Xml {
                edges {
                    node {
                        xmlChildren {
                            children {
                                attributes {
                                    lat
                                    lon
                                }
                            }
                        }
                    }
                }
            }
            allDay2Xml {
                edges {
                    node {
                        xmlChildren {
                            children {
                                attributes {
                                    lat
                                    lon
                                }
                            }
                        }
                    }
                }
            }
        }


    `
  )

  const days = 2;
  let routes = [];

  console.log("DATA", data);

  for (let i = 1; i <= days; i++ ) {
    routes.push({
      day: i,
      coordinates: data["allDay" + i + "Xml"].edges[1].node.xmlChildren[0].children.map(att => [att.attributes.lon, att.attributes.lat])
    })
  }


  console.log(routes)

  useEffect(() => {

   /* setTimeout(() => {
      setTop(top + 10)
    }, 1000)*/




  }, [])

  return(
    <div className="relative w-full h-full  ">
      <div className={"absolute right-0 w-full h-full t" }
           style={{top: top}}
           ref={ el => setMap(el)}
      >
        <ComposableMap className="w-full h-full transition-all duration-300 text-white fill-current"
                       projection="geoAzimuthalEqualArea"
                       projectionConfig={{
                         rotate: [-8.888717, -53.228145, 0],
                         scale: 15000
                       }}>
          <Geographies className="transition-all duration-300 "  geography={topoGER}>
            {( geographies ) =>
            {
              return (geographies.geographies.map(geo => (
                <Geography className="transition-all duration-1000" stroke={"black"} key={geo.rsmKey} geography={geo} />
              )))
            }
            }
          </Geographies>
          <Geographies geography={topoDNK}>
            {( geographies ) =>
              (geographies.geographies.map(geo => (
                <Geography className="transition-all duration-1000" key={geo.rsmKey} geography={geo} />
              )))
            }
          </Geographies>
          <Geographies geography={topoFRA}>
            {( geographies ) =>
              (geographies.geographies.map(geo => (
                <Geography className="transition-all duration-1000" key={geo.rsmKey} geography={geo} />
              )))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates} ref={el => el && el.scrollIntoView({behavior: "smooth"})}>
              <circle r={1} fill="red" stroke="red" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "red" }}
              >
                {name}
              </text>
            </Marker>
          ))}
          <Line
                coordinates={routes[0].coordinates}
                stroke={"black"}
                strokeWidth={1}
                className="cursor-pointer"
                onMouseOver={(e) => {
                  console.log(e.target, map);
                  e.target.scrollIntoView({behavior: "smooth"})
                }}
          />

            <Line
              coordinates={routes[1].coordinates}
              stroke={"black"}
              strokeWidth={1}
              className="cursor-pointer"
              onMouseOver={(e) => {
                console.log(e.target, map);
                e.target.scrollIntoView({behavior: "smooth"})
              }}
            />

        </ComposableMap>
      </div>

    </div>
  )
};




export default Map;