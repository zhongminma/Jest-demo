import { fetchData, fetchTwoData, fetchThreeData, fetchFourData } from './fetchData.js'

test('fetchData', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done()

    })
})

test('FetchTwoData', () => {
    fetchTwoData().then((res) => {
        expect(res.data).toEqual({
            success: true
        })
    })
})

test('FetchThreeData', () => {
    //expect.assertions(1)  // 断言，必须执行一次expect
    return fetchThreeData().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})

