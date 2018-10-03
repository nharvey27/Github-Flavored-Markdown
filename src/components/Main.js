import Marked from "./marked"
import React from "react"
import marked from "marked"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:
        "'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    var val = marked(this.state.value, { sanitize: true })
    return (
      <div>
        <div className="col-md-6">
          <textarea
            rows="22"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6">
          <Marked value={val} />

        </div>
      </div>
    )
  }
}

export default Main
