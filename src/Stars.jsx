import { useState } from "react"

export const Stars = ({ rating, onRate }) => {
    const [hover, setHover] = useState(0)


    const grayStar =
        "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-512.png"
    const yellowStar =
        "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/020_-_Star-1024.png"

    return (
        <div className="stars">
            {[...Array(5)].map((star, index) => {
                index++
                return (
                    <img
                        key={index}
                        src={index <= (hover || rating) ? yellowStar : grayStar}
                        className="star"
                        onClick={() => onRate(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(0)}
                    />
                )
            })}
        </div>
    )
}
