import { StatusColors, PhotoStatus } from "../../enums";

const StatusBadge = ({ statusKey }) => {
  const colorClass = StatusColors[statusKey] || "bg-primary";
  console.log(statusKey);
  return (
    <span className={`${colorClass} text-white px-2 py-1 rounded`}>
      {PhotoStatus[statusKey]}
    </span>
  );
};

export default StatusBadge;
