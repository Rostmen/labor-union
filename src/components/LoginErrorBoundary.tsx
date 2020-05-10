import React, { ErrorInfo } from 'react'

type Props = {}
type State = {
  hasError: boolean
}
export default class LoginErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('LOG ERROR TO ERROR SERVICE')
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Login page encountered some bad erorr. Try something again</h1>
    }

    return this.props.children
  }
}
