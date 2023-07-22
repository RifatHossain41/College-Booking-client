import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import Container from "../Shared/Container/Container";


const College = () => {
  const [colleges, setColleges] = useState([]);

  const url = `http://localhost:4000/college`
  console.log(url)

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(data => setColleges(data))
  }, [url])

  return (
    <Container>
        <div className="grid lg:grid-cols-2 gap-4">
        
          {
            colleges.map(college => <CollegeCard
            key={college._id}
            college={college}
            ></CollegeCard>)
          }
        </div>
    </Container>
  );
};

export default College;