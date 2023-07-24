import { useLoaderData, useParams } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { useEffect, useState } from "react";


const DetailsInformation = () => {
  const [info, setInfo] = useState([])
  const details = useLoaderData();
  console.log(details)

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/college`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const storedData = info.find((detail) => detail.id === id);
  console.log(storedData);

  // const {college_name ,events, sports} = storedData
  return (
    <div>
      <Container>
      <div className="card mx-auto w-1/2 mt-5 mb-5 glass">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-center">Events</h2>
            {/* <h4>spdppgd{college_name}</h4> */}
            {/* {events.map((event, index) => (
              <div key={index}>
                <h3>{event.event_name}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>Description: {event.description}</p>
              </div>
            ))} */}
          </div>
          <div></div>
          
        </div>
      </div>
      </Container>
    </div>
  );
};

export default DetailsInformation;