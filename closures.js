// Understanding closures
// Simple closure
function MyParentFunction() {
    let parentproperty = 'parentproperty';
    let MyChildFunction = () => {
        console.log(parentproperty);
    };
    MyChildFunction();
}
MyParentFunction();