import React from "react";
import whatsup from './img/whatsup.svg'
import telegram from './img/telegram.svg'
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-block container">
                <div className="footer-element-wrapper">
                    <h2 className="footer-block-h2">
                        Мы восстановим справедливость
                    </h2>
                    <div className="footer-contact-item">+7 930 800 59 88</div>
                    <div className="footer-contact-item">г. Москва, ул. Кожевническая, д. 14</div>
                    <div className="footer-contact-item">bankrotmoment@yandex.ru</div>
                    <div className="footer-social">
                        <img src={whatsup} alt="" />
                        <img src={telegram} alt="" />
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer