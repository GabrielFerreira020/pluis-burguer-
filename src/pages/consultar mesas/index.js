import './index.scss';
import { Link } from 'react-router-dom';

export default function Index(){
    return(
        <body className='consulta'>
            <div className="main">
                <main className="pagina">

                    <section className="conteiner0">
                        <div className="logo">
                            <img src="/logo-hamburguer.png" width="106px" height="97px" alt=""/>
                        </div>
                
                        <div className="titulo">
                            Reservas de mesas
                        </div>
            
                    </section>
            
            
                    <section className="conteiner1">
                        
                        <div className="linha1">
                            Mesa
                        </div>
            
                        <div className="linha1">
                            Nome
                        </div>
            
                        <div className="linha1">
                            Qtd.pessoas
                        </div>
            
                        <div className="linha1">
                            Data
                        </div>
            
                        <div className="linha1">
                            Hora
                        </div>
            
                    </section>
            
                
                <section className="conteiner3">
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                    <div className="linha2">
                        <input type="text" className="box1"/>
                    </div>
                
                </section>
                
                <section className="conteiner4">
                    <Link to="/Adicionar"className="botao">
                        ADICIONAR
                    </Link>
                </section>
                
                </main>
            </div>
        </body>
    )
}