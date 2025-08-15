import { StatusBadge } from "..";
import { PencilSquare } from "../Icons";

function ShootingCard({ title, type, price, date, status, comment }) {
  return (
    <div className="mt-6 bg-secondary p-6 relative">
      <button className="absolute right-6 top-6" title="edit">
        <PencilSquare />
      </button>

      {/* Titre */}
      <h2>{title}</h2>

      {/* Infos principales */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
        <div className="font-semibold text-gray-600">Type :</div>
        <div>{type}</div>

        <div className="font-semibold text-gray-600">Prix :</div>
        <div>{price} €</div>

        {date && (
          <>
            <div className="font-semibold text-gray-600">Date :</div>
            <div>{date}</div>
          </>
        )}

        <div className="font-semibold text-gray-600">Statut :</div>
        <div>
          <StatusBadge statusKey={status} />
        </div>
      </div>

      {/* Commentaire */}
      {comment && (
        <div className="mt-4 p-3 bg-white rounded-lg text-sm text-gray-700 border border-gray-200">
          <span className="block font-semibold text-gray-500 mb-1">
            Commentaire :
          </span>
          {comment}
        </div>
      )}
    </div>
  );
}

export default ShootingCard;
