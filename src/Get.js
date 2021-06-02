import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Get = () => {
  const [student, setStudent] = useState({
    fname: '',
    age: '',
    father_name: '',
  })
  const url = 'http://127.0.0.1:8000/'

  useEffect(() => {
    getStudent()
  }, [student])

  const getStudent = () => {
    axios
      .get(`${url}student`)
      .then((response) => {
        const allStudent = response.data.payload
        setStudent(allStudent)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const deleteStudent = (event) => {
    event.preventDefault()
    let value = event.target[0].value
    axios
      .delete(`${url}student?id=${value}`)
      .then((response) => console.log(response))
      .catch((e) => console.log(e))
  }

  if (student.length > 0) {
    return (
      <>
        <Link to="/post">Add new student</Link>

        {student.map((stu) => {
          return (
            <div key={stu.id}>
              <h1>{stu.name}</h1>
              <h2>{stu.age} </h2>
              <h3>{stu.father_name}</h3>
              <form onSubmit={deleteStudent}>
                <input type="hidden" value={stu.id} />
                <button type="submit">Delete</button>
                <Link to="/edit">Edit</Link>
              </form>
            </div>
          )
        })}
      </>
    )
  } else {
    return <h3>Loading...</h3>
  }
}

export default Get
