const Notifications = ({message, displayNotification}) => {
    if (message === null) {
        return null
    }

    return (
        <div className={displayNotification}>
            {message}
        </div>
    )
}

export default Notifications