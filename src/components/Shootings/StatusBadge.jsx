import { StatusColors, PhotoStatus } from "../../enums";

const StatusBadge = ({ statusKey }) => {
  const colorClass = StatusColors[statusKey] || "bg-primary";
  return (
    <span className={`${colorClass} inline-block text-white px-2 py-1 rounded`}>
      {PhotoStatus[statusKey]}
    </span>
  );
};

export default StatusBadge;
