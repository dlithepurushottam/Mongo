const assert= require('assert');
const Student = require('../src/student');

describe('validation',()=>{
    it('name is required',()=>{
        const student= new Student({name:undefined})
        const result=student.validateSync();
        console.log(result);
        const { message }= result.errors.name
        assert( message === 'Name is required' );
    })
    it('name must be longer than 2 character',()=>{
        const newStudent= new Student({name:'Em'})
        const newResult=newStudent.validateSync()
        const {message} = newResult.errors.name
        assert(message === 'Name is too short')
    })
    it('prevent invalid records', done=>{
        const student= new Student({name:'Em'})
        student.save()
        .catch(validatationResult => {
            const { message }= validatationResult.errors.name
            assert (message === 'Name is too short')
            done()
        })
    })
})