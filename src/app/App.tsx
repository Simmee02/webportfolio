import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="font-mplus1 min-h-screen text-gray-900">
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
