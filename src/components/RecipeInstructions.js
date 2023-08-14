const RecipeInstructions = (props) => {
    return (
        <div className="recipe-instructions-container">
            <h1 className="title">Instructions</h1>
            <ol>
                {props.recipe.instructions.map((instruction) => (
                    <li className="text" key={instruction.id}>
                        {instruction.display_text}
                    </li>
                ))}
            </ol>
        </div>
    );
};
export default RecipeInstructions;
