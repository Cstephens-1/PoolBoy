import styled from "styled-components"

function ReviewCard({map_rev, handleDelete}){


    function deleteThisReview(){
        console.log("This is from the delete button in review card", map_rev)
        handleDelete(map_rev)
    }

    
    return(
    
        <li key={map_rev.id}>
            <>
            <H2>Rating: {map_rev.rating}</H2>
            <br></br>
            <H2>Comment: <br></br>{map_rev.comment} </H2>
            <br></br>
            <H2>Cleaner: {map_rev.cleaner_name}</H2>
            <Button onClick={deleteThisReview}>Delete</Button>
            </>
        </li>

    )
}

export default ReviewCard

const Button = styled.button`
    font-size: 20px;
    border-radius: 8px;
    background-color: lightgrey;
    margin: 25px;
    padding: 12px;
    `

const H2 = styled.h2`
    font-size: 25px;
    margin-bottom: -2%;
    margin-top: -1%;
    line-height:35px;
`

