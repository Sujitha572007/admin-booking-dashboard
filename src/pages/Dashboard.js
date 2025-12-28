import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Users" value="1200" />
        <StatCard title="Tickets Sold" value="8450" />
        <StatCard title="Revenue" value="₹3,40,000" />
      </div>
    </div>
  );
}
