import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipe from "../Recipe/Recipe";
// import WantToCook from "../WantToCook/WantToCook";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCookRecipes, setWantToCookRecipes] = useState([]);
    const [currentlyCook, setCurrentlyCook] = useState([]);
    const [totalTimes, setTotalTimes] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        fetch('./nutritious-table.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handleWantToCook = (recipe, id) => {
        const sameRecipeId = wantToCookRecipes.find(rp => rp.recipe_id === id);
        if (sameRecipeId) {
            toast('Already exists')
        } else {
            const newWantToCookRecipes = [...wantToCookRecipes, recipe];
            setWantToCookRecipes(newWantToCookRecipes)
        }


    }
    const handleCurrentlyCook = (wantToCookRecipe, id, preparingTime, calories) => {
        const newCurrentlyCook = [...currentlyCook, wantToCookRecipe];
        setCurrentlyCook(newCurrentlyCook);

        const remainigWantToCookRecipes = wantToCookRecipes.filter(wantToCookRecipe => wantToCookRecipe.recipe_id !== id)
        setWantToCookRecipes(remainigWantToCookRecipes)

        const newTotalTimes = totalTimes + parseInt(preparingTime);
        setTotalTimes(newTotalTimes);

        const newTotalCalories = totalCalories + parseInt(calories);
        setTotalCalories(newTotalCalories);
        console.log(typeof preparingTime);
    }

    return (
        <div className="container mx-auto">
            <h2 className="lexend text-center text-4xl font-semibold">Our Recipes</h2>
            <p className="lexend text-center text-base font-normal px-[15%] my-3">Discover a world of nutritious and delicious recipes crafted with fresh ingredients. From quick meals to hearty dinners and healthy treats, we&apos;ve got something for everyone. Make cooking easy, enjoyable, and full of flavor!</p>
            <div className="md:grid grid-cols-3 gap-5 flex flex-col-reverse my-5">
                {/* All recipes are here */}
                <div className="col-span-2 grid grid-cols-2 gap-5">
                    {
                        recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
                    }
                </div>
                {/* Recipes sidebar */}
                <div className="col-span-1 border border-gray-300 rounded-lg py-5">
                    {/* Want To Cook Section */}
                    <h2 className="lexend text-2xl font-semibold text-center">Want To Cook: {wantToCookRecipes.length}</h2>
                    <hr className="my-4 mx-5" />
                    <ToastContainer></ToastContainer>
                    <table className="w-full px-5">
                        <thead>
                            <tr className="fira-sans text-[#878787] text-left">
                                <th className="font-medium py-2 pl-3">No.</th>
                                <th className="font-medium py-2 px-3">Name</th>
                                <th className="font-medium py-2 px-3">Time</th>
                                <th className="font-medium py-2 px-3">Calories</th>
                                <th className="font-medium py-2 px-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wantToCookRecipes.map((wantToCookRecipe, idx) => <tr key={idx} className="fira-sans text-[#878787] text-base bg-gray-50">
                                    <td className="font-normal py-2 pl-3">{idx + 1}</td>
                                    <td className="font-normal py-2 px-3">{wantToCookRecipe.recipe_name}</td>
                                    <td className="font-normal py-2 px-3">{wantToCookRecipe.preparing_time}</td>
                                    <td className="font-normal py-2 px-3">{wantToCookRecipe.calories}</td>
                                    <td className="font-normal py-2 px-3"><button onClick={() => handleCurrentlyCook(wantToCookRecipe, wantToCookRecipe.recipe_id, wantToCookRecipe.preparing_time, wantToCookRecipe.calories)} className="bg-green-500 text-white px-3 py-1 rounded-full">Preparing</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    {/* Currently Cooking section */}
                    <h2 className="lexend text-2xl font-semibold text-center mt-3">Currently Cook: {currentlyCook.length}</h2>
                    <hr className="my-4 mx-5" />
                    <div>
                        <table className="w-full">
                            <thead>
                                <tr className="fira-sans text-[#878787] text-left">
                                    <th className="font-medium py-2 pl-3">No.</th>
                                    <th className="font-medium py-2 px-3">Name</th>
                                    <th className="font-medium py-2 px-3">Time</th>
                                    <th className="font-medium py-2 px-3">Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentlyCook.map((cook, idx) => <tr key={idx} className="fira-sans text-[#878787] text-base bg-gray-50">
                                        <td className="font-normal py-2 pl-3">{idx + 1}</td>
                                        <td className="font-normal py-2 px-3">{cook.recipe_name}</td>
                                        <td className="font-normal py-2 px-3">{cook.preparing_time}</td>
                                        <td className="font-normal py-2 px-3">{cook.calories}</td>

                                    </tr>)
                                }
                                <tr className="lexend">
                                    <td></td>
                                    <td></td>
                                    <td className="font-medium py-3">Total T. = <br />{totalTimes} minutes</td>
                                    <td className="font-medium py-3">Total Cal = <br />{totalCalories} calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;