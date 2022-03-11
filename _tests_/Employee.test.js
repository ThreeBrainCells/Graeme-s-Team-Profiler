const {Employee} = require('../library/Employee')
    
const Me = new Employee('Graeme', '455', 'teentrose')
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
describe('getRole', ()=>{
    it('Should return the object Role', ()=>{
    expect(Me.getRole()).toBe('Employee')})
})