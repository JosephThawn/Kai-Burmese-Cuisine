import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


const Categories = ({ categories, filterItems, activeCategory }) => {
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: { duration: 500 }
});

useEffect(() => {
    setToggle(true);
}, []);


  return (
    <animated.div className="btn-container" style={animatedStyle}>
      {categories.map((category, index, ) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </animated.div>
  );
};

export default Categories;