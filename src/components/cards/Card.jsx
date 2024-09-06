import './Card.css'
import { Component } from 'react'
import Input from "./input/Input";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: ''
        };
    }
    handleCardClick = (carBrand) => {
        this.setState({ selectedCar: carBrand });
    };

render() {
        return (
            <div className='container'>
                <div className="row d-flex justify-content-between">
                    <div className='col-xs-5 col-sm-5 col-md-2 col-lg-2 col-xl-2 craddiv merse' onClick={() => this.handleCardClick("MERCEDES")}>
                        <p>Mercedes</p>
                    </div>
                    <div className='col-xs-5 col-sm-5 col-md-2 col-lg-2 col-xl-2 craddiv bmw' onClick={() => this.handleCardClick("BMW")}>
                        <p>BMW</p>
                    </div>
                    <div className='col-xs-5 col-sm-5 col-md-2 col-lg-2 col-xl-2 craddiv ford' onClick={() => this.handleCardClick("FORD")}>
                        <p>Ford</p>
                    </div>
                    <div className='col-xs-5 col-sm-5 col-md-2 col-lg-2 col-xl-2 craddiv toyota' onClick={() => this.handleCardClick("TOYOTA")}>
                        <p>Toyota</p>
                    </div>
                </div>
                <Input selectedCar={this.state.selectedCar} />
                
            </div>

        )
    }
}

export default Card;
