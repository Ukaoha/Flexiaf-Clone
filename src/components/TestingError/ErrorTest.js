import Learn from "../../pages/Learn";

const ErrorTest = ({School}) => {
    if(School === "Nigeria") {
        throw new Error( "Not a school" );
    }

    return (  
        <Learn Learn="Nhhh"/>
    );
}
 
export default ErrorTest;