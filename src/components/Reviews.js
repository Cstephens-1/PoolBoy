import { useEffect, useState } from "react"
import styled from "styled-components"
import ReviewCard from "./ReviewCard"

function Reviews(){
    // reviews
    // addNewRev
    // { handleDelete}
    // console.log(reviews)
    const [reviews, setReviews] = useState([])

      //post headers
  const headers = {
    Accepts: "application/json",
    "Content-Type": "application/json",
}     


    //render the reviews
  useEffect(()=>{
    fetch("http://localhost:9292/reviews")
    .then(resp=> resp.json())
    .then(review => {
        setReviews(review)})
    },  []);

    // // post a new review to the backend
  function addNewRev(review){
    console.log("This is a review", review)
    fetch("http://localhost:9292/reviews", {
        method: 'POST',
        body: JSON.stringify(review),
        headers,
    })
    .then(resp=>resp.json())
    
    .then((newReview)=> {
        // debugger
        setReviews([...reviews, newReview])}
        )
}
   
     
    function handleCreate(synthRev){
        synthRev.preventDefault()
        console.log("this log is in handlecreate", synthRev)

        // console.log(e.target[2].value)
        const newRev = {
            rating: synthRev.target[0].value,
            comment: synthRev.target[1].value,
            // owner_id: "",
            // pool_id: "",
            // cleaner: e.target[2].value,
        }
        addNewRev(newRev)
    }

    function DeleteReview(review){
          console.log("this log is in delete method in app", review)
          fetch(`http://localhost:9292/reviews/${review.id}`, {
              method: "DELETE",
            })
              // .then((r) => r.json())
              // .then((deletedReview) => {
                // console.log("the review that was deleted", deletedReview);
                let reviewsRemaining = reviews.filter(eachReview=> eachReview.id !== review.id);
                setReviews([...reviewsRemaining])
          // })
        }

    // function handleDeleteRev(reviewToDelete){
    //     console.log("this log is from Reviews.js", reviewToDelete)
    //     handleDelete(reviewToDelete)


    // }
    
    //questions for Sam:
// // how to pull cleaner name from his id
// // how to put the submit values into a form to make a new comment
//how to work git remote so we can both work at the same time

    return (
        <>
        <h1>Reviews!</h1>
        <form onSubmit={handleCreate}>
            <label>Rating:</label>
            <input placeholder="Rating" name="rating" type="text"></input>
            <br/>
            <label>Comment:</label>
            <input placeholder="Comment"></input>
            <br />
            {/* <label>Cleaner:</label>
            <input placeholder="cleaner" name="cleaner" type="text"></input> */}

        <button  type="submit">Leave a review</button>
        </form> 
        {reviews.map(each_rev=>{
            return(
                <CardStyler>
                    <ReviewCard map_rev={each_rev} handleDelete={DeleteReview} />
                    {/* deleteSubmit={handleDeleteRev} */}
                    </CardStyler>
            )
        })} 
        </>
    )
}

export default Reviews

const CardStyler = styled.div`
    background-color: grey;
    border-style: solid;
    width: 200px;
    margin-left: 45%;
    margin-top: 10px;
    list-style-type:none

`