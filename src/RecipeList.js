import { Link } from "react-router-dom";
import "./RecipeList.css";
function RecipeList(props) {
    console.log("props", props.recipes);
    return (
        <div className="recipe-list">
            {props.recipes.map((recipe, index) => (
                <div key={recipe.id} className="recipe-card">
                    <img src={recipe.thumbnail_url} alt={recipe.name} />
                    <Link to={`/recipes/${recipe.id}`} state={recipe}>
                        {recipe.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default RecipeList;
