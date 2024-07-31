import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center gap-10 mx-16 h-[90vh] ">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-2xl md:text-5xl font-semibold">
                        Find Out Best
                        <span className="text-yellow-500 font-bold">
                            Online Courses
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        We have a large library of course taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>
                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-3 py-2 md:px-5 md:py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600
                             transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-yellow-500 px-3 py-2  md:px-5 md:py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600
                             transition-all ease-in-out duration-300">
                               Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                        <img className="w-[80%]" src="https://tse3.mm.bing.net/th?id=OIP.2-mpFf2qSqQP20dYa7SzXgHaEK&pid=Api&P=0&h=180" alt="homepage image" />
                </div>
            </div>
        </HomeLayout>
    )
}
export default HomePage;