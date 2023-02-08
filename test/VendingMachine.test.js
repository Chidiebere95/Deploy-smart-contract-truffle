const vendingMachine=artifacts.require('VendingMachine');

contract('VendyMachine',(accounts)=>{
    before(async ()=>{
        instancerer=await vendingMachine.deployed()
       const hello='hello worlds'
        console.log(hello);
    })

    it('ensures blah blah blah',async()=>{
        let balance = await instancerer.getVendingMachineBalance();
        let num=500
        assert.equal(num,500,'it should be 500')
    })
})