import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static 	 getDerivedStateFromError(error) {
        return{
            hasError: true 
    }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError){
		return  <h1>Ooops something went wrong , Note: this Error was done on purpose</h1>

      
           }
           return this.props.children
        
}
}
export default ErrorBoundary;
