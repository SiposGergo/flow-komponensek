// function kulcsszóval

// function Hello() {
//     return (
//         <p>Hello react!</p>
//     )
// }

// Arrow function

const Hello = ({name}) => {
    // Ilyet nem csinálhatunk
    // name = 'más név';
    console.log('Hello component rendered!')
    return <p>Hello {name}!</p>
};

export default Hello;