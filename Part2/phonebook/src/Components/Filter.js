const filter = ({filter, handleFilter, showSetter}) => {

    const triggerfilter = (value) => {
        value === '' ? showSetter(true) : showSetter(false);
    }

    return (
        <>
        filter by name <input value={filter} onChange={handleFilter} onKeyUp={(event) => triggerfilter(event.target.value)} />
        </>
    )
}

export default filter
