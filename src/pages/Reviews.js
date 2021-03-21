import Header from '../components/header';
import Review from '../components/Review';
import AddReview from '../components/addReview';

function Reviews() {
    return (
        <div>
            <Header />
            <Review name="Suresh (Verified)" text="I am a senior Citizen. I am staying in Sanjaynagar for the past 25 years. I often visit Dr. Vani's skin clinic for my skin treatment. She is very nice doctor. She listens to patients very patiently. Easy accessible. Throughly check up and quickly diagnose* *** ********* **** ********. I wish her all the best in her profession.

H. N. Suresh Moorthy." />
            <Review name="Swati Juvekar (Verified)" text="Doctor needs to be on time as I waited 1hr and the receptionist kept saying 2 mins. Mine was the first appointment at 6 pm and doctor came at 7 pm" />
            <AddReview />
        </div>
    );
}

export default Reviews;
