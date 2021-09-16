function ReviewCard({map_rev, handleDelete}){

    console.log(map_rev)

    function deleteThisReview(){
        console.log("This is from the delete button in review card", map_rev)
        handleDelete(map_rev)
    }

    
    return(
        <li key={map_rev.id}>
            <h2>{map_rev.rating}</h2>
            <p>{map_rev.comment} </p>
            <button onClick={deleteThisReview}>Delete</button>
        </li>
    )
}

export default ReviewCard
