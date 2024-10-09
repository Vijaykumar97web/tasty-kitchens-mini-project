import {Component} from 'react'
/* eslint-disable react/no-unknown-property */

import './index.css'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

const totalPages = 4
const Page = 1

class Counter extends Component {
  state = {currentPage: Page}

  onDecrement = () => {
    const {currentPage} = this.state
    const {pageChangeFunction} = this.props
    if (currentPage > 1) {
      this.setState(
        prevState => ({currentPage: prevState.currentPage - 1}),
        pageChangeFunction(currentPage - 1),
      )
    }
  }

  onIncrement = () => {
    const {currentPage} = this.state
    const {pageChangeFunction} = this.props
    if (currentPage < totalPages) {
      this.setState(
        prevState => ({currentPage: prevState.currentPage + 1}),
        pageChangeFunction(currentPage + 1),
      )
    }
  }

  render() {
    const {currentPage} = this.state
    return (
      <div className="home-page-counter-plus-minus-container">
        <button
          className="home-button-pagination-style"
          type="button"
          onClick={this.onDecrement}
          testid="pagination-left-button"
        >
          <FaArrowLeft size={20} />
        </button>
        <div className="home-route-pages-class">
          <span className="home-route-pages-class" testid="active-page-number">
            {currentPage}
          </span>{' '}
          of {totalPages}
        </div>
        <button
          type="button"
          onClick={this.onIncrement}
          testid="pagination-right-button"
          className="home-button-pagination-style"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    )
  }
}

export default Counter
