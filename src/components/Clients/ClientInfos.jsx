function ClientInfos({ lastname, firstname, email, adresse, since }) {
  const info = [
    { label: "Nom", value: lastname },
    { label: "Prénom", value: firstname },
    { label: "Email", value: email },
    { label: "Adresse", value: adresse },
  ];

  return (
    <div className="p-6 bg-secondary">
      <h2 className="mb-4">Informations client</h2>

      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
        {info.map((item) => (
          <div key={item.label} className="flex">
            <span className="font-semibold w-24">{item.label}:</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 italic text-gray-600">Client depuis {since}</p>
    </div>
  );
}

export default ClientInfos;
