import CategoriesDisplay from "./CategoriesDisplay";

export function CategoryPage() {
  return (
    <div>
      <div className="text-center  text-4xl font-medium">{CategoryTitle()}</div>
      <div className="mt-5">
        <CategoriesDisplay />
      </div>
    </div>
  );
}

function CategoryTitle() {
  return "CATEGORIES";
}
