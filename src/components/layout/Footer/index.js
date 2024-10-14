import React from "react";
import * as S from "./styles";
import {FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok} from 'react-icons/fa'

export default function Footer() {
    return (
            <S.Footer>
                <S.Container>
                <S.Flex>
                <div>
                    <img src="./Vector.png" alt="CourtCorrect Logo" />
                    <p>Justice for all.</p>
                    <br></br>
                    <p>hello@courtcorrect.com</p>
                    <p>33 Percy St, London W1T 2DF</p>
                    <p>020 7867 3925</p>
                </div>
                <S.LinksWrapper>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Data</a></li>
                    <li><a href="/">Cases</a></li>
                    <li><a href="/">Customers</a></li>
                    <li><a href="/">Search Engine</a></li>
                    <li><a href="/">Custom Fields</a></li>
                    <li><a href="/">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Legals</h3>
                    <ul>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">AI Saftey Policy</a></li>
                        <li><a href="/">Cookie Policy</a></li>
                        <li><a href="/">Compliance Statement</a></li>
                    </ul>
                </div>
                </S.LinksWrapper>
                </S.Flex>
                <S.Separator />
                <S.SocialIcons>
                <p>&copy; 2023 CourtCorrect LTD</p>
                <ul>
                    <li><a href="/"><FaFacebookSquare /></a></li>
                    <li><a href="/"><FaTwitter /></a></li>
                    <li><a href="/"><FaInstagram /></a></li>
                    <li><a href="/"><FaYoutube /></a></li>
                    <li><a href="/"><FaLinkedin /></a></li>
                    <li><a href="/"><FaTiktok /></a></li>
                </ul>
                </S.SocialIcons>
                </S.Container>
            </S.Footer>
    );
}
