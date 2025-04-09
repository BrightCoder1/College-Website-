import { useEffect, useState } from "react"

const PlacementC = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("/placement.json");
                const res = await data.json();
                // console.log(res.placement);
                setImages(res.placement);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <div className="company">
                <ul className="company-ul">
                    {images.map((img) => (
                        <img key={img.id} src={img.url} alt="" className="company-img" />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PlacementC
