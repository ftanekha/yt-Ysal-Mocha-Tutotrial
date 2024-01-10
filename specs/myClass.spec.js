import MyClass from '../src/myClass.js'
const myTestObj = new MyClass()
import {expect} from 'chai'

describe(
    'Test suit', ()=>{
        it(
            'Test the add method', ()=> {
                //use the chai Expect interface (method) for assertions
                //setup
                const result = myTestObj.add(1,2)
                //exercise
                expect(result).to.be.equal(3)
            }
        )
    }
)