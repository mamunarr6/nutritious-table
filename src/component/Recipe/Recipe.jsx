import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types'

const Recipe = ({ recipe, handleWantToCook }) => {
    let { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories, recipe_id } = recipe;

    return (
        <div className='col-span-1 space-y-4 px-7 py-5 border border-gray-300 rounded-lg flex flex-col'>
            <div className='flex justify-center items-center'>
                <img className='w-60 rounded-lg' src={recipe_image} alt="" />
            </div>
            <h2 className='lexend text-xl font-semibold text-center'>{recipe_name}</h2>
            <p className='fira-sans text-base font-normal text-[#878787]'>{short_description}</p>
            <hr />
            <h2 className='lexend text-lg font-semibold'>Ingredients: {ingredients.length}</h2>

            <div className="flex-grow">
                <ul className='fira-sans text-[#878787] grid grid-cols-2 text-base'>
                    {ingredients.map((element, idx) => <li key={idx} className="list-disc">{element}</li>
                    )}
                </ul>
            </div>
            <hr />
            <div className="fira-sans text-base text-[#282828CC] flex items-center gap-5">
                <p className="flex items-center gap-1 justify-center"><IoMdTime className="text-xl" /> {preparing_time}</p>
                <p className="flex items-center gap-1 justify-center"><AiOutlineFire className="text-xl" /> {calories}</p>
            </div>
            <button onClick={() => handleWantToCook(recipe, recipe_id)} className="bg-green-600 text-white px-4 py-2 rounded-full lexend text-lg font-medium border-2 border-green-600 hover:bg-transparent hover:text-green-600 transition-all">Want to Cook</button>
        </div>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWantToCook: PropTypes.func
}

export default Recipe