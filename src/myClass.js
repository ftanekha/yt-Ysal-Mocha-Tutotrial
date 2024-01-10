class MyClass{
    constructor(){
        console.log('initiate')
    }

    add(arg1, arg2){
        let result;
        result = arg1 + arg2
        return result
    }

    callAnotherFunction(arg1, arg2){
        const result = this.add(arg1, arg2)
        return result
    }
}

export default MyClass