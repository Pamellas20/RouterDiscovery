import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="flex space-x-6 justify-center font-medium">
        <Link to="/" className="hover:underline hover:text-yellow-300">Home</Link>
        <Link to="/users/1" className="hover:underline hover:text-yellow-300">User 1</Link>
        <Link to="/users/2" className="hover:underline hover:text-yellow-300">User 2</Link>
        <Link to="/users/3" className="hover:underline hover:text-yellow-300">User 3</Link>
      </div>
    </nav>
  );
};

export default NavBar;