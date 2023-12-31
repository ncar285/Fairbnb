import './Reviews.css'
import { AiFillStar } from "react-icons/ai"
import { getListingRevews } from '../../store/reviewsReducer';
import ReviewItem from './ReviewItem';
import { useSelector } from 'react-redux';
import { getUserReview } from '../../store/reviewsReducer';
import { getCurrentUser } from '../../store/sessionsReducer';

const Reviews = (  {count, rating, findAverageScore} ) => {

    const currentUser = useSelector(getCurrentUser)
    // const userReview = useSelector(getUserReview)
    const reviews = useSelector(getListingRevews)
    
    let cleanliness = findAverageScore(reviews, "cleanliness")
    let communication = findAverageScore(reviews, "communication")
    let checkIn = findAverageScore(reviews, "checkIn")
    let accuracy = findAverageScore(reviews, "accuracy")
    let location = findAverageScore(reviews, "location")
    let value = findAverageScore(reviews, "value")

    const reviewsList = () => {
        if (reviews && currentUser) {
            return reviews
            .sort((a, b) => (a.authorId === currentUser.id ? -1 : b.authorId === currentUser.id ? 1 : 0))
            .map((review) => <ReviewItem key={review.id} review={review} />);
        } else if (reviews) {
            return reviews
            .map((review) => <ReviewItem key={review.id} review={review} />);
        }
    }

    const scoreWidth = (subScore) => {
        if (subScore === NaN){
            return {};
        } else {
            return {width: `${(subScore / 5) * 100}%`};
        }
    }

    return (
    <>
        <div className='review-stats-block'>
            <div>
                <div className='stars'>
                    <AiFillStar/>
                    <p className='rating-number'>{rating}</p>
                    <p className='review-dot'>{'\u2B24' } </p>
                    <p className='count'>{count} Reviews</p>
                </div>
                <div className='review-categories'>
                    <div className='left-scores'>
                        <div className='cleanliness'>
                            <p>Cleanliness</p>
                            <div className='stat-bar'>
                                <div className='outer cleanliness-score'>
                                    <div style={scoreWidth(cleanliness)} className='inner cleanliness-score'></div>
                                </div>
                                <p>{cleanliness}</p>
                            </div>
                        </div>
                        <div className='communication'>
                            <p>Communication</p>
                            <div className='stat-bar'>
                                <div className='outer communication-score'>
                                    <div style={scoreWidth(communication)} className='inner communication-score'></div>
                                </div>
                                <p>{communication}</p>
                            </div>
                        </div>
                        <div className='check-in'>
                            <p>Check-in</p>
                            <div className='stat-bar'>
                                <div className='outer check-in-score'>
                                    <div style={scoreWidth(checkIn)} className='inner check-in-score'></div>
                                </div>
                                <p>{checkIn}</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-scores'>
                        <div className='accuracy'>
                            <p>Accuracy</p>
                            <div className='stat-bar'>
                                <div className='outer accuracy-score'>
                                    <div style={scoreWidth(accuracy)} className='inner accuracy-score'></div>
                                </div>
                                <p>{accuracy}</p>
                            </div>
                        </div>
                        <div className='location'>
                            <p>Location</p>
                            <div className='stat-bar'>
                                <div className='outer location-score'>
                                    <div style={scoreWidth(location)} className='inner location-score'></div>
                                </div>
                                <p>{location}</p>
                            </div>
                        </div>
                        <div className='value'>
                            <p>location</p>
                            <div className='stat-bar'>
                                <div className='outer value-score'>
                                    <div style={scoreWidth(value)} className='inner value-score'></div>
                                </div>
                                <p>{value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div className='reviews-list-container'>
            {reviewsList()}
        </div>

    </>
    )
}

export default Reviews