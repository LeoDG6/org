import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="http://www.facebook.com/">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="http://www.twitter.com/">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="http://www.instagram.com/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/logo.png" alt="org" />
        <strong>Desarrollado por Leonardo</strong>
    </footer>
}

export default Footer;