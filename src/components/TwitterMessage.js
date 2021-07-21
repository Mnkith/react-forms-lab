import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      chrsLeft: this.props.maxChars
    };
  }

  messageChangeHandle(e) {
    this.setState({
      message: e.target.value,
      chrsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message" id="message"
          value={this.state.message}
          onChange={e => this.messageChangeHandle(e)} /><br/>
        <label>{this.state.chrsLeft} character(s) remaining!</label>
      </div>
    );
  }
}

export default TwitterMessage;
