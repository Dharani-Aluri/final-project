import RecipeCard from "./RecipeCard";
import "./FavoriteRecipes.css";
function FavoriteRecipes({
    favoriteRecipes,
    addToFavoriteRecipes,
    deleteFromFavoriteRecipes,
}) {
    if (!favoriteRecipes.length) {
        return (
            <div className="no-favorites">
                <span>You do not have any favorite recipes.</span>
            </div>
        );
    }
    return (
        <div className="recipe-list">
            {favoriteRecipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    favoriteRecipes={favoriteRecipes}
                    recipe={recipe}
                    deleteFromFavoriteRecipes={deleteFromFavoriteRecipes}
                    addToFavoriteRecipes={addToFavoriteRecipes}
                />
            ))}
        </div>
    );
}
export default FavoriteRecipes;
