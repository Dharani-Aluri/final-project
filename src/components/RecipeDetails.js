import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./RecipeDetails.css";
import RecipeInfo from "./RecipeInfo";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

function RecipeDetails(props) {
    const [recipe, setRecipe] = useState("");
    const params = useParams();
    const fetchRecipeDetails = () => {
        const APIkey = process.env.REACT_APP_RAPID_API_KEY;
        const APIHost = process.env.REACT_APP_RAPID_API_HOST;
        const url =
            "https://tasty.p.rapidapi.com/recipes/get-more-info?id=" +
            params.recipeId;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": APIkey,
                "X-RapidAPI-Host": APIHost,
            },
        };
        try {
            fetch(url, options).then((res) => {
                if (res.status !== 200) {
                    return;
                }
                res.json().then((jsonData) => {
                    setRecipe(jsonData);
                });
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(fetchRecipeDetails, [params.recipeId]);

    if (!recipe) {
        return <div className="message">Loading recipe details...</div>;
    }
    return (
        <div className="recipe-details-container">
            <RecipeInfo
                recipe={recipe}
                favoriteRecipes={props.favoriteRecipes}
                addToFavoriteRecipes={props.addToFavoriteRecipes}
                deleteFromFavoriteRecipes={props.deleteFromFavoriteRecipes}
            />
            <div className="ruler">
                <hr />
            </div>
            <RecipeIngredients recipe={recipe} />
            <div className="ruler">
                <hr />
            </div>
            <RecipeInstructions recipe={recipe} />
        </div>
    );
}
export default RecipeDetails;
