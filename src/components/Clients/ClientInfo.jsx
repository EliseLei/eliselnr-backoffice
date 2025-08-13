function ClientInfo({ lastname, firstname, since }) {
  return (
    <div className="p-6 bg-secondary">
      <h2>Informations client</h2>
      <div className="mt-2">
        <p>Nom : {lastname}</p>
      </div>
      <div className="mt-2">
        <p>Prénom : {firstname}</p>
      </div>
      <div className="mt-2">
        <p className="italic">Client depuis {since}</p>
      </div>
    </div>
  );
}

export default ClientInfo;
