import React, { Component } from "react";

import "../styles/Settings.css";

const defaultSettings = {
  username: '',
  colorText: '#FFFFFF',
  colorBack: '#181E24',
};

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hidden: true, 
      settings: {
        username: new String(),
        colorText: new String(),
        colorBack: new String(),
      }
    };
    this.toogleSettings = this.toogleSettings.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateColorBack = this.updateColorBack.bind(this);
    this.updateColorText = this.updateColorText.bind(this);
    this.resetSettings = this.resetSettings.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }
  componentDidMount() {
    if (localStorage.settings) {
      this.setState({settings: JSON.parse(localStorage.settings)});
      // document.body.style.setProperty('--backgroundColor', this.state.settings.colorBack);
      // document.body.style.setProperty('--mainColor', this.state.settings.colorText);
      this.props.updateName(this.state.settings.username);
    } else {
      this.setState({settings: JSON.parse(JSON.stringify(defaultSettings))});
    }
  }
  render() {
    if (this.state.hidden) {
      return (
        <div className="settings">
          <input type="button" value="S" className="settings__button" onClick={this.toogleSettings} />
        </div>
      );
    } else {
      return (
        <div className="settings">
          <input type="button" value="Close" className="settings__item settings__button settings__button_actived" onClick={this.toogleSettings} />
          <div className="addictive">
            <input type="text" className="settings__item settings__input" value={this.state.settings.username} onChange={this.updateInput} placeholder="Your name" />
            <div className="settings__item color">
              <label htmlFor="color-background">Back</label>
              <input id="color-background" type="color" className="color__input" value={this.state.settings.colorBack} onChange={this.updateColorBack} />
            </div>
            <div className="settings__item color">
              <label htmlFor="color-text">Text</label>
              <input id="color-text" type="color" className="color__input" value={this.state.settings.colorText} onChange={this.updateColorText} />
            </div>
            <div className="settings__item button-panel">
              <input type="button" value="Reset" className="button-panel__button" onClick={this.resetSettings} />
              <input type="button" value="Save" className="button-panel__button" onClick={this.saveSettings} />
            </div>
          </div>
        </div>
      );
    }
  }
  toogleSettings() {
    this.setState({ hidden: !this.state.hidden });
  }
  updateColorBack(event) {
    const temp = this.state.settings;
    temp.colorBack = event.target.value;
    this.setState({ settings: temp });
    document.body.style.setProperty('--backgroundColor', this.state.settings.colorBack);
  }
  updateColorText(event) {
    const temp = this.state.settings;
    temp.colorText = event.target.value;
    this.setState({ settings: temp });
    document.body.style.setProperty('--mainColor', this.state.settings.colorText);
  }
  resetSettings() {
    this.setState({settings: JSON.parse(JSON.stringify(defaultSettings))});
    document.body.style.setProperty('--backgroundColor', this.state.settings.colorBack);
    document.body.style.setProperty('--mainColor', this.state.settings.colorText);
    // this.setState({settings: this.state.settings});
  }
  saveSettings() {
    localStorage.settings = JSON.stringify(this.state.settings);
  }
  updateInput(event) {
    const temp = this.state.settings;
    temp.username = event.target.value;
    this.setState({ settings: temp });
    this.props.updateName(this.state.settings.username);
  }
}

export default Settings;
