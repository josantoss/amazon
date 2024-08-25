import React from "react";
// Corrected to default import
import { CategoryInfos} from "./CategoryInfo.js";
import CategoryCard from "./CatagoryCard"; 
import classes from './Catagory.module.css'

const Category = () => {
  return (
    <div>
      <section className= {classes.Category_container}>
        {CategoryInfos.map((item) => (
          <CategoryCard data={item} />
        ))}
      </section>
    </div>
  );
};

export default Category;

// import React from 'react'
// import { CategoryInfo } from "./CategoryInfo.js";
// import CatagoryCard from './CatagoryCard';
// const Category = () => {
//     return (
//       <div>
//             <section>
//           {CategoryInfo.map((item) => (
//             <CatagoryCard data={item} />
//           ))}
//         </section>
//       </div>
//     );
// }

// export default Category;
