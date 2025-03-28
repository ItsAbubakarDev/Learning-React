function printHello(){
    console.log("hello");
}

export default function Button(){
    return(<div>
        <button onDoubleClick={printHello} onMouseOver={printHello}>Click me</button>
    </div>)
}