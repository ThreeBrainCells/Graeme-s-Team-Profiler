const {Employee} = require('../library/Employee')
const {Engineer} = require('../library/Engineer')
const Me = new Engineer('Graeme', '455', 'teentrose', 'ThreeBrainCells')
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
describe('getGithub', ()=>{
    it('Should return the object Github', ()=>{
        expect(Me.getGithub()).toBe('ThreeBrainCells')
    })
})
describe('getRole', ()=>{
    it('Should return the object Role', ()=>{
    expect(Me.getRole()).toBe('Engineer')})
})