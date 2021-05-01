import { useState } from 'react'
import FormInput from '../components/FormInput'

const inputs = [
  {
    id: 0,
    name: 'nickname',
    title: 'Nickname'
  },
  {
    id: 1,
    name: 'rank',
    title: 'Rank'
  },
  {
    id: 2,
    name: 'contestants',
    title: 'Contestants'
  },
  {
    id: 3,
    name: 'country',
    title: 'Country'
  },
  {
    id: 4,
    name: 'p1',
    title: 'P1'
  },
  {
    id: 5,
    name: 'p2',
    title: 'P2'
  },
  {
    id: 6,
    name: 'p3',
    title: 'P3'
  },
  {
    id: 7,
    name: 'p4',
    title: 'P4'
  },
  {
    id: 8,
    name: 'total',
    title: 'Total'
  },
  {
    id: 9,
    name: 'award',
    title: 'Award'
  }
]

const Results = () => {
  const [value, setValue] = useState({})

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await fetch(
      `https://bmo-2021-default-rtdb.europe-west1.firebasedatabase.app/users/${value.nickname}/userData.json`,
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...value
        })
      }
    )
  }

  return (
    <div className="results-page-wrapper">
      <form onSubmit={handleSubmit} className="form">
        {inputs.map(element => {
          return (
            <FormInput
              key={element.id}
              name={element.name}
              title={element.title}
              onChange={handleChange}
            />
          )
        })}
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  )
}

export default Results
