import React, { useState } from 'react';
import './Review.css'
import useAuth from './../../../hooks/useAuth/useAuth';

// review

const Review = () => {
    const { user } = useAuth();

    const [reviews, setReviews] = useState('');
    const [message, setMessage] = useState('');



    const handleMessage = e => {
        setReviews(e.target.value)
    }

    const handleRatting = e => {
        setMessage(e.target.value)
    }
    const name = user.displayName;
    const any = { reviews, message, name }


    const handleOnSubmit = e => {

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(any)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    alert('Review Successfully')
                }

            })

        e.preventDefault();
    }
    return (
        <div>
            {/* review-section */}
            <h1 className="text-center fw-bold">Review</h1>
            <form onSubmit={handleOnSubmit} className="review-form my-5">
                <input defaultValue={user?.displayName} type="text" name="" id="" /><br />
                <input onBlur={handleRatting} placeholder="Ratting" type="text" name="ratting" /><br></br>
                <textarea onBlur={handleMessage} placeholder="message" className="massage" name="message" id="" cols="30" rows="10"></textarea><br />
                <input className="review-input" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Review;