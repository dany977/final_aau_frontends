import React from "react";

export default function StatsCards() {
  const stats = [
    { label: "Registered Farms", value: "120+" },
    { label: "Animals Tracked", value: "3,500+" },
    { label: "Active Users", value: "45+" },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-center">
      {stats.map((item, index) => (
        <div key={index}>
          <h2 className="text-4xl font-bold">{item.value}</h2>
          <p className="mt-2 text-sm opacity-90">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
