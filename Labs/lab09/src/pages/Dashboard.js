import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is Dashboard</p>

      <Link to="/posts">Go to Posts</Link>
    </div>
  );
}
