import mainImage from "./studio_web.jpg";

const Home = () => {
    return (
        <div className="row mt-10">
            <div className="row col-12 mb-2">
                <h1>Welcome to the wonderful world of music studios</h1>
            </div>  
            <div className="row col-12">
                <img src={mainImage} className="main-image" alt="studio" />
            </div>
        </div>
    )
}

export default Home;