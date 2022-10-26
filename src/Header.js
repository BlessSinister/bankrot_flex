import React from 'react'
import Navbar from './Navbar'


class Header extends React.Component {
    render() {
        return (
            <header className='container'>
                <Navbar />
                <div className="hello-block">
                    <h1 className='hello-block-h1'>Банкрот момент</h1>
                    <p className='hello-block-p1'>Сотрудники Компании "Банкрот момент" обладают</p>
                    <p className='hello-block-p1'>более чем <span className='hello-block-span'>10 летним опытом</span>&nbsp;на рынке оказания юридических услуг.</p>
                    <p className=' hello-block-p2'>Наши специалисты предоставляют услуги на всей территории
                        Российской Федерации.</p>
                    <div className="hello-block-mask-wrapper">

                    </div>
                    <h2 className='hello-block-h2'>Наш опыт - ваше преимущество</h2>
                    <p className='hello-block-p1 mb-block'>Целью Компании <b> "Банкрот момент" </b><br /> является защита интересов клиентов и освобождение
                        от долговой кабалы людей, попавших
                        в сложную жизненную ситуацию.</p>
                </div>
            </header>
        )
    }
}
export default Header