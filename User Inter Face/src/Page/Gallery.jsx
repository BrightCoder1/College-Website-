import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await fetch("/Gallery.json");
                const res = await data.json();
                setImages(res.images);
                // toast.success("Data Fetch Successfully!", {
                //     "position": "top-center",
                //     "autoClose": 3000
                // })
            } catch (error) {
                toast.error("Something want wrong!", {
                    "position": "top-center",
                    "autoClose": 3000
                })
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="gallery">
            <div className="gallery-main">
                {images.map((img) => (
                    <div key={img.id} className="gallery-inner">
                        <img src={img.url} alt={img.id} className="gallery-image" />
                    </div>
                ))}
            </div>
            <ToastContainer className="index" />
        </div>
    );
};

export default Gallery;
