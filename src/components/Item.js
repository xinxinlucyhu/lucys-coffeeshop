import React, { Component } from 'react';
import '../css/Item.css';


const GENERIC_ITEM_TITLE = "New Item Title", GENERIC_ITEM_PRICE = "New Item Price";
class Item extends Component {
    constructor() {
        super();
        this.state = {
            bagels: [],
            editMode: false
        };
    }

   componentWillMount() {
       

        this.setState({
    title: GENERIC_ITEM_TITLE,
     price: GENERIC_ITEM_PRICE,
         editMode: false   
     });
    }
    handleEdit() {
        this.setState({
            editMode: true
        });
    }
    handleSave() {
        this.setState({
            bagels: this.refs.titleContent.value,
            price: this.refs.priceContent.value,
            editMode: false
        });
    }

    handleDelete() {
        this.props.deleteHandler(this.props.id);
    }

    render() {
        let bagelElement, priceElement, buttonArea;
        //if (this.state.bagels.length === 0) {
          //  return (<h1>Loading...</h1>);
       // }
       if   (this.state.bagels.length !== 0){
        
        this.state.bagels.map(function(b,idx){
         
        bagelElement = <h5 key={idx}> {b.bagel}</h5>;
        priceElement = <p key={idx}> {b.price}</p>;
        buttonArea = <div><button className='btn btn-info' onClick={this.handleEdit.bind(this)}>Edit</button>
        <button className='btn btn-danger' onClick={this.handleDelete.bind(this)}>Delete</button></div>
        
    })};
    
    
        if (this.state.editMode) {
            bagelElement = <textarea ref="titleContent" className='title-textarea' defaultValue={this.state.bagels.bagel}></textarea>
            priceElement = <textarea ref="priceContent" className='price-textarea' defaultValue={this.state.bagels.price}></textarea>
            buttonArea = <div><button className='btn btn-primary' onClick={this.handleSave.bind(this)}>Save</button></div>
        }
        else {
            bagelElement = <h5>{this.state.bagels.bagel}</h5>;
            priceElement = <p>{this.state.bagels.price}</p>;
            buttonArea = <div><button className='btn btn-info' onClick={this.handleEdit.bind(this)}>Edit</button><button className='btn btn-danger' onClick={this.handleDelete.bind(this)}>Delete</button></div>
            
        }
        return (
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body">
                        {bagelElement}
                        {priceElement}
                        {buttonArea}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;