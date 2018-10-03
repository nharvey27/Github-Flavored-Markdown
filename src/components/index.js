import Main from "./main"
import React from "react"
import ReactDOM from "react-dom"

const title = "My Minimal React Webpack Babel Setup"

ReactDOM.render(<Main />, document.getElementById("app"))

module.hot.accept()
