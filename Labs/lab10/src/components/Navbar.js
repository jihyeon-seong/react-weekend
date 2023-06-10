import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/posts">Post List</Link>
    </nav>
  );
}
