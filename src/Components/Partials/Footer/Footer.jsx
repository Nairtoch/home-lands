import { Link } from 'react-router-dom';
import twitter from "../../../Assets/Images/square-twitter.svg";
import facebook from "../../../Assets/Images/square-facebook.svg";

export const Footer = () => {
    return(
        <footer className="Footer">
            <div>
                <h3>HomeLands</h3>
            </div>
            <div>
                <p>Øster Uttrupvej 5</p>
                <p>9000 Aalborg</p>
            </div>
            <div>
                <p>Email: info@homelands.dk</p>
                <p>Telefon: 45+ 1122 3344</p>
            </div>
            <div className='footerIcons'>
                <Link to={'/'}><img src={twitter} alt="" /></Link>
                <Link to={'/'}><img src={facebook} alt="" /></Link>
            </div>
        </footer>
    )
}