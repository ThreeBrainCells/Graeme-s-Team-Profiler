const {Employee} = require('../library/Employee')
const {Manager} = require('../library/Manager')
const Me = new Manager('Graeme', '455', 'teentrose', 'My Home')
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
describe('getOffice', ()=>{
    it('Should return the object Office', ()=>{
        expect(Me.getOffice()).toBe('My Home')
    })
})
describe('getRole', ()=>{
    it('Should return the object Role', ()=>{
    expect(Me.getRole()).toBe('Manager')})
})