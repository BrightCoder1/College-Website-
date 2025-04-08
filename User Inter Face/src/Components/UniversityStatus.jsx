import React from 'react'

const UniversityStatus = () => {
    return (
        <>
            <div className="why">
                <img src="https://templatekit.jegtheme.com/arizon/wp-content/uploads/sites/71/2021/04/asian-college-student-on-campus-e1617782285168.jpg" className='whyImg' alt="Image 2" />
                <div className="whyFlex">
                    <h3 className='whyFlex-h3'>why choose us</h3>
                    <h1 className="whyFlex-h1">Why Vivek University</h1>

                    <p className="whyflex-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequuntur voluptas delectus sapiente omnis quaerat doloremque aperiam exercitationem. Odit quos excepturi porro ad. Ea minus sit deleniti temporibus libero eveniet.</p>

                    <div className="whyflex-div">
                        <ul className="whyflexdiv-ul">
                            <li className='whyflexli'>
                                Graduate Programs

                            </li>
                            <li className='whyflexli'>
                                Undergraduate Programs

                            </li>
                            <li className='whyflexli'>
                                Doctoral Degrees

                            </li>

                            <div className="year-1">
                                <h1 className='Years-h1'>
                                    20
                                </h1>
                                <h4 className='year-span'>Years Of Experience
                                </h4>
                            </div>
                        </ul>
                        <ul className="whyflexdiv-ul">
                            <li className='whyflexli'>
                                International Hubs
                            </li>
                            <li className='whyflexli'>
                                Alumni & Giving

                            </li>
                            <li className='whyflexli'>
                                Global Students

                            </li>
                            <div className="year-1">
                                <h1 className='Years-h1'>
                                    25k
                                </h1>
                                <h4 className='year-span'>Global Students
                                </h4>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UniversityStatus;