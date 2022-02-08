import { Link } from "react-router-dom";

export function BackToShopButton() {
  return (
    <div className="h-16 w-40 font-medium bg-blue-500 text-center flex flex-col justify-center rounded-md text-white">
      <Link to="/store">{buttonContent()}</Link>
    </div>
  );
}

function buttonContent() {
  return "Back to shopping";
}
