import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div className="callback-form-block container">
                <h2 className="form-block-h2">Обратная связь</h2>
                <form action="" className="form-block-formelement">
                    <div className="form-block-input">
                        <p> Имя</p>
                        <input type="text" placeholder="Иванов Иван Иванович" className="form-block-inputdecor" />
                    </div>
                    <div className="form-block-input">
                        <p>Телефон</p>
                        <input type="tel" placeholder="+7(963)123-45-47" className="form-block-inputdecor" />
                    </div>
                    <div className="form-block-input">
                        <p> E-mail</p>
                        <input type="email" placeholder="Ivanov@mail.ru" className="form-block-inputdecor" />
                    </div>
                    <div className="form-block-btn">
                        <div className="form-block-btn-text" type='submit'>
                            Связаться с нами
                        </div>
                    </div>
                    <p className="form-block-personalitydata">Нажимая на кнопку, вы подтверждаете согласие на обработку персональных данных</p>
                </form>
            </div>
        )
    }
}
export default Form