import { Component } from 'react';

import './add-form.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
            price: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onAdd(this.state.product, this.state.price);
    //     this.setState({
    //         product: '',
    //         price: ''
    //     })
    // }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.product.length < 3 || !this.state.price) return;
        this.props.onAdd(this.state.product, this.state.price);
        this.setState({
            product: '',
            price: ''
        })
    }

   render() {
    const {product, price} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new item</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is item name?"
                        name="product"
                        value={product}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Price in $?"
                        name="price"
                        value={price}
                        onChange={this.onValueChange}/>

                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
   }
}

export default AddForm;