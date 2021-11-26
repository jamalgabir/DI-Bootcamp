import React from 'react';

const listCars = [
    {
      id : 1,
      name: "dodge d200",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 2,
      name: "hi 1200d",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 3,
      name: "datsun pl510",
      year: "1971-01-01",
      origin: "Japan"
    },
    {
      id : 4,
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA"
    }
];

const My = (props)=>{
    return (
      <div>
      {
        listCars.map(item=>(
            <ul key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.year}</li>
                <li>{item.origin}</li>
            </ul>
        ))
        }
       </div>
    )

};
export default My;
