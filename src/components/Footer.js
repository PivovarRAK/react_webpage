import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <footer>
                <table>
                    <tbody>
                    <tr>
                    <th>
                        STUDIO
                    </th>
                    <th>
                        SOCIAL MEDIA
                    </th>
                    <th>
                        ÜBER MICH
                    </th>
                    </tr>
                    <tr><td><i className="fas fa-map-marker-alt"></i> Musterstr. 1, 101010 Binstadt</td><td><i className="fab fa-facebook-square"></i></td><td>Erfahrung</td></tr>

                    <tr><td><i className="fas fa-phone-square-alt"></i> 010101/10101010</td><td><i className="fab fa-instagram-square"></i></td><td>Referenzen</td></tr>

                    <tr><td><i className="fas fa-envelope"></i> muster@muster.com </td><td><i className="fab fa-youtube-square"></i></td><td>Ausbildung</td></tr>
                    </tbody>
                </table>
                <p>Made by D. Pivovar 2020</p>
                </footer>
            </div>
            
        </div>
    )
}

export default Footer
