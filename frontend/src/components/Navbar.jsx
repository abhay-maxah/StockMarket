import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-navy text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">StockMarket</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-amber">Home</Link>
          <Link to="/market-status" className="hover:text-amber">Market Status</Link>
          <Link to="/login" className="hover:text-amber">Login</Link>
          <Link to="/signup" className="hover:text-amber">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
