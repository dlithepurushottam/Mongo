const assert = require("assert");
const Student = require("../src/student");

describe('Updating records', function () {
    let jason;
    let jason2;


    beforeEach((done) => {
        jason = new Student({ name: 'Jason',studentNumber:2500,articleCount:5, grade:10 });
        jason.save()
            .then(() => done())
    });

    // it('set and save', (done) => {
    //     console.log("Before update:", jason);
    //     jason.set('name', 'Alex');

    //     jason.save()
    //         .then(() => Student.find({}))
    //         .then((students) => {
    //             console.log("After update:", students);
    //             assert(students[0].name === "Alex"); 
    //             done();
    //         })
    // });

   
    // it('update many of the jasons',async()=>{
    //     const student = await Student.updateMany({name:'Jason'},{studentNumber:3000})
    //     const res =await Student.find({})
    //     assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000)
    //     console.log(res)
    // })

    it('Update grades',async()=>{
        const artCont =await Student.findOne({name:'Jason'})
        const student = await Student.updateOne({name:'Jason'},{$mul:{grade:artCont.articleCount}})
        const res= await Student.find({name:'Jason'})
        assert(res[0].grade === 50)
        console.log(res)
    })
});
