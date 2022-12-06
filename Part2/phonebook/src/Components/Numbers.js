import Persons from "./Persons";

const Numbers = ({ showList, personList, setNewPersonsList, filter, setNotification, setNotificationStyle }) => {
    const numbertoshow = showList ? personList : personList.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <div>
            {numbertoshow.map(eachPerson => <Persons key={eachPerson.id} eachPerson={eachPerson} persons={personList} setPersons={setNewPersonsList} setNotification={setNotification} setNotificationStyle={setNotificationStyle} />)}
        </div>
    )
}

export default Numbers