import { Component } from 'react';

import AppInfo from '../app-info/app-info';

import AppFilter from '../app-filter/app-filter';
import ShoppingList from '../shopping-list/shopping-list';
import AddForm from '../add-form/add-form';





import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {product: "Frige", price: 1000, increase: false, buyFirst: true, id: 1},
                {product: "Gauch", price: 800, increase: true, buyFirst: false, id: 2},
                {product: "Table", price: 15000, increase: false, buyFirst: false, id: 3},
            ],
            filter: 'all' // creating filter
        }
        this.maxId = 4;
    }

    deleteProduct = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArray = [...before, ...after];

            
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addProduct = (product, price) => {
        const newProduct = {
            product,
            price,
            increase: false,
            buyFirst: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newProduct];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item; 

            })
        }))
    }

    onToggleRiseBuyFirst = (id) => {
        this.setState(({data}) => ({
              data: data.map(item => {
                  if (item.id === id) {
                       return {...item, buyFirst: !item.buyFirst}
                  }
                  return item; 

         })
     }))
    }

    //creating filter
    filterPost = (items, filter) =>{
        switch (filter) {
            case 'decided':
                return items.filter(item => item.increase);
            case 'moreThen1000':
                return items.filter(item => item.price > 1000);
            default:
                return items
        }

    }
    onFilterSelect = (filter) => {
        this.setState({filter});
    }



    render() {
        const {data, filter} = this.state; // creating filter
        const products = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(data, filter); // creating filter
        return (
             
             <div className="app">
            
                <AppInfo products={products} increased={increased}/>
    
                <div className="search-panel">
                   
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                
                <ShoppingList 
                    data={visibleData} //changed for creating filter
                    onDelete={this.deleteProduct}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRiseBuyFirst={this.onToggleRiseBuyFirst}
                    />
                    
                <AddForm onAdd={this.addProduct}/>
    
            </div>
        );
    }
}

export default App;