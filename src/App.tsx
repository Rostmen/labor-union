import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'

const Login = lazy(() => import('./routes/Login'))
const About = lazy(() => import('./routes/About'))
const Home = lazy(() => import('./routes/Home'))

const App = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
)

export default App
