import React, { useState } from "react"
import Names from './components/Names'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: ' 050-55555'
    }
  ])
  console.log('who is this', persons[0].name)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [found, setFound] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('new name added', event.target)

    const newPerson = {
      name: newName,
      number: newNumber
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
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    console.log('handlefind gets', event.target.value)
    setFound(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={found} onChange={handleSearch} />

      <h2>add a new</h2>
      <form onSubmit={addName}>
        Name:
        <input value={newName} onChange={handleNameChange} /><br></br>
        Number:
        <input value={newNumber} onChange={handleNumberChange} /><br></br>
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>

      <Names found={found} person={persons} />

    </div>
  )
}

export default App;