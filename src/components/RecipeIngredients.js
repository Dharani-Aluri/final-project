const RecipeIngredients = (props) => {
    return (
        <div className="recipe-ingredients-container">
            <h1 className="title">Ingredients</h1>
            <ul>
                {props.recipe.sections.map((section) =>
                    section.components.map((component) => (
                        <li className="text" key={component.id}>
                            {component.raw_text}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
export default RecipeIngredients;
