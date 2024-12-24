import { customer1, customer2 } from "../assets/images"
import ReviewCard from "../components/ReviewCard"


const CustomerReviews = () => {

  const reviews = [{
    imgURL:customer1,
    customerName:"Jack",
    rating:"4.2",
    feedback:"The honey is absolutely delicious! It tastes so fresh and natural, and I love that it is locally sourced.",
  },
  {
    imgURL:customer2,
    customerName:"Ellisa",
    rating:"4.5",
    feedback:"This is the best honey I have ever tasted! Perfect texture and sweetness—great for my morning tea.",
  }]

  return (
    <section className='max-container'>
      <h3 className='font-mono text-4xl font-bold text-center'>What Our <span className='text-yellow-500'>Customers </span>Say?</h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional experience with us...</p>
      <div className='flex flex-1 flex-row max-md:flex-col justify-evenly items-center mt-14 max-md:mt-5'>
        {reviews.map((review) => (
          <ReviewCard key={review.feedback}
          imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews