import React,{Component} from 'react';
import Toolbar from '../../shared/components/Toolbar';

class Book extends Component{

    constructor(){
        super();

        this.handleNewFormElement = this.handleNewFormElement.bind(this);
    }

    handleNewFormElement(){

        console.log('tem que trocar os elementos');
        document.querySelector('#main-table').style.display = "none";

    }

    render(){

        return(

            <div>
                <Toolbar link = "/new" title = "Livros" textButton="Novo registro" />

                <div className="container" id = "content">
                    <table className="table table-bordered table-hober" id = "main-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Páginas</th>
                                <th>ISBN</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Book;