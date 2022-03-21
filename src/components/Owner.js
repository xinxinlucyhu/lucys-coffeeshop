import React, { Component } from 'react';
import '../css/Owner.css';
import Item from './Item';

class Owner extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    addItem() {
       this.state.items.push(
            {
                id: Date.now()
            }
        );
        console.log(JSON.stringify(this.state.items));
        this.setState(
            { items: this.state.items }
        );
    }
    deleteItem(id) {
        let newItemArr = this.state.items;
        newItemArr.map((item, index) => {
            if (id === item.id) {
                newItemArr.splice(index, 1);
            }
            return newItemArr;
        });
        this.setState({
            items: newItemArr
        });
    }

    render() {
        return (
            <div>
                <div className='div-board'>
                    <div className='row'>
                        {this.state.items.map(item => {
                            return <Item key= {item.id} id={item.id} deleteHandler={this.deleteItem.bind(this)} />
                        })
                        }
                    </div>
                    <button className="btn btn-success add-button" onClick={this.addItem.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

export default Owner;