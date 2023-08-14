import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./Recipes.css";

function Recipes(props) {
    const [recipes, setRecipes] = useState("");
    const fetchRecipes = () => {
        const APIkey = process.env.REACT_APP_RAPID_API_KEY;
        const APIHost = process.env.REACT_APP_RAPID_API_HOST;
        const url =
            "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
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
                    console.log(jsonData);
                    setRecipes(jsonData.results);
                });
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(fetchRecipes, []);
    if (!recipes) {
        return <div className="message">Loading recipes...</div>;
    }
    return (
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <RecipeCard
                    key={recipe.id}
                    favoriteRecipes={props.favoriteRecipes}
                    recipe={recipe}
                    deleteFromFavoriteRecipes={props.deleteFromFavoriteRecipes}
                    addToFavoriteRecipes={props.addToFavoriteRecipes}
                />
            ))}
        </div>
    );
}
export default Recipes;
