export const Carousel = () => {
    return(
        <div className='container mt-5' style={{height: 550}}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 d-none d-lg-block' data-bs-interval='false'>
            </div>
        </div>
    )
}