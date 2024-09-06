import { Component } from "react";
import './Input.css'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.selectedCar || '',
      carImage: ''
    };
  }

  carImages = {
    MERCEDES: 'https://www.mercedes-benzsouthwest.co.uk/media/.renditions/wysiwyg/E-Class_body_2.jpg',
    BMW: 'https://mediapool.bmwgroup.com/cache/P9/202309/P90522951/P90522951-the-bmw-i5-edrive40-driving-10-2023-2247px.jpg',
    FORD: 'https://hips.hearstapps.com/hmg-prod/images/2025-ford-explorer-st-110-65ba6d640cbb3.jpg',
    TOYOTA: 'https://www.topgear.com/sites/default/files/2024/03/1-Toyota-Land-Cruiser-review.jpg',
  };

  handleSearch = (event) => {
    const searchValue = event.target.value.toUpperCase();
    this.setState({ search: event.target.value });

    if (this.carImages[searchValue]) {
      this.setState({ carImage: this.carImages[searchValue] });
    } else {
      this.setState({ carImage: '' });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCar !== this.props.selectedCar) {
      const carImage = this.carImages[this.props.selectedCar.toUpperCase()] || '';
      this.setState({ search: this.props.selectedCar, carImage });
    }
  }


  render() {
    return (
      <div className="container search">
        <div>
        <input 
          type="text" 
          placeholder="Search car brand" 
          value={this.state.search} 
          onChange={this.handleSearch} 
        />
        <div>
          {this.state.carImage ? (
            <img src={this.state.carImage} alt={this.props.selectedCar} style={{ width: '800px', marginTop: '20px' ,border:'2px solid black'}} />
          ) : (
            <p>No car found</p>
          )}
        </div>
        </div>
      </div>
    );
  }
}

export default Input;
