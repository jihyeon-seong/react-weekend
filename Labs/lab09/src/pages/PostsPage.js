import { Link } from 'react-router-dom';

export default function PostsPage() {
  return (
    <div>
      <h1>Posts Page</h1>
      <p>This is Posts Page</p>

      <Link to="/">Go to Dashboard</Link>
    </div>
  );
}
