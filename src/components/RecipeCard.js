import { Link } from "react-router-dom";
import "./RecipeCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function RecipeCard({
    recipe,
    favoriteRecipes,
    addToFavoriteRecipes,
    deleteFromFavoriteRecipes,
}) {
    const removeFavorite = () => {
        deleteFromFavoriteRecipes(recipe.id);
    };

    const addFavorite = () => {
        addToFavoriteRecipes(recipe);
    };

    return (
        <div key={recipe.id} className="recipe-card">
            <img src={recipe.thumbnail_url} alt={recipe.name} />
            <div className="recipe-rating-container">
                <Link
                    to={`/recipes/${recipe.id}`}
                    state={recipe}
                    className="recipe-name"
                >
                    {recipe.name}
                </Link>
                {favoriteRecipes.filter(
                    (favoriteRecipe) => favoriteRecipe.id === recipe.id
                ).length ? (
                    <StarIcon
                        className="recipe-favorite-icon"
                        onClick={removeFavorite}
                    />
                ) : (
                    <StarBorderIcon
                        className="recipe-favorite-icon"
                        onClick={addFavorite}
                    />
                )}
            </div>
        </div>
    );
}
export default RecipeCard;
