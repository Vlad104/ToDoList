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
    this.updateColorBack = this.updateColorBack.bind(this);
    this.updateColorText = this.updateColorText.bind(this);
    this.resetSettings = this.resetSettings.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }
  componentDidMount() {
    if (localStorage.settings) {
      this.setState({settings: JSON.parse(localStorage.settings)});
    } else {
      this.setState({settings: JSON.parse(JSON.stringify(defaultSettings))});
    }
  }
  render() {
    if (this.state.hidden) {
      return (
        <div className="settings">
          <input type="button" value="Settings" onClick={this.toogleSettings} />
        </div>
      );
    } else {
      return (
        <div className="settings">
          <input type="button" value="Settings" onClick={this.toogleSettings} />
          <div className="addictive">
            <input type="text" placeholder="Your name" />
            <label for="color-background">background</label>
            <input id="color-background" type="color" value={this.state.settings.colorBack} onChange={this.updateColorBack}/>
            <label for="color-text">text</label>
            <input id="color-text" type="color" value={this.state.settings.colorText} onChange={this.updateColorText}/>
            <input type="button" value="Reset" onClick={this.resetSettings} />
            <input type="button" value="Save" onClick={this.saveSettings} />
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
    localStorage.list = JSON.stringify(this.state.settings);
  }
}

export default Settings;
