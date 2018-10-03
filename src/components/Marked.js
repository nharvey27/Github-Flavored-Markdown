import React from "react"

class Marked extends React.Component {
  constructor(props) {
    super(props)
  }

  mark() {
    return { __html: this.props.value }
  }
  render() {
    var value = this.mark()
    return (
      <div>
        <span dangerouslySetInnerHTML={value} />
      </div>
    )
  }
}

export default Marked
