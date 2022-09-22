const MyComponent = (props) => {
    console.log (props);
    return(
        <h1>Este es mi componente{props.name}</h1>
    )
}
export default MyComponent