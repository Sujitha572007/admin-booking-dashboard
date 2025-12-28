import { Link } from "react-router-dom";
import { Home, Calendar, Layout, BarChart, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">🎬 Movie Admin</h2>
      <nav className="space-y-5">
        <Link className="flex gap-3 items-center hover:text-blue-400" to="/">
          <Home size={18} /> Dashboard
        </Link>
        <Link className="flex gap-3 items-center hover:text-blue-400" to="/calendar">
          <Calendar size={18} /> Calendar
        </Link>
        <Link className="flex gap-3 items-center hover:text-blue-400" to="/kanban">
          <Layout size={18} /> Kanban
        </Link>
        <Link className="flex gap-3 items-center hover:text-blue-400" to="/analytics">
          <BarChart size={18} /> Analytics
        </Link>
        <Link className="flex gap-3 items-center hover:text-blue-400" to="/users">
          <Users size={18} /> Users
        </Link>
      </nav>
    </div>
  );
}
