
import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import { useParams, useNavigate } from "react-router-dom";

export default function AnimalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/animals");
        const found = (res.data.animals || []).find(
          (a) => String(a.id) === String(id)
        );
        setAnimal(found || null);
      } catch (err) {
        console.error("Load animal error", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-600 mt-10">Loading…</p>;

  if (!animal)
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 mb-4">Animal not found.</p>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md border">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {animal.name || animal.animalId}
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>Tag (ID):</strong> {animal.animalId}</p>
        <p><strong>Species:</strong> {animal.species}</p>
        <p><strong>Breed:</strong> {animal.breed || "—"}</p>
        <p><strong>Owner:</strong> {animal.owner || "—"}</p>
        <p><strong>Birth date:</strong> {animal.birthDate || "—"}</p>
        <p><strong>Sex:</strong> {animal.sex || "—"}</p>
        <p><strong>Color:</strong> {animal.color || "—"}</p>
        <p><strong>Purpose:</strong> {animal.productionPurpose || "—"}</p>
        <p><strong>Location:</strong> {animal.locationStatus || "—"}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}
