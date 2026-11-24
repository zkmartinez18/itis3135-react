import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Zackery Martinez's Zany Mongoose | ITIS3135</h1>

            <nav>
                <Link to="/">Home</Link> ||{" "}
                <Link to="/introduction">Introduction</Link> ||{" "}
                <Link to="/contract">Contract</Link> ||{" "}
                <Link to="/about">About</Link>
            </nav>

            <nav aria-label="Secondary Navigation">
                <a href="https://zkmartinez18.github.io/itis3135/hobby/index.html">Hobby Website</a> |{" "}
                <a href="https://zkmartinez18.github.io/itis3135/stuff/Zack's%20wrst%20CRAPpy%20Page_dookie.HTM">CRAPpy</a> |{" "}
                <a href="https://zkmartinez18.github.io/itis3135/zanymongoose/index.html">Zany Mongoose House of Banners</a>
            </nav>
        </header>
    );
}

export default Header;