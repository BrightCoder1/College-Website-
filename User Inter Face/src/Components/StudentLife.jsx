import { useEffect, useState } from "react";
import historyImg from "C:/Users/vs035/OneDrive/Desktop/Vivek University Bijnor/Frontend/public/Images/image26.jpg";

const StudentLife = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("/Gallery.json");
                const res = await data.json();
                setImages(res.images);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); 
    }, []);

    return (
        <>
            <div className="studentlife">
                <h1 className="history-heading">Students Life @Vivek University Bijnor</h1>

                <div className="studentlifeImg">
                    {images.slice(0, 10).map((img) => (
                        <img
                            key={img.id}
                            src={img.url}
                            alt={img.id}
                            className="studentlifeimgSlide"
                        />
                    ))}
                </div>
                <a href="/gallery" className="visit">View All</a>
            </div>
        </>
    );
};

export default StudentLife;
