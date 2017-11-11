import React,{Component} from 'react';

class Book extends Component{

    constructor(){
        super();
    }

    render(){

        return(

            <div>

                <div className="tools">
                    <div className="container">
                        <h1>Listando livros</h1>
                        <a href="#" className="btn btn-info pull-right btnAction"> Novo registro </a>
                    </div>
                </div>

                <div className="container" id = "content">

                    <table className="table table-bordered table-hober">
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