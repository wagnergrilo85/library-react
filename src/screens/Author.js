import React,{Component} from 'react';
import Toolbar from '../shared/components/Toolbar';

class Author extends Component{

    constructor(){
        super();
    }

    render(){

        return(

            <div>
                <Toolbar title = "Autor" textButton="Novo registro" />

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

export default Author;