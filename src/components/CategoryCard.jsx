

import { useState } from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {

  const [clickCategory, setClickCategory] = useState(false);

  return (
    <div className="CategoryCard">
        <p className="category-slug">{category.slug}</p>
        <p><i>{category.description}</i></p>
        <Link className="explore-category" to={`/reviews?category=${category.slug}`}>
        <button onClick={() => setClickCategory(true)}>Explore!</button>
        </Link>
        {clickCategory ? 
        (<Reviews/>) : null}
    </div>
  )
}

export default CategoryCard;