import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";


const CollegeCard = ({college}) => {
  const {_id, college_image, college_name, college_rating, research_history, admission_dates} = college;
   return (
    <Container>
      <div className="mt-24">
      <div className="card bg-base-100 shadow-xl">
        <figure><img className="w-96 h-72" src={college_image}  alt="college" /></figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold">{college_name}</h2>
          <p className="text-2xl"><span className="text-2xl font-bold">Rating: </span>  {college_rating}</p>
          <p className="text-2xl"><span className="text-2xl font-bold">Admission Date:</span> {admission_dates.fall}</p>
          <p className="text-2xl"><span className="text-2xl font-bold">Research Number:</span> {research_history.total_publications}</p>
          <div className="card-actions justify-center">
            <Link to={`/detailsInformation/${_id}`}>
              <button className="btn btn-primary w-full">Details</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default CollegeCard;