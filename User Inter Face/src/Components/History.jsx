import historyImg from "C:/Users/vs035/OneDrive/Desktop/Vivek University Bijnor/Frontend/public/Images/image26.jpg";
const History = () => {
    return (
        <>
            <div className="history">
                <h1 className="history-heading">History of University</h1>
                <div className="history-box">
                    <p className="history-box-p">Vivek College was founded by ‘Shivika Educational Society’ in 2003 to meet the need of training and education from all areas of professional education and research. The college affiliated to MJP Rohilkhand University, Bareilly, and get recognized under section 2(f)& 12(B) of the UGC Act 1956. The college campus is located on the Moradabad Bijnor state highway with the natural greenery and surroundings of the holy river Ganges. The lush green campus with sprawling lawns and playgrounds have esthetically been planned and is designed with exquisite facilities to develop congenial environment for the students pursuing their studies and coming away from the daily hustle-bustle of city life. Along with its wealth of natural resources the campus offers an academically, socially and culturally enriching environment. We have well-equipped library, smart class rooms, auditorium, computer lab and Wi-Fi campus etc. The campus contains the fragrance of learnings and the feeling of self-discipline.</p>

                    <img src={historyImg} alt="" className="history-img" />
                </div>
            </div>
        </>
    )
}

export default History;
