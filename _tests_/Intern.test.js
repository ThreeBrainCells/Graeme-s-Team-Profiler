const {Employee} = require('../library/Employee')
const {Intern} = require('../library/Intern')
const Me = new Intern('Graeme', '455', 'teentrose', 'My Home')
describe('getName', ()=>{
    it('Should return the object name', ()=>{
        expect(Me.getName()).toBe('Graeme')})
    })
describe('getID', ()=>{
    it('Should return the object ID', ()=>{
        expect(Me.getID()).toBe('455')
    })    
})
describe('getEmail', ()=>{
    it('Should return the object email', ()=>{
        expect(Me.getEmail()).toBe('teentrose')})
   
})
describe('getSchool', ()=>{
    it('Should return the object Office', ()=>{
        expect(Me.getSchool()).toBe('My Home')
    })
})
describe('getRole', ()=>{
    it('Should return the object Role', ()=>{
    expect(Me.getRole()).toBe('Intern')})
})