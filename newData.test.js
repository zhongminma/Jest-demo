import fetchData from './newData'
const testData = new fetchData()


beforeAll(()=>{
    console.log('Start')
})

beforeEach(()=>{
    console.log('before Each')
})


describe('A1 test',()=>{
    test('A1 methods 1',()=>{
        testData.totalPeople(1)
        testData.eat()
        console.log(testData.serve)
        expect(testData.serve).toEqual('A1eat')
    })

    test('A1 methods 2',()=>{
        testData.totalPeople(1)
        testData.drink()
        console.log(testData.serve)
        expect(testData.serve).toEqual('A1drink')
    })
})

