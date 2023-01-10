import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target="_blank" rel="noreferrer">
        {item.cta}
        <i className={item.icon}></i>
      </a>
    </div>
  );
};

export default WorkItems;
