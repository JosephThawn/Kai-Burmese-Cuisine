import React, { useState, useEffect} from "react";
import { useSpring, animated } from 'react-spring';

const Menu = ({ items }) => {
  const [toggle, setToggle] = useState(false);
  // const { id, title, img, desc, price } = items;


  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: { duration: 500 }
});

useEffect(() => {
    setToggle(true);
}, []);



  return (
    <animated.div className="section-center" style={animatedStyle}>
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              {/* why is {desc} with curly bracker  jsx sytax*/}
            </div>
          </article>
        );
      })}
    </animated.div>
  );
};

export default Menu