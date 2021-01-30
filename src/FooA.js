import { Component } from 'react'

class FooA extends Component {
  state = {
    cnt: 1
  }
  testArray = []
  unmounted = false

  doSomethingFancy = () => {
    if (this.unmounted) {
      // don't do anything since component will be unmounted"
      return
    }
    console.log('fancy thing is happening')
    const test = array => {
      array.push(new Array(1000).fill('test'))
      // array.push(new Array(100000).fill('test'))
    }

    for (let i = 0; i <= 1000; i++) {
      test(this.testArray)
    }
  }

  componentWillUnmount () {
    this.unmounted = true
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.doSomethingFancy()
    }, 3000)
  }

  componentDidMount () {
    console.log('component Foo is mounted')
  }
  inc = () => {
    this.setState({
      cnt: this.state.cnt + 1
    })
  }
  dec = () => {
    this.setState({
      cnt: this.state.cnt - 1
    })
  }
  render () {
    const { cnt } = this.state
    return (
      <div>
        <h1>This is FooA component</h1>
        <p>
          <button type='button' onClick={this.inc}>
            Add
          </button>
          <button type='button' onClick={this.dec}>
            Remove
          </button>
        </p>
        <p>The current counter is {cnt}</p>
      </div>
    )
  }
}

export default FooA
