import ShoppingListItem from '../shopping-list-item/shopping-list-item';

import './shopping-list.css';

const ShoppingList = ({data, onDelete, onToggleIncrease, onToggleRiseBuyFirst}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; 
        return (
            <ShoppingListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRiseBuyFirst={() => onToggleRiseBuyFirst(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default ShoppingList;