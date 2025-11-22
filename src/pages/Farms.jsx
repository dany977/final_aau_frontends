
import React, { useEffect, useState } from "react";
import api from "../utils/axios";

export default function Farms() {
  const [farms, setFarms] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", description: "" });
  const [editId, setEditId] = useState(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch farms
  const fetchFarms = async (p = page) => {
    try {
      setLoading(true);
      const res = await api.get(`/farms?page=${p}&limit=${limit}`);
      setFarms(res.data?.farms || []);
      setTotalPages(res.data?.totalPages || 1);
      setPage(res.data?.page || p);
    } catch (err) {
      alert("Failed to fetch farms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarms(page);
  }, [page]);

  // Create or update farm
  const submitFarm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (editId) {
        await api.put(`/farms/${editId}`, form);
      } else {
        await api.post(`/farms`, form);
      }

      setForm({ name: "", location: "", description: "" });
      setEditId(null);
      setPage(1);
      fetchFarms(1);
    } catch (err) {
      alert("Operation failed");
    } finally {
      setLoading(false);
    }
  };

  // Delete farm
  const deleteFarm = async (id) => {
    if (!confirm("Are you sure you want to delete this farm?")) return;

    try {
      await api.delete(`/farms/${id}`);
      fetchFarms(page);
    } catch (err) {
      alert("Delete failed");
    }
  };

  // Start edit
  const startEdit = (farm) => {
    setEditId(farm.id);
    setForm({
      name: farm.name,
      location: farm.location,
      description: farm.description,
    });
  };

  return (
    <div className="py-6 flex justify-center bg-regal-blue">
      <div className="w-full max-w-4xl bg-regal-blue">

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-4">Farms</h2>

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <form onSubmit={submitFarm} className="space-y-4">
            <input
              type="text"
              placeholder="Farm Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editId
                ? "Update Farm"
                : "Create Farm"}
            </button>
          </form>
        </div>

        {/* TABLE LIST OF FARMS */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="min-w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b">#</th>
                <th className="py-3 px-4 border-b">Farm Name</th>
                <th className="py-3 px-4 border-b">Location</th>
                <th className="py-3 px-4 border-b">Description</th>
                <th className="py-3 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {farms.map((farm, index) => (
                <tr key={farm.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>

                  <td className="py-2 px-4 border-b font-medium">
                    {farm.name}
                  </td>

                  <td className="py-2 px-4 border-b">
                    {farm.location || "—"}
                  </td>

                  <td className="py-2 px-4 border-b">
                    {farm.description}
                  </td>

                  <td className="py-2 px-4 border-b text-center">
                    <button
                      onClick={() => startEdit(farm)}
                      className="px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteFarm(farm.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>

          <span className="font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
