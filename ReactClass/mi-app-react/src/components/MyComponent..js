const exiteError = false;

const MyComponent = ({ value, name, saludar, children }) => {
console.log(value);
console.log(name);
console.log(children);
saludar();

const task = new Promise((resolve, reject) => {
    setTimeout(() => {
    reject('Error: dato no encontrado');
    resolve({ id: 0, name: 'Pizza' }) 
    }, 1000)
})

  console.log(task); // OPCION A

return (
    <>
    <h1>Este es mi componente {name}</h1>
    {children}
    </>
)
};

export default MyComponent;