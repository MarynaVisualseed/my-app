import './app-info.css';


const AppInfo = ({increased, products}) => {
    return (
        <div className="app-info">
            <h1>New apartment shopping list</h1>
            <h2>Items: {products}</h2>
            <h2>At first turn: {increased}</h2>
        </div>
    )
}

export default AppInfo;