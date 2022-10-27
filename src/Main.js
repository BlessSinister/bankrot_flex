import React from "react";
import Form from './Form'
import item1 from './img/item_number1.svg'
import item2 from './img/item_number2.svg'
import item3 from './img/item_number3.svg'
import item4 from './img/item_number4.svg'
import item5 from './img/item_number5.svg'
import item6 from './img/item_number6.svg'

class Main extends React.Component {
    render() {
        return (
            <main className="container">
                <div className="main-item-wrapper planshet-position-decor">
                    <div className="main-item main-item1">
                        <div className="main-item-img ">
                            <img src={item1} alt="" />
                        </div>
                        <h2 className="main-item-h2">Банкротство</h2>
                        <p className="main-item-p">Физических и юридических
                            лиц под ключ</p>
                    </div>
                    <div className="main-item main-item2">
                        <div className="main-item-img">
                            <img src={item2} alt="" />
                        </div>
                        <h2 className="main-item-h2">Сопровождение</h2>
                        <p className="main-item-p">Процедур банкротства, находящихся в процессе, как со стороны должников, так и со стороны кредиторов</p>
                    </div>
                    <div className="main-item main-item3">
                        <div className="main-item-img">
                            <img src={item3} alt="" />
                        </div>
                        <h2 className="main-item-h2">Комплексное</h2>
                        <p className="main-item-p">Представительство интересов Заказчика в суде, в том числе составление всех необходимых процессуальных документов</p>
                    </div>
                    <div className="main-item main-item4">
                        <div className="main-item-img">
                            <img src={item4} alt="" />
                        </div>
                        <h2 className="main-item-h2">Осуществления контроля</h2>
                        <p className="main-item-p">За деятельностью управляющего, анализ и предоставление сведений Заказчику о целесообразности расходования конкурсной массы при проведении процедуры банкротства управляющим</p>
                    </div>
                    <div className="main-item main-item5">
                        <div className="main-item-img">
                            <img src={item5} alt="" />
                        </div>
                        <h2 className="main-item-h2">Анализ
                            и подготовка</h2>
                        <p className="main-item-p">Заказчика к проведению процедуры банкротства, с последующей защитой имущества Заказчика</p>
                    </div>
                    <div className="main-item main-item6">
                        <div className="main-item-img">
                            <img src={item6} alt="" />
                        </div>
                        <h2 className="main-item-h2">Составление
                            карточки риска</h2>
                        <p className="main-item-p">Арбитражных управляющих,
                            с последующей защитой интересов
                            в органах по контролю и надзору
                            в сфере банкротства</p>
                    </div>
                </div>

                <Form />
            </main>
        )
    }
}
export default Main 