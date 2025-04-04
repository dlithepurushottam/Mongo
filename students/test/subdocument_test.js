const assert=require('assert')
const Student = require('../src/student');
const { title } = require('process');

describe('Subdocument', () => {
//  it('Creating a subdocument', done=>{
//     const jason = new Student({
//       name: 'Jason',
//       artiles:[{title:'JavaScript'}]
//     })
//     jason.save()
//     .then(()=>{
//       Student.findOne({name:'Jason'})
//       .then(student => {
//          assert(student.artiles[0].title === 'JavaScript')
//          done()
//       })
//     })
//  })

//  it('Adding new record',done => {
//    const jason = new Student({name:'Jason',articles: []})
//    jason.save()
//    .then(()=> Student.findOne({name:'Jason'}))
//    .then(student => {
//       student.articles.push({title: 'MongoDB'})
//       return student.save()
//     })
//    .then(() => Student.findOne({name:'Jason'}))
//    .then(student => {
//       assert(student.articles[0].title === 'MongoDB')
//       done()
//     })
//   })

   it('Remove the records', (done) => {
      const jason= new Student({name:'Jason',articles: [{title:'React-Native'}]})
      jason.save()
      .then(() => Student.findOne({name:'Jason'}))
      .then(student => {
         student.artiles[0].remove()
         return student.save()
      })
      .then(()=>Student.findOne({name:'Jason'}))
      .then(student =>{
         assert(student.artiles.length === 0)
         done()
      })
   })
})