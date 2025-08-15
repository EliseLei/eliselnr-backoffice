import { PencilSquare } from "../Icons";

function Client({ lastname, firstname, email, price, nbShootingPhoto }) {
  const gridCols = email ? "grid-cols-5" : "grid-cols-4";

  return (
    <div
      className={`grid ${gridCols} gap-4 p-5 border-b border-gray-200
      hover-bg-secondary transition-colors duration-200 cursor-pointer`}
    >
      <div>
        {firstname} {lastname}
      </div>
      {email && email}
      <div>{price} €</div>
      <div>{nbShootingPhoto}</div>
      <div>
        <PencilSquare />
      </div>
    </div>
  );
}

export default Client;
