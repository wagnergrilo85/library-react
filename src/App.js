import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {

    render() {
        return (

            <div>

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Biblioteca</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a to="#"> Painel <span className="sr-only">(current)</span></a></li>
                                <li><Link to="#">Alunos</Link></li>
                                <li className="dropdown">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Livros <span className="caret"></span></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/book">Livros</Link></li>
                                        <li><Link to="/author">Autores</Link></li>
                                        <li><Link to="/category">Categorias</Link></li>
                                    </ul>
                                </li>
                            </ul>

                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Pesquisar livros e alunos..." />
                                </div>
                                <button type="submit" className="btn btn-info">Buscar</button>
                            </form>

                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Wagner Jr. <span className="caret"></span></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="#">Meus dados</Link></li>
                                        <li><a to="#">Alterar minha senha</a></li>
                                        <li><Link to="#">Dados da escola</Link></li>
                                        <li role="separator" className="divider"></li>
                                        <li><Link to="#">Sair do sistema</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="box-content">
                    <div className="box-content">
                        {this.props.children}
                    </div>
                </section>

                <footer id = "footer">
                    <div className="container">
                        <p>Desenvolvido por Wagner Grilo de Barros Junior</p>
                    </div>
                </footer>

            </div>
        );
  }
}

export default App;
