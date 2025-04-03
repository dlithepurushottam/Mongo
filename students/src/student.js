const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const ArticleSchema = require('./article_schema');

const StudentSchema=new Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        validate:{
            validator:(name) => name.length > 2 ,
            message: 'Name is too short'
        }
    },
    studentNumber:Number,
    articleCount:Number,
    grade:Number,
    artiles:[ArticleSchema],
})

const Student=mongoose.model("student",StudentSchema);

module.exports = Student;