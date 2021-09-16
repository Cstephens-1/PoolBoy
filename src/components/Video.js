import styled from "styled-components"
import "./Video.css"


function Video(){
    return(
       <div className="PoolPic">
        <video src="/videos/video.mp4" autoPlay loop muted />
        </div>
       
    )
}

export default Video

