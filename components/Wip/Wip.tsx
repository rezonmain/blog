import { FiAlertTriangle } from "react-icons/fi";

const Wip: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-3 rounded-sm bg-yellow-600 p-4">
      <FiAlertTriangle className="stroke-2 text-lg" />
      <p className="text-lg">
        This article is still a work-in-progress. Check back later!
      </p>
    </div>
  );
};

export { Wip };
