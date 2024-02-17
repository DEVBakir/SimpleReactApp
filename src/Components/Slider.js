export default function Slider() {
    return (
        <div className="Slider">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner text-white">
    <div className="carousel-item active ps-4 lh-lg ">
        <h5 className="text-uppercase">discover new</h5>  
        <h2>
            The Best 4K PC In  The World
        </h2> 
        <p>
            Our toys are astm certified for safety. We use water-based paints
        </p>  
        <button className="btn p-3 px-4 bg-light rounded-0">
                <a className="text-black fw-500" href="/#">Shop Now</a>    
        </button>          
    </div>
        <div className="carousel-item ps-4">
        <h5 className="text-uppercase">discover new</h5>  
        <h2>
            The Best 4K PC In  The World
        </h2> 
        <p>
            Our toys are astm certified for safety. We use water-based paints
         </p>  
                <button className="btn p-3 px-4 bg-light rounded-0">
                <a className="text-black fw-500" href="/#">Shop Now</a>    
        </button>                   
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            </div>
            </div>
    )
}