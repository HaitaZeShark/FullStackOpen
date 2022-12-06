import numberService from '../Services/Numbers'

const Persons = ({ eachPerson, persons, setPersons, setNotification, setNotificationStyle }) => {
    const handleclick = (event) => {
        const answer = window.confirm(`Delete ${eachPerson.name}?`);
        if (answer) {
            handledelete()
        }
    }
    const handledelete = () => {

        numberService.deleteContact(eachPerson.id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== eachPerson.id))
                setNotificationStyle("success");
                setNotification(`Deleted ${eachPerson.name}`);
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            })
            .catch(error => {
                setNotificationStyle("error");
                setNotification(`Information of ${eachPerson.name} has already been removed from the server`);
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            })
    }
    return (
        <div>
            {eachPerson.name} {eachPerson.number} <button onClick={handleclick}>delete</button>
        </div>
    )
}

export default Persons