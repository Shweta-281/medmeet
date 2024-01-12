/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState("")

    const handleSubmitReview = async e => {
        e.preventDefault();
    }

    return (<form action=''>
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>How would you rate the overall experience?*</h3>

            <div>
                {[...Array(5).keys()].map((_, index) => {
                    const starValue = index + 1;

                    return (
                        <button
                            key={starValue}
                            type='button'
                            className={`${(starValue <= (rating && hover)) ? 'text-yellowColor' : 'text-gray-400'
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                            onDoubleClick={() => {
                                setHover(0);
                                setRating(0);
                            }}
                        >
                            <span>
                                <AiFillStar />
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>


        <div className='mt-[30px]'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>Share your feedback or suggestions*</h3>

            <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md' row="5" placeholder='Write your message' onChange={() => setReviewText(e.target.value)}> Write your </textarea>
        </div>

        <button type='submit' onClick={handleSubmitReview} className='btn'>Submit Feedback</button>
    </form>)
}

export default FeedbackForm;