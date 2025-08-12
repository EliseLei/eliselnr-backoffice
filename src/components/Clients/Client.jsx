function Client({ lastname, firstname, price, nbShootingPhoto }) {
  return (
    <div
      className="grid grid-cols-5 gap-4 p-5 border-b border-gray-200
 hover:bg-secondary transition-colors duration-200 cursor-pointer"
    >
      <div>{lastname}</div>
      <div>{firstname}</div>
      <div>{price} €</div>
      <div>{nbShootingPhoto}</div>
      <div>....</div>
    </div>
  );
}

export default Client;
