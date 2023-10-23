import React, { Component } from 'react';
import './App.css'; 

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isColorPickerVisible: false,
      selectedColor: null,
    };
  }

  toggleColorPicker = () => {
    this.setState((prevState) => ({
      isColorPickerVisible: !prevState.isColorPickerVisible,
    }));
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      isColorPickerVisible: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isColorPickerVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorPicker}>Pick a color</button>
        {isColorPickerVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && <p>You picked: {selectedColor}</p>}
      </div>
    );
  }
}

export default ColorPicker;
