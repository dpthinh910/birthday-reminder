import React from 'react';

const List = (props) => {
  const {people} = props;
  return (
   people.map((person) => {
     const {id,name,age,image} = person
    return (
      <article key={id} classname="person">
        <img src={image} alt="loading image..."></img>
        <div>
          <h4>{name}</h4>
          <span>{age} years old</span>
        </div>
      </article>
    );}
  ));
}
export default List;