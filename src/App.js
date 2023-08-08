import "./App.css";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import SavedRecipes from "./SavedRecipes";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Recipes from "./Recipes";

function App() {
    const url =
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "16d08acb08msh52df6f462e82d14p15ca31jsn15ee6d78faf1",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
    };

    // try {
    //     fetch(url, options).then((res) => {
    //         if (res.status !== 200) {
    //             return;
    //         }
    //         res.json().then((jsonData) => {
    //             console.log(jsonData);
    //         });
    //     });
    // } catch (error) {
    //     console.error(error);
    // }
    return (
        <div className="recipe-app">
            <NavBar className="nav-bar" />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Recipes />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route
                        path="/recipes/:recipeId"
                        element={<RecipeDetails />}
                    />

                    <Route path="/saved" element={<SavedRecipes />} />
                    <Route
                        path="*"
                        element={<p>Uh oh, that page doesn't exist</p>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
