import { dateFormat } from '../src/util'
describe('dateFormat测试',()=>{
  it('测试第二个参数为false',()=>{
    expect(dateFormat(new Date(),false)).toEqual({
      "year":new Date().getFullYear(),
      "month":new Date().getMonth()+1,
      "day":new Date().getDate(),
    })
  })
  it('测试第二个参数为true',()=>{
    expect(dateFormat(new Date(),true)).toEqual({
      "year":''+new Date().getFullYear(),
      "month":'0'+(new Date().getMonth()+1),
      "day":'0'+new Date().getDate(),
    })
  })

})