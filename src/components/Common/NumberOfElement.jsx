import React from "react";

class NumberOfElement extends React.Component {
  render() {
    const { numberOfElement } = this.props;
    return (
      <div className="flex items-center justify-center bg-primary p-2 w-6 h-6 rounded-full text-white text-xs">
        {numberOfElement}
      </div>
    );
  }
}

export default NumberOfElement;
