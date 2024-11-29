import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./nutritious-table.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    console.log(recipes);
    return (
        <div className="container mx-auto">
            <h2 className="lexend text-center text-4xl font-semibold">Our Recipes</h2>
            <p className="lexend text-center text-base font-normal px-[15%] my-3">Discover a world of nutritious and delicious recipes crafted with fresh ingredients. From quick meals to hearty dinners and healthy treats, we&apos;ve got something for everyone. Make cooking easy, enjoyable, and full of flavor!</p>
            <div className="grid grid-cols-3">
                <div className="col-span-2 grid grid-cols-2 gap-5">
                    {
                        recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
                    }
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Recipes;