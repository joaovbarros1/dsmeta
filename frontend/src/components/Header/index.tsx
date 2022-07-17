import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p className="dsmeta-nome-joao">
                        Desenvolvido por
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-de-barros-17851617b/" target="_blank">João Victor B</a>
                    </p>
            </div>
        </header>
    )

}

export default Header
