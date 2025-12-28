import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState(["Amit", "Riya", "John"]);
  const [search, setSearch] = useState("");

  const filtered = users.filter(u =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        placeholder="Search"
        className="border p-2 mb-4"
        onChange={e => setSearch(e.target.value)}
      />

      <button
        onClick={() => setUsers([...users, "New User"])}
        className="ml-4 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>

      <table className="mt-4 w-full bg-white">
        <tbody>
          {filtered.map((u, i) => (
            <tr key={i} className="border">
              <td className="p-2">{u}</td>
              <td>
                <button
                  onClick={() => setUsers(users.filter(x => x !== u))}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
