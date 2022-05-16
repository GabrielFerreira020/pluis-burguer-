import './index.scss';
import { Link } from 'react-router-dom';

export default function Index(){
    return(
        <div className='adicionar'>
            <section className="fx-reserva">
                <img className="logo" src="/logo-hamburguer.png" alt=""/>
                
                <div className="container" >
                    <div className="titulo , font">
                        Adicionar reserva
                    </div>

                    <div className="linhas">
                        <div className="cima">
                            <div className="column">
                                <div className="texto , font">Mesa</div>
                                <input className="input1" type="text"/>
                            </div>
                        <div className="column">
                                <div className="texto , font">Nome</div>
                                <input className="input2" type="text"/>
                        </div>
                        </div>
                        <div className="baixo">
                            <div className="es">
                                <div className="">
                                    <div className="texto , font">Qtd de pessoas</div>
                                    <input className="input1" type="text"/>
                                </div>
                                <div className="es-margin">
                                    <div className="texto , font">Hora</div>
                                    <input className="input1" type="text"/>
                                </div>
                            </div>
                            <div className="di">
                                <div className="texto , font">Data</div>
                                <input className="input3" type="data"/>
                            </div>
                        </div>
                        <div className="margin-botao">
                            <Link to="/Consultar" className="botao">Finalizar</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}