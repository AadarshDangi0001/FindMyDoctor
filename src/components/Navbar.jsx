import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
     <Link to="/" className="hover:underline">Home</Link>
<Link to="/find-doctor" className="hover:underline">Find Doctors</Link>
<Link to="/map" className="hover:underline">Doctors Map</Link>

        
     
    </nav>
  );
}
