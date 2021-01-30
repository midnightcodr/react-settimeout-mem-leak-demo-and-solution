import FooA from './FooA'
import Foo from './Foo'
import Bar from './Bar'
import { useState } from 'react'
function App () {
  const [comp, setComp] = useState('Foo')
  const activate = c => {
    setComp(c)
  }
  const renderComp = () => {
    switch (comp) {
      case 'Foo':
        return <Foo />
      case 'Bar':
        return <Bar />
      case 'FooA':
        return <FooA />
      default:
        return null
    }
  }
  return (
    <div className='App'>
      <div>
        <button type='button' onClick={() => activate('Foo')}>
          Foo
        </button>{' '}
        <button href='about://' onClick={() => activate('Bar')}>
          Bar
        </button>{' '}
        |
        <button type='button' onClick={() => activate('FooA')}>
          FooA (improved version of Foo)
        </button>{' '}
      </div>
      {renderComp()}
    </div>
  )
}

export default App
