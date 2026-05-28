Tree-shaking in React removes unused code from production bundles by analyzing ES module imports and eliminating dead code paths. 

// ❌ Bad - CommonJS, cannot tree-shake
const { Button } = require('./components')

// ✅ Good - ES modules, can tree-shake
import { Button } from './components'

// ❌ Bad - imports everything
import * as Components from './components'

// ✅ Good - imports only what's needed
import { Button, Input } from './components'
Named imports from libraries:

// ❌ Bad - imports entire lodash
import _ from 'lodash'
const result = _.debounce(fn, 300)

// ✅ Good - imports only debounce
import { debounce } from 'lodash-es'
const result = debounce(fn, 300)

// ✅ Better - direct path import
import debounce from 'lodash-es/debounce'

// React icons example
// ❌ Bad
import * as Icons from 'react-icons/fa'
<Icons.FaUser />

// ✅ Good
import { FaUser } from 'react-icons/fa'
<FaUser />

Side Effects (in function components)​
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you're used to calling these operations “side effects” (or just “effects”), you've likely performed them in your components before.