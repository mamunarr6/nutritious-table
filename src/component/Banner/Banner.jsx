import './Banner.css';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="banner my-7 lexend">
                <h2 className='text-5xl font-bold'>Nutritious Recipes for a Healthier You!</h2>
                <p className='text-center text-lg'>Fuel your body with delicious and wholesome meals. Explore our collection of quick, easy,<br /> and nutrient-packed recipes crafted to nourish your lifestyle.</p>
                <div className='flex gap-5 text-white'>
                    <button className='bg-green-600 px-4 py-2 rounded-full'>Explore Now</button>
                    <button className='border-2 border-green-600 px-4 py-2 rounded-full'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;