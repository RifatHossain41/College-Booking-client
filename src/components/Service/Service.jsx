import Container from "../Shared/Container/Container";
import { GrUserSettings } from 'react-icons/gr';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { FaRegAddressBook } from 'react-icons/fa';
import { TbWorldSearch } from 'react-icons/tb';


const Service = () => {
  return (
    <div >
      <Container>
        <div>
          <h2 className="text-3xl text-center font-bold">All Service</h2>        
        <div className="text-center mt-24 lg:flex justify-center gap-8">
          <div className="hover:bg-gray-400 p-12 rounded">
            <GrUserSettings size={40} />
            <h2 className="text-2xl font-bold">Top Colleges</h2>
          </div>
          <div className="hover:bg-gray-400 p-12 rounded">
            <BsJournalBookmarkFill size={40} />
            <h2 className="text-2xl font-bold">Popular Courses</h2>
          </div>
          <div className="hover:bg-gray-400 p-12 rounded">
            <FaRegAddressBook size={40} />
            <h2 className="text-2xl font-bold">Experts Guidance</h2>
          </div>
          <div className="hover:bg-gray-400 p-12 rounded">
            <TbWorldSearch size={40} />
            <h2 className="text-2xl font-bold">Apply Online</h2>
          </div>
        </div>
        </div>
      </Container>
      </div>
  );
};

export default Service;