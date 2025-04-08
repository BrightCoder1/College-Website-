import React from 'react'
import girl from "C:/Users/vs035/OneDrive/Desktop/Vivek University Bijnor/Frontend/public/Images/girlpng.png";
import UniversityStatus from '../Components/UniversityStatus';
import History from '../Components/History';
import StudentLife from '../Components/StudentLife';
import Recognitions from '../Components/Recognitions';
// import Login from '../Components/Login';
import Leaders from '../Components/Leaders';


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-info">
                    <h3 className="h-heading">
                        Best College in this Town
                    </h3>
                    <h1 className="h2-heading">
                        Welcome To <span className="h2-span"> Vivek University Bijnor</span>
                    </h1>
                    <p className="home-p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ducimus exercitationem, dolorem quas accusantium et corporis iste delectus itaque minus sint, possimus voluptas sit eaque corrupti laudantium architecto placeat facere.
                    </p>
                </div>
                <img src={girl} alt="Image 1" className="homeImg" />

            </div>
            <UniversityStatus />
            <History />
            <StudentLife />
            <Recognitions />
            {/* <Login /> */}
            <Leaders />
        </>
    )
}

export default Home
