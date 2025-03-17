const assert=require("assert");
const Student=require("../src/student");

describe('delete the records',()=>{
    let  jason;

    beforeEach((done)=>{
        jason = new Student({name:'Jason'})
        jason.save()
        .then(() => done());
    })
    it('delete by  id',done =>{
        Student.findByIdAndDelete(jason._id)
        .then(()=>Student.findOne({name:'Jason'}))
        .then((student)=>{
            assert(student === null)
            done()
        })
    })
    it('delete by  name',done =>{
        Student.findOneAndDelete({name:'Jason'})
        .then(()=>Student.findOne({_id:jason._id}))
        .then((student)=>{
            assert(student === null)
            done()
        })
    })
    it('Delete Jason',done =>{
        Student.findOne({_id: jason._id})
        .then(()=>Student.findOne({name:'Rosa'}))
        .then((student)=>{
            assert(student === null)
            done()
       })
    })
})