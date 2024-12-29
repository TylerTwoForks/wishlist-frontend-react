//PascalCasing for function components in React Applications
function Message(){
    //JSX: JavaScript XML code her.  Not HTML within JS. 
    const name = 'Tyler';
    if(name){
        return <h1>Hello {name}</h1>; 
    }else{
        return <h1>Hello World</h1>;
    }
    
}

export default Message;