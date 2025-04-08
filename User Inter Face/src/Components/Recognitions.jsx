import React, { useEffect, useState } from 'react';

const Recognitions = () => {
    const [images, setImages] = useState([]);
    const url = "/Recognitions.json";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(url);
                const res = await data.json();
                setImages(res.images)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);


    return (
        <div className="recognitions">
            <div className="recognitions-scroll">
                {images.length > 0 ? (
                    images.map((image) => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt={`recognition-${image.id}`}
                            className="recognitions-img"
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Recognitions;
