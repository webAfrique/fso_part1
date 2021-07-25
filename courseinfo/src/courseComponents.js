import React from 'react';

const Header = ({courseName}) => {
    return (
      <h2>{courseName}</h2>
    )
  }
  
  const Part = ({ partName, exercises }) => {
    return(
      <p>
        {partName}  {exercises}
     </p>
    )  
  }
  
  const Content = ({parts}) => {
    
    return (
     <>
       {parts.map((part) => {
          return <Part key={part.id} partName={part.name} exercises={part.exercises}/>
       })}
    </>
    )
  }
  
  const Total = ({parts}) => {
    const totalExercises = parts.map((part) => part.exercises).reduce((sum, currentValue) => sum + currentValue);
    return (
      <h3>Total of {totalExercises} exercises</h3>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header courseName={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
  }
  
export default Course;  