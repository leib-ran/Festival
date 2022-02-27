import { useHistory } from "react-router";

export function ApprovedContactPage() {
  const history = useHistory();
  return (
    <div>
      <h1>Your Ticket was sent to our system</h1>
      <button
        className="bg-blue-600 text-white w-32 h-10"
        onClick={() => history.push("/")}
      >
        home page
      </button>
    </div>
  );
}
