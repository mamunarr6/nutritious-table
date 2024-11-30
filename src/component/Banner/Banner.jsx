import './Banner.css';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="banner my-7 lexend">
                <h2 className='lg:text-5xl font-bold'>Nutritious Recipes for a Healthier You!</h2>
                <p className='md:text-center '>Fuel your body with delicious and wholesome meals. Explore our collection of quick, easy,<br /> and nutrient-packed recipes crafted to nourish your lifestyle.</p>
                <div className='flex gap-5 text-white'>
                    <button className='bg-green-600 px-4 py-2 rounded-full border-2 border-green-600 hover:bg-transparent transition-all'>Explore Now</button>
                    <button className='border-2 border-green-600 px-4 py-2 rounded-full hover:bg-green-600 transition-all'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;