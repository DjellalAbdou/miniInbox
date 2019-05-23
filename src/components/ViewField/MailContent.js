import React, { Component } from "react";
import Message from "./Message";
import NewMessage from "./NewMessage";

class MailContent extends Component {
  render() {
    const myMessages = this.props.thread.messages.map((message, index) => {
      if (index !== 0) {
        return (
          <div key={message.id}>
            <h3 className="separationLine">
              <span>{message.time}</span>
            </h3>
            <Message message={message} />
          </div>
        );
      }
      return <Message key={message.id} message={message} />;
    });
    return (
      <div>
        {myMessages}
        <NewMessage />
      </div>
    );
  }
}

export default MailContent;
