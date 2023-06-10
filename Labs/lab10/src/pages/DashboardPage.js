import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>Main Page</p>
      <Link to="/posts" className="button">
        Post List
      </Link>
    </section>
  );
}
