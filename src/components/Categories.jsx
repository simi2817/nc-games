import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/api";
import CategoryCard from "./CategoryCard";
import loadingCircle from '../loading-circle.gif';


const Categories = ({ setCategory }) => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories()
        .then((categoriesFromApi) => {
            setCategories(categoriesFromApi);
            setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert("something went wrong! please try again...");
          setLoading(false);
        });
    },[categories]);

    if(loading) {
        return (
          <div>
            <img src={loadingCircle} alt="page is loading" width="100px"></img>
          </div>
        )
      }

  return (
    <div>
        {categories.map((category) => {
            return <CategoryCard key={category.slug} category={category} setCategory={setCategory}/>
        })}
    </div>
  )
}

export default Categories;