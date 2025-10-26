function ClientInfos() {
  const client = {
    lastname: "Dupont",
    firstname: "Marie",
    email: "marie.dupont@example.com",
    birthday: "12/03/1990",
    adresse: "15 rue de la République",
    zipcode: "75015",
    city: "Paris",
    social: "https://www.instagram.com/marie.dupont",
    source: "Recommandation d’un ami",
    other: "",
    since: "janvier 2022",
  };

  return (
    <div className="space-y-6">
      {/* Section Infos personnelles */}
      <div className="p-6 bg-secondary">
        <h2 className="mb-4 text-lg font-bold">Informations client</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
          <div className="flex">
            <span className="font-semibold w-40">Nom :</span>
            <span>{client.lastname}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Prénom :</span>
            <span>{client.firstname}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Email :</span>
            <span>{client.email}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Date de naissance :</span>
            <span>{client.birthday}</span>
          </div>
        </div>
      </div>

      {/* Section Adresse */}
      <div className="p-6 bg-secondary ">
        <h2 className="mb-4 text-lg font-bold">Adresse</h2>
        <div className="space-y-2">
          <div className="flex">
            <span className="font-semibold w-40">Rue :</span>
            <span>{client.adresse}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Code postal :</span>
            <span>{client.zipcode}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Ville :</span>
            <span>{client.city}</span>
          </div>
        </div>
      </div>

      {/* Section Communication */}
      <div className="p-6 bg-secondary">
        <h2 className="mb-4 text-lg font-bold">Communication</h2>
        <div className="flex">
          <span className="font-semibold w-40">Réseau social :</span>
          <a href={client.social}>{client.social}</a>
        </div>
        <div className="flex mt-2">
          <span className="font-semibold w-40">Comment il m’a connu :</span>
          <span>{client.source || client.other}</span>
        </div>
      </div>

      {/* Client depuis */}
      <p className="mt-4 text-sm italic text-gray-500">
        Client depuis {client.since}
      </p>
    </div>
  );
}

export default ClientInfos;
