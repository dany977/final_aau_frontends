export default function FarmGrid() {
  const farms = [
    {
      id: 1,
      name: "Hillside Farm",
      location: "Bahir Dar",
      animals: 90,
      image: "https://source.unsplash.com/600x400/?farm"
    },
    {
      id: 2,
      name: "Blue River Farm",
      location: "Hawassa",
      animals: 45,
      image: "https://source.unsplash.com/600x400/?cows"
    },
    {
      id: 3,
      name: "Sunset Poultry",
      location: "Adama",
      animals: 150,
      image: "https://source.unsplash.com/600x400/?poultry"
    },
    {
      id: 4,
      name: "Green Valley Dairy",
      location: "Addis Ababa",
      animals: 70,
      image: "https://source.unsplash.com/600x400/?dairy"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Farm Profiles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {farms.map((farm) => (
          <div
            key={farm.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={farm.image}
              alt={farm.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{farm.name}</h2>
              <p className="text-gray-600">{farm.location}</p>

              <p className="mt-3 text-gray-800 font-medium">
                {farm.animals} Animals
              </p>

              <button
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-medium
                hover:bg-green-700 transition"
              >
                View Farm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
