import React,{Component} from 'react';

export default class Toolbar extends Component{

    render(){

        return(
            <div className="tools">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <a href={this.props.link} className="btn btn-info pull-right btnAction"> {this.props.textButton} </a>
                </div>
            </div>
        );
    }
}