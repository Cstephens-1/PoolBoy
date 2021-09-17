import styled from "styled-components"

function ReviewCard({map_rev, handleDelete}){


    function deleteThisReview(){
        console.log("This is from the delete button in review card", map_rev)
        handleDelete(map_rev)
    }

    
    return(
        <li key={map_rev.id}>
            <h2>{map_rev.rating}</h2>
            <p>{map_rev.comment} </p>
            <p>{map_rev.cleaner_name}</p>
            <Button onClick={deleteThisReview}>Delete</Button>
        </li>
    )
}

export default ReviewCard

const Button = styled.button`
    font-size: px;
    border-radius: 8px;
    background-color: lightgrey;
    margin: 25px;
    padding: 12px;
    `
