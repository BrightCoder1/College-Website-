import React from 'react'
import LatestPlacement from '../Components/LatestPlacement'
import PlacementC from '../Components/PlcaementC'

const Placement = () => {
    return (
        <>
            <div className="placement">
                <h1 className="placement-h1">Our Placements</h1>
            </div>
            <div className="placement2">
                <div className="placement2-inner">
                    <h1 className="p2-h1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iure nemo at perspiciatis fugiat deserunt cupiditate ipsum quae, facere dolor facilis laudantium aperiam vel similique consequatur dolore veritatis odio error.</h1>
                    <p className="p2-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit officiis possimus minima accusantium eos facere facilis dolorum, laboriosam aliquid, ad et molestias earum totam. Necessitatibus ut praesentium harum earum eligendi minus qui similique rem, officia voluptatibus sit? Sapiente iste architecto quae fugiat officiis ex dolore repellat veniam repellendus assumenda eligendi repudiandae quis eveniet, eos sunt nihil consequatur? Itaque accusantium quis dolor. Ratione cumque maiores distinctio maxime aliquid tempore nisi possimus hic amet officiis soluta natus iure aut nulla, eligendi aperiam suscipit deserunt atque ipsa. Quam, quia temporibus nam iusto aliquam dolor ab sit aspernatur suscipit ducimus vel, voluptas sint!</p>
                    <p className="p2-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit officiis possimus minima accusantium eos facere facilis dolorum, laboriosam aliquid, ad et molestias earum totam. Necessitatibus ut praesentium harum earum eligendi minus qui similique rem, officia voluptatibus sit? Sapiente iste architecto quae fugiat officiis ex dolore repellat veniam repellendus assumenda eligendi repudiandae quis eveniet, eos sunt nihil consequatur? Itaque accusantium quis dolor. Ratione cumque maiores distinctio maxime aliquid tempore nisi possimus hic amet officiis soluta natus iure aut nulla, eligendi aperiam suscipit deserunt atque ipsa. Quam, quia temporibus nam iusto aliquam dolor ab sit aspernatur suscipit ducimus vel, voluptas sint!</p>
                </div>
                <img className='p2-img' src="/Images/image25.jpg" alt="" />
            </div>
            <LatestPlacement />
            <PlacementC />
        </>
    )
}

export default Placement
