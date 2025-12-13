import { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await axios.get("/admin/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    if (!confirm("Delete this user?")) return;
    await axios.delete(`/admin/users/${id}`);
    loadUsers();
  };

  const changeRole = async (id, role) => {
    await axios.put(`/admin/users/${id}/role`, { role });
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">ID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.id}</td>
                <td>{u.email}</td>
                <td>
                  <select
                    value={u.role}
                    onChange={(e) => changeRole(u.id, e.target.value)}
                    className="border p-1"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
