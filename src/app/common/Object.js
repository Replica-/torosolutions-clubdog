import React from 'react'

// This function takes a component...
export function ObjectComponent(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }

        handleChange() {

        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return (<div className={'Object Object-' + WrappedComponent.name}><WrappedComponent{...this.props} /></div>);
        }
    };
}