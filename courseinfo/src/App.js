import React from 'react'
import Course from './courseComponents';


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div className="course-info">
      <h1>Web Development Curriculum</h1>
      {courses.map((course, index) => {
        return <Course key={index} course={course}></Course>
      })}
    </div>
  )
}
/*function App() {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
    
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 
   

  return (
   <>
    <Header courseName={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
   </>
  );
}*/

export default App;
