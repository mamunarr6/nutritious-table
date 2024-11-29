import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
// import WantToCook from "../WantToCook/WantToCook";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCookRecipes, setWantToCookRecipes] = useState([]);

    useEffect(() => {
        fetch('./nutritious-table.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    const handleWantToCook = (recipe) => {
        const newWantToCookRecipes = [...wantToCookRecipes, recipe];
        setWantToCookRecipes(newWantToCookRecipes)
    }
    // console.log(wantToCookRecipes);

    return (
        <div className="container mx-auto">
            <h2 className="lexend text-center text-4xl font-semibold">Our Recipes</h2>
            <p className="lexend text-center text-base font-normal px-[15%] my-3">Discover a world of nutritious and delicious recipes crafted with fresh ingredients. From quick meals to hearty dinners and healthy treats, we&apos;ve got something for everyone. Make cooking easy, enjoyable, and full of flavor!</p>
            <div className="md:grid grid-cols-3 gap-5 flex flex-col-reverse">
                <div className="col-span-2 grid grid-cols-2 gap-5">
                    {
                        recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
                    }
                </div>
                <div className="col-span-1 border border-gray-300 rounded-lg my-5">
                    <h2>Want To Cook : {wantToCookRecipes.length}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wantToCookRecipes.map((wantToCookRecipe, idx) => <tr key={idx}>
                                    <td>{wantToCookRecipe.recipe_name}</td>
                                    <td>{wantToCookRecipe.preparing_time}</td>
                                    <td>{wantToCookRecipe.calories}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recipes;