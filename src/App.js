import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import FavoriteRecipes from "./components/FavoriteRecipes";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";

function App() {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const addToFavoriteRecipes = (recipe) => {
        setFavoriteRecipes((prevFavoriteRecipes) => {
            const newFavoriteRecipes = [...prevFavoriteRecipes, recipe];
            return newFavoriteRecipes;
        });
    };

    const deleteFromFavoriteRecipes = (recipeId) => {
        const index = favoriteRecipes.findIndex(
            (favoriteRecipe) => favoriteRecipe.id === recipeId
        );
        const newFavoriteRecipes = [...favoriteRecipes];
        newFavoriteRecipes.splice(index, 1);
        setFavoriteRecipes(newFavoriteRecipes);
    };

    return (
        <div className="recipe-app">
            <NavBar className="nav-bar" favoriteRecipes={favoriteRecipes} />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/recipes"
                        element={
                            <Recipes
                                favoriteRecipes={favoriteRecipes}
                                addToFavoriteRecipes={addToFavoriteRecipes}
                                deleteFromFavoriteRecipes={
                                    deleteFromFavoriteRecipes
                                }
                            />
                        }
                    />
                    <Route
                        path="/recipes/:recipeId"
                        element={
                            <RecipeDetails
                                addToFavoriteRecipes={addToFavoriteRecipes}
                                deleteFromFavoriteRecipes={
                                    deleteFromFavoriteRecipes
                                }
                                favoriteRecipes={favoriteRecipes}
                            />
                        }
                    />

                    <Route
                        path="/favorites"
                        element={
                            <FavoriteRecipes
                                favoriteRecipes={favoriteRecipes}
                                deleteFromFavoriteRecipes={
                                    deleteFromFavoriteRecipes
                                }
                                addToFavoriteRecipes={addToFavoriteRecipes}
                            />
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <p className="message">
                                Uh oh, that page doesn't exist
                            </p>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
