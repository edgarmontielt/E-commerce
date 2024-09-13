import CardReview from "./card";
import FormReview from "./form";
import { ReviewsContainer, ReviewsParent, Title } from "./styled";
import moment from "moment";

const Reviews = ({ reviews }) => {
  if (!reviews) return null;

  return (
    <ReviewsParent>
      <Title>Reviews ({reviews?.length || 0})</Title>
      <FormReview />
      <ReviewsContainer>
        {reviews?.map((review, index) => {
          const date = moment(review.date).fromNow();
          return <CardReview key={index} review={review} date={date} />;
        })}
      </ReviewsContainer>
    </ReviewsParent>
  );
};

export default Reviews;
