import Loader from "./Loader";

export default function LoadingPlaceholder(props) {
  return (
    <div className="my-48 w-1/3 m-auto text-center space-y-6">
      <Loader />
      <p className="text-xs text-gray-400 dark:text-gray-600">{props.message}</p>
    </div>
  );
}
