import React, { Component } from "react";
import MessageHeader from "./MessageHeader";
import MessageContent from "./MessageContent";

class Message extends Component {
  render() {
    return (
      <div className="msg">
        <MessageHeader
          user={this.props.message.creator.username}
          date={this.props.message.time}
        />
        <MessageContent text={this.props.message.body} />
      </div>
    );
  }
}

export default Message;
