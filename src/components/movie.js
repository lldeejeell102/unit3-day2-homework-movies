const Movie = (props) => {
    return (
        <div className="movie-block">
            <h1>{props.name}</h1>
            <h2>{props.year}</h2>
            <h2>{props.rating}</h2>
            <img className="img" width={300} height={500} src={props.image}></img>
        </div>
    );
}

// export the component
export default Movie