import {useState, useEffect} from 'react';
import Form from './Components/Form';
import Filter from './Components/Filter';
import Numbers from './Components/Numbers';
import numberService from './Services/Numbers';
import Notification from './Components/Notifications';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [Notification, setNotification] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState("success");

  useEffect(() => {
    numberService.getAll().then(initialNumbers => {
      setPersons(initialNumbers)
    })
  }
    , [])

    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
      setFilter(event.target.value)
      setShowAll(false)
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <displayNotification notification={Notification} notificationStyle={notificationStyle} />
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <h3>Add a new</h3>
        <Form persons={persons} setPersons={setPersons} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} setNewName={setNewName} setNewNumber={setNewNumber} setNotification={setNotification} setNotificationStyle={setNotificationStyle} />
        <h3>Numbers</h3>
        <Numbers showList={showAll} personList={persons} setNewPersonsList={setPersons} filter={filter} setNotification={setNotification} setNotificationStyle={setNotificationStyle} />
      </div>
    )
  }

  export default App