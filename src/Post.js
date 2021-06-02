import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Post = () => {
  const [student, setStudent] = useState({
    fname: '',
    age: '',
    father_name: '',
  })
  const url = 'http://127.0.0.1:8000/'

  let history = useHistory()

  const postStudent = (event) => {
    event.preventDefault()
    const post = {
      name: student.fname,
      age: student.age,
      father_name: student.father_name,
    }
    axios
      .post(`${url}student`, post)
      .then((response) => setStudent(response.data.payload))
      .catch((error) => console.log(error))

    history.push('/')
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
        }
      } else if (input === 'age') {
        return {
          ...student,
          age: value,
        }
      } else if (input === 'father_name') {
        return {
          ...student,
          father_name: value,
        }
      }
    })
  }
  return (
    <>
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Post
