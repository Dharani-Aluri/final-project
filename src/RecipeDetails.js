import { useLocation } from "react-router-dom";
function RecipeDetails() {
    const location = useLocation();
    const recipe = location.state;
    console.log(recipe);
    let numOfIngredients = 0;
    const calculateIngredientsLength = () => {
        recipe.sections.map((section) => {
            numOfIngredients = numOfIngredients + section.components.length;
        });
    };
    calculateIngredientsLength();
    return (
        <div className="recipe-details-container">
            <div className="recipe-info-container">
                <div>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                    <div className="nutrition-container">
                        <div>
                            <p>{numOfIngredients}</p>
                            <p>Ingredients</p>
                        </div>
                        <div>
                            <p>{recipe.num_servings}</p>
                            <p>Servings</p>
                        </div>
                        <div>
                            <p>{recipe.nutrition.calories}</p>
                            <p>Calories</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={recipe.thumbnail_url} alt={recipe.name} />
                </div>
            </div>
            <div className="recipe-ingredients-container">
                <h1>Ingredients</h1>
            </div>
            <div className="recipe-instructions-container"></div>
            <div className="recipe-save-container"></div>
        </div>
    );
}
export default RecipeDetails;
