import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">

                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                <div className="flex items-center ">
                    <div className="">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                                <img src={review.img} />
                            </div>
                        </div>
                    </div>
                    <div className=" ml-5">
                        <h2 className='font-bold'>{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;