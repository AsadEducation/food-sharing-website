import '@fontsource/poppins/400-italic.css';
import Lottie from 'lottie-react';
import bannerLottie from '../../assets/Lottie/foodLottie.json'


const Banner = () => {
    return (
        <div className='text-center space-y-4  lg:space-y-8  min-h-[60vh]' style={{ fontFamily: 'Poppins, sans-serif' }}>

            <h2 className="text-5xl font-bold">Share More, Waste Less</h2>
            <p>"Join our community-driven platform to share surplus food, <br /> fight waste, and make a difference. Together, we feed those in need while reducing food waste—one meal at a time."</p>

            <Lottie className='h-[500px]' animationData={bannerLottie} />
        </div>
    );
};

export default Banner;