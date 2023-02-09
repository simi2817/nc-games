

import { useState } from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {

  const [clickCategory, setClickCategory] = useState(false);

  return (
    <div className="CategoryCard">
        <h3><u>{category.slug}</u></h3>
        <p><i>{category.description}</i></p>
        <Link to={`/reviews?category=${category.slug}`}>
        <button onClick={() => setClickCategory(true)}>Explore!</button>
        </Link>
        {clickCategory ? 
        (<Reviews/>) : null}
    </div>
  )
}

export default CategoryCard;