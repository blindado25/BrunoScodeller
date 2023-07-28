import '../Menu/reset.css';
import './Esquerda.css';
import { ImgPerfil1 } from "../Imagens/ImgPerfil/ImgPerfil";

export function Esquerda() {
    return (
        <div className="esquerda">
            <div className="perfil">
                <a href="" target="_blank">
                    <div className="img-borda">
                        <div className="img-contem">

                            <ImgPerfil1 />
                        </div>
                    </div>
                </a>
                <h1 className="nome">Geralt de Rivia</h1>
                <h1 className="nacionalidade">Solteiro, Brasil</h1>
            </div>

            <div className="editar-perfil">
                <a href="" target="_blank"> Editar meu perfil </a>
            </div>
        </div>
    );
}