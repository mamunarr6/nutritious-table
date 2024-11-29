
import PropTypes from 'prop-types';

const WantToCook = ({ wantToCookRecipe }) => {
    const { recipe_name, preparing_time, calories } = wantToCookRecipe;
    // console.log(wantToCookRecipe);
    return (
        <tr>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            {/* wantToCookRecipe={wantToCookRecipe} */}
        </tr>
    );
};

WantToCook.propTypes = {
    wantToCookRecipe: PropTypes.object
};

export default WantToCook;