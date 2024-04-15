import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch("/categories.json")
        .then(ref => ref.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <p className="text-lg font-bold">All Category {categories.length}</p>
            {
                categories.map(category => <NavLink 
                    className="block py-4 ml-12"
                    key={category.id}
                    to={`category/${category.id}`}
                    >{category.name}</NavLink>)
            }


        </div>
    );
};

export default LeftSideNav;