const assert= require("assert");
const Student = require("../src/student");

describe("Create the first data",()=>{
    it("Save the student",()=>{
        const jason=new Student({name:"Json"});
        jason.save()
    })
})