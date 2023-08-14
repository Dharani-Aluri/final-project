const RecipeInfo = ({
    recipe,
    favoriteRecipes,
    addToFavoriteRecipes,
    deleteFromFavoriteRecipes,
}) => {
    let numOfIngredients = 0;
    const calculateIngredientsLength = () => {
        recipe.sections.map((section) => {
            numOfIngredients = numOfIngredients + section.components.length;
        });
    };
    calculateIngredientsLength();

    const addFavoriteHandler = () => {
        addToFavoriteRecipes(recipe);
    };
    const removeFavoriteHandler = () => {
        deleteFromFavoriteRecipes(recipe.id);
    };

    const filertedFavRecipes = favoriteRecipes.filter(
        (favoriteRecipe) => favoriteRecipe.id === recipe.id
    );
    const isFavRecipe = filertedFavRecipes.length ? true : false;

    return (
        <div className="recipe-info-container">
            <div className="recipe-details">
                <h1 className="title">{recipe.name}</h1>
                <p>{recipe.description}</p>
                <div className="nutrition-container">
                    <div className="nutrition-item">
                        <span className="nutrition-item-value">
                            {numOfIngredients}
                        </span>
                        <span className="nutrition-item-label">
                            Ingredients
                        </span>
                    </div>
                    <div className="nutrition-item border">
                        <span className="nutrition-item-value">
                            {recipe.num_servings}
                        </span>
                        <span className="nutrition-item-label">Servings</span>
                    </div>
                    <div className="nutrition-item">
                        <span className="nutrition-item-value">
                            {recipe.nutrition.calories}
                        </span>
                        <span className="nutrition-item-label">Calories</span>
                    </div>
                </div>
                {!isFavRecipe && (
                    <button
                        className="favorite-recipe-btn"
                        onClick={addFavoriteHandler}
                    >
                        Add To Favorites
                    </button>
                )}
                {isFavRecipe && (
                    <button
                        className="remove-recipe-btn"
                        onClick={removeFavoriteHandler}
                    >
                        Remove Favorite
                    </button>
                )}
            </div>
            <div className="recipe-details-image">
                <img
                    src={recipe.thumbnail_url}
                    alt={recipe.name}
                    className="recipe-image"
                />
            </div>
        </div>
    );
};
export default RecipeInfo;
