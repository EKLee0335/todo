// import React from 'react';
import PropTypes from 'prop-types';
import React, {Component} from 'react';


class ListItems extends Component{
    constructor(props){
        super(props);
        this.state = {
            newValue : '',
        }
    }
    handelChange = (event) =>{
        this.setState({newValue: event.target.value});
    }
    render(){
        const items = this.props.items;
        const edit = this.props.edit;
        const ifEdit = this.props.ifEdit;
        const listItems = items.map(item =>{
            if(item.key === edit && ifEdit){
                return  <li className='list' key={item.key}>
                        <input type='text' onChange = {this.handelChange}></input>
                        <button onClick={()=>{this.props.editDone(item.key,this.state.newValue)}}>edit</button>
                        </li>
            }
            else{
                return  <li className='list' key={item.key}>
                         {item.text}
                        <button onClick={()=>{this.props.deleteItem(item.key)}}>delete</button>
                        <button onClick={()=>{this.props.editItem(item.key)}}>edit</button>
                        </li>

            }
           
            })
            return(
                    <ul>
                        {listItems}
                    </ul>
            );
        }
}

//propTypes
// ListItems.propTypes ={
//     items: PropTypes.array,
//     deleteItem: PropTypes.func,
//     editItem: PropTypes.func,
//     edit: PropTypes.number,
// }
export default ListItems;