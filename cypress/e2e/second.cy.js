describe('This is my first test suite', ()=> {
    
    it('My First TC',()=>
    {
        expect(true).to.equal(true)
    })

    it('My Second Test',()=>{
        expect(true).to.equal(false)
    })

    it.skip('My Third Test',()=>{
        expect(true).to.equal(false)
    })

    it("My 4th Test")

})

describe('This is my third test suite', ()=> {
    
    it('My First TC',()=>
    {
        expect(true).to.equal(true)
    })

    it('My Second Test',()=>{
        expect(true).to.equal(false)
    })

    it.skip('My Third Test',()=>{
        expect(true).to.equal(false)
    })

    it("My 4th Test")

})