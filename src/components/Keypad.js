// Code Keypad Component Here

function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
      };
    
    return (
        < input type="password" 
        onChange={handleChange} 
        placeholder="Enter your password"
        />
    )
}

export default Keypad