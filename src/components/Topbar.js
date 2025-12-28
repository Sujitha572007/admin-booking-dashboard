import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Topbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-between">
      <h1 className="font-bold">Admin Dashboard</h1>
      <button
        onClick={() => setDark(!dark)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}
