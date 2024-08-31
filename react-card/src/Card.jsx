import profilePic from './assets/profile.png'


function Card(){

    return(
        <div className="card">
            <img className='image' src={profilePic} alt="Image not found" />
            <h2>Suhail</h2>
            <p>I make Websites and play games</p>
        </div>
    );
}



export default Card