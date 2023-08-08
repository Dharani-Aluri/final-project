import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function Recipes() {
    const data = RecipeData;
    console.log("data", data);
    return (
        <div>
            <RecipeList recipes={data} />
        </div>
    );
}
export default Recipes;
