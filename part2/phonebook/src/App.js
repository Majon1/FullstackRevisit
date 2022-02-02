import React, { useState } from "react"
import Names from './components/Names'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  console.log('who is this', persons[0].name)
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('new name added', event.target)

    const newPerson = {
      name: newName
    }
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(newName + ' is already in phonebook')
      }
      else {
        setPersons(persons.concat(newPerson))
      }
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        Name:
        <input value={newName} onChange={handleNameChange} />
        <button type='submit'>add</button>
      </form>
      {persons.map(name =>
        <Names key={name.name} name={name} />
      )}
    </div>
  )
}

export default App;