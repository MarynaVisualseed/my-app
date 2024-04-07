import './app-filter.css';

const AppFilter = (props) => { //changed

    const buttonsData = [
        {name: 'all', label: 'All products'},
        {name: 'decided', label: 'Decided'},
        {name: 'moreThen1000', label: 'Expensive'}
    ];


    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button type="button"
                    className="btn btn-light">
                    All products
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Decided
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Expensive
            </button> */}

        </div>
    );
}

export default AppFilter;