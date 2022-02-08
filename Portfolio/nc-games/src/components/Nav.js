import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <nav className="Nav">
      {categories.map((category) => {
        console.log(category);
        return (
          <Link key={category.slug} to={`/categories/${category.slug}`}>
            {category.slug.replaceAll("-", " ")}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
