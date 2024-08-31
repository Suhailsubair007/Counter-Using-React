

function Button(){
   
        const imageUrl = './src/assets/profile.png'
        const buttonClick = (e) => e.target.textContent ="OUCHHH"
        const onImageClick = (e) => e.target.style.display = "none"
    
    return( <>
    <button className="button1" onClick={(e) => buttonClick(e)}>Click me</button>

    <br />
    <img onClick={(e) => {onImageClick(e)}} src={imageUrl} alt="kfjsadfj" />
    </>)

}

export default Button