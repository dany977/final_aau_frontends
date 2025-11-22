
import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Animals() {
  const navigate = useNavigate();

  const [farms, setFarms] = useState([]);
  const [animals, setAnimals] = useState([]);

  const emptyForm = {
    animalId: "",
    species: "",
    breed: "",
    farmId: "",
    owner: "",
    birthDate: "",
    sex: "",
    name: "",
    color: "",
    productionPurpose: "",
    locationStatus: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Load farms
  const fetchFarms = async () => {
    try {
      const res = await api.get("/farms?page=1&limit=200");
      setFarms(res.data.farms || []);
    } catch (err) {
      console.error("Failed to load farms", err);
      alert(err.response?.data?.message || "Failed to load farms");
    }
  };

  // Load animals
  const fetchAnimals = async (farmId) => {
    try {
      setLoading(true);

      const url =
        farmId === "ALL"
          ? "/animals"
          : `/animals?farmId=${farmId}`;

      const res = await api.get(url);
      setAnimals(res.data.animals || []);
    } catch (err) {
      console.error("Failed to load animals", err);
      alert(err.response?.data?.message || "Failed to load animals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  useEffect(() => {
    if (!form.farmId) {
      setAnimals([]);
      return;
    }
    fetchAnimals(form.farmId);
  }, [form.farmId]);

  // Create / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.animalId || !form.species || !form.farmId) {
      return alert("animalId, species and farm are required");
    }

    if (form.farmId === "ALL") {
      return alert("Cannot save animal under ALL FARMS. Select a specific farm.");
    }

    try {
      setSaving(true);

      if (editingId) {
        const res = await api.put(`/animals/${editingId}`, form);
        setAnimals((prev) =>
          prev.map((a) => (a.id === editingId ? res.data.animal : a))
        );
        setEditingId(null);
        alert("Animal updated");
      } else {
        const res = await api.post("/animals", form);
        setAnimals((prev) => [res.data.animal, ...prev]);
        alert("Animal added");
      }

      setForm(emptyForm);
    } catch (err) {
      console.error("Save failed", err);
      alert(err.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  // Start Edit
  const startEdit = (animal) => {
    setEditingId(animal.id);
    setForm({
      animalId: animal.animalId || "",
      species: animal.species || "",
      breed: animal.breed || "",
      farmId: animal.farmId || "",
      owner: animal.owner || "",
      birthDate: animal.birthDate || "",
      sex: animal.sex || "",
      name: animal.name || "",
      color: animal.color || "",
      productionPurpose: animal.productionPurpose || "",
      locationStatus: animal.locationStatus || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this animal?")) return;

    try {
      await api.delete(`/animals/${id}`);
      setAnimals((prev) => prev.filter((a) => a.id !== id));
      alert("Deleted");
    } catch (err) {
      console.error("Delete error", err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  const viewDetail = (id) => {
    navigate(`/animals/${id}`);
  };

  // UI
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Animals Registration</h2>

      {/* FARM SELECT */}
      <div className="mb-6">
        <label className="font-medium block mb-2">Select farm:</label>
        <select
          value={form.farmId}
          onChange={(e) => setForm({ ...form, farmId: e.target.value })}
          className="border rounded-lg px-3 py-2 w-64 shadow-sm"
        >
          <option value="">-- choose farm --</option>
          <option value="ALL">All Farms</option>
          {farms.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-xl shadow-md mb-8"
      >
        <input
          className="input"
          placeholder="Animal ID (tag)"
          value={form.animalId}
          onChange={(e) => setForm({ ...form, animalId: e.target.value })}
        />

        <input
          className="input"
          placeholder="Species"
          value={form.species}
          onChange={(e) => setForm({ ...form, species: e.target.value })}
        />

        <input
          className="input"
          placeholder="Breed"
          value={form.breed}
          onChange={(e) => setForm({ ...form, breed: e.target.value })}
        />

        <input
          className="input"
          placeholder="Owner"
          value={form.owner}
          onChange={(e) => setForm({ ...form, owner: e.target.value })}
        />

        <input
          className="input"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input"
          placeholder="Color"
          value={form.color}
          onChange={(e) => setForm({ ...form, color: e.target.value })}
        />

        <input
          className="input"
          placeholder="Production purpose"
          value={form.productionPurpose}
          onChange={(e) => setForm({ ...form, productionPurpose: e.target.value })}
        />

        <input
          className="input"
          placeholder="Location status"
          value={form.locationStatus}
          onChange={(e) => setForm({ ...form, locationStatus: e.target.value })}
        />

        <input
          type="date"
          className="input"
          value={form.birthDate || ""}
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
        />

        <select
          className="input"
          value={form.sex}
          onChange={(e) => setForm({ ...form, sex: e.target.value })}
        >
          <option value="">Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex gap-3 pt-3">
          <button
            type="submit"
            disabled={saving || !form.farmId}
            className="btn-primary"
          >
            {saving ? "Saving…" : editingId ? "Save changes" : "Add animal"}
          </button>

          <button
            type="button"
            onClick={() => {
              setForm(emptyForm);
              setEditingId(null);
            }}
            className="btn-secondary"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={() => {
              setForm(emptyForm);
              setAnimals([]);
              setEditingId(null);
            }}
            className="btn-danger"
          >
            Clear list
          </button>
        </div>
      </form>

      {/* ANIMALS TABLE */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Species</th>
              <th className="p-3">Breed</th>
              <th className="p-3">Sex</th>
              <th className="p-3">Birth</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {animals.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{a.name || a.animalId}</td>
                <td className="p-3">{a.species}</td>
                <td className="p-3">{a.breed || "—"}</td>
                <td className="p-3">{a.sex || "—"}</td>
                <td className="p-3">{a.birthDate || "—"}</td>

                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => viewDetail(a.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </button>

                    <button
                      onClick={() => startEdit(a)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(a.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
