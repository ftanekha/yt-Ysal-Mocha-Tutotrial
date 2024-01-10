import MyClass from '../src/myClass.js'
const myTestObj = new MyClass()
import {expect, assert} from 'chai'
import sinon from 'sinon'

describe(
    'Test suite', ()=>{
        //first test
        it(
            'tests the add method', ()=> {
                //use the chai Expect interface (method) for assertions
                //setup phase
                let result, expected
                //exercise phase
                result = myTestObj.add(1,2)
                expected = 1 + 2
                // verify phase
                expect(result).to.be.equal(expected)
                assert.equal(result, expected)
            }
        )
        //second test
        it(
            'spies on the add method', ()=> {
                //spy on 'add' method of myTestObj
                //setup
                const spy = sinon.spy(myTestObj, 'add')
                const arg1 = 10, arg2 = 10, arg3 = 15
                //exercise
                //call function (i.e add) twice
                myTestObj.callAnotherFunction(arg1, arg2)
                myTestObj.callAnotherFunction(arg1, arg3)
                //verify
                //SHOULD PASS as add was invoked twice by myTestObj.callAnotherFunction()
                sinon.assert.calledTwice(spy)
                //SHOULD PASS as add was invoked once by myTestObj.callAnotherFunction() with args(10, 15)
                sinon.assert.calledWithExactly(spy, 10, 15)
            }
        )
    }
)