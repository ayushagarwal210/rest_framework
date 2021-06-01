import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [student, setStudent] = useState({
    fname: '',
    age: '',
    father_name: '',
  })

  const url = 'http://127.0.0.1:8000/'

  // useEffect(() => {
  //   getStudent()
  //   // postStudent()
  // })

  // const getStudent = () => {
  //   axios
  //     .get(`${url}student`)
  //     .then((response) => {
  //       const allStudent = response.data.payload
  //       setStudent(allStudent)
  //     })
  //     .catch((error) => console.error(`Error: ${error}`))
  // }

  const postStudent = (event) => {
    // event.preventDefault()
    const post = {
      name: student.fname,
      age: student.age,
      father_name: student.father_name,
    }
    axios
      .post(`${url}student`, post)
      .then((response) => setStudent(response.data.payload))
      .catch((error) => console.log(error))

    // setStudent(() => {
    //   return {
    //     fname: '',
    //     age: '',
    //     father_name: '',
    //   }
    // })
  }

  const inputHandler = (event) => {
    const value = event.target.value
    const input = event.target.name
    console.log(value, input)

    setStudent((prev) => {
      if (input === 'fname') {
        return {
          ...student,
          fname: value,
          // age: prev.age,
          // father_name: prev.father_name,
        }
      } else if (input === 'age') {
        return {
          ...student,
          age: value,
          // age: prev.age,
          // father_name: prev.father_name,
        }
      } else if (input === 'father_name') {
        return {
          ...student,
          father_name: value,
          // age: prev.age,
          // father_name: prev.father_name,
        }
      }
    })
  }

  // if (student.length > 0) {
  return (
    <div className="App">
      <div className="App-header">
        <form onSubmit={postStudent}>
          <input
            type="text"
            placeholder="name"
            name="fname"
            onChange={inputHandler}
            value={student.fname}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            onChange={inputHandler}
            value={student.age}
          />
          <input
            type="text"
            placeholder="father name"
            name="father_name"
            onChange={inputHandler}
            value={student.father_name}
          />
          <button>Submit</button>
        </form>
        {/* {student.map((stu) => {
            return (
              <div key={stu.id}>
                <h1>{stu.name}</h1>
                <h2>{stu.age} </h2>
                <h3>{stu.father_name}</h3>
              </div>
            )
          })} */}
      </div>
    </div>
  )
  // } else {
  //   return <h3>Loading...</h3>
  // }
}

export default App
