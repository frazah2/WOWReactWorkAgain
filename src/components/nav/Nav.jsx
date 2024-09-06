import { Component } from 'react';
import './Nav.css'
import Menu from './menu/Menu';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClass: 'hide',
            menuText: 'menu',
            buttonClass: '',
        };
    }

    toggleMenu = () => {
        if (this.state.menuClass === 'hide') {
            this.setState({ buttonClass: 'scale' });
            this.setState({ menuText: 'X' });
            this.setState({ menuClass: 'show' });
        } else {
            this.setState({ buttonClass: '' });
            this.setState({ menuText: 'Menu' });
            this.setState({ menuClass: 'hide' });
        }
    };

    render() {
        return (
            <div className="navi">
                <div>
                    <div className='logo'>
                        <h2>MyLogo</h2>
                    </div>
                    <button className={`btmenu ${this.state.buttonClass}`} onClick={this.toggleMenu}>{this.state.menuText}</button>
                </div>
                <Menu Menu={this.state.menuClass} />
            </div>
        );
    }
}

export default Nav;