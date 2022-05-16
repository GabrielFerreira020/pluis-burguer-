import './index.scss';
import { Link } from 'react-router-dom';



export default function Index(){
    return(
        <div className='login'>
            <main class="pagina-completa">
                <section class="conteiner1">
                    <div class="subconteiner">
                        <img src="/logo-hamburguer.png" class="img" alt=""/>
                    </div>

                    <div class="subconteiner2">
                        <div class="titulo">
                            <h1> Faça seu login !!</h1>
                        </div>
                    </div>
                </section>

                <section class="conteiner2">
                <div class="texto2">
                    Novo no site? <u>Registra-se</u>
                </div>
                </section>

                <section class="conteiner3">
                    <div class="texto3">
                        Email
                    </div>
                    <input type="text" class="box1"/>
                </section>

                <section class="conteiner4">
                    <div class="texto4">
                        Senha
                    </div>
                    <input type="text" class="box2"/>
                </section>

                <div class="texto5">
                    <u>Esqueceu a senha?</u>
                </div>

                <Link to="/Consultar" class="botão" >
                    Login
                </Link>

                <section class="conteiner-5">
                    <div class="imagens">
                        <img src="/images/image 12.png" class="img2" alt=""/>
                        <img src="/images/image 10.png" class="img3" alt=""/>
                    </div>
                </section>
            </main>  
        </div>
       
    )
}