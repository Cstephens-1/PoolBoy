import { useEffect, useState } from "react"
import styled from "styled-components"
import ReviewCard from "./ReviewCard"

function Reviews(){
    const [reviews, setReviews] = useState([])
    const [nameForCleaner, setNameForCleaner] = useState("")

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


        function getAllReviews(){
            fetch("http://localhost:9292/reviews")
        .then(resp=> resp.json())
        .then(review => {
            setReviews(review)})
        }
    // // post a new review to the backend
    function addNewRev(review){
        fetch("http://localhost:9292/reviews", {
            method: 'POST',
            body: JSON.stringify(review),
            headers,
        })
        .then(resp=>resp.json())
        .then(newReview=> getAllReviews())
    }
   
    function handleCreate(synthRev){
        synthRev.preventDefault()
        const newRev = {
            rating: synthRev.target[0].value,
            comment: synthRev.target[1].value,
            // owner_id: "",
            // pool_id: "",
            cleaner_id: synthRev.target[2].value,
        }
        addNewRev(newRev)
        synthRev.target[0].value = ""
        synthRev.target[1].value = ""
        // if (synthRev.target[2].value !== null){

        //     synthRev.target[2].value = ""
        // }

        

    }

    function DeleteReview(review){
          fetch(`http://localhost:9292/reviews/${review.id}`, {
              method: "DELETE",
            })
            let reviewsRemaining = reviews.filter(eachReview=> eachReview.id !== review.id);
            setReviews([...reviewsRemaining])
        }

    function handleChange(synthEvent){
        console.log(synthEvent.target.value)
        if (synthEvent.target.value === "Sam" || synthEvent.target.value === "Joe" ){
        }
        setNameForCleaner(synthEvent.target.value)
        
    }
    
    //questions for Sam:
// // how to pull cleaner name from his id
//how to work git remote so we can both work at the same time

//reach goals:
//review card looks like 

    return (
        <>
        <H1>Reviews from our customers </H1>
        <FormStyler>
            <form onSubmit={handleCreate}>
                <H1>Leave us a review!</H1>
                <Label>Rating:</Label>
                <Input placeholder="Rating" name="rating" type="text"></Input>
                <br/>
                <Label>Comment:</Label>
                <Input placeholder="Comment"></Input>
                <br />
                <Label>
                    Cleaner: <Input placeholder="Cleaner" value = {nameForCleaner} onChange={handleChange} />
                </Label>
                
            
                <Button  type="submit">Leave a review</Button>
            </form> 

            
        </FormStyler>

        {reviews.map(each_rev=>{
            return(
                <CardStyler>
                    <ReviewCard map_rev={each_rev} handleDelete={DeleteReview} />
                </CardStyler>
            )
        })} 
        </>
    )
}

export default Reviews

const CardStyler = styled.div`
    background-color: #2d7487;
    border-style: solid;
    width: 400px;
    margin-top: 50px;
    list-style-type:none;
    margin: auto;
    margin-bottom: 30px;
    border-radius: 8px;
`
const FormStyler=styled.div`
    border-style: solid;
    border-radius: 8px;
    width: 500px;
    text-align: center;
    margin: auto;
    height: 300px;
    margin-bottom: 50px;
`

const Label = styled.label`
    font-size: 30px;
    color: #046489;
    font-weight: 700;
`

const Input=styled.input`
    font-size: 20px;
    margin-left: 10px;
`

const Button = styled.button`
    font-size: 20px;
    border-radius: 8px;
    background-color: lightgrey;
    margin: 10px;
    padding: 12px;
    margin-top: 18px;
    `

    const H1 = styled.h1`
        color: #046489
;

    
    `