import React, { Component } from 'react';

class Content extends Component {
    constructor (props) {
        super (props);
        this.state ={
            trangThai:0
        }
    }
    renderButton = () => (
        <div>
            <input className="form-control form-control-sm" type="text"/>
            <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Save</a>
        </div>
    )
    displayCheck = () =>{
        if(this.state.trangThai ===0){
            return this.renderButton();
        }
        else {
            return this.render();
        }
    }
    render() {
        return (
            <div>
                <input className="form-control form-control-lg" type="text" value="Text1"/>
                <input className="form-control" type="text" />
                <input className="form-control form-control-sm" type="text"/>
                
                <div>
                    <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Edit</a>
                    <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Delete</a>
                </div>

                {this.displayCheck()}
            </div>
        );
    }
}

export default Content;