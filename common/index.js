// 开发的环境分支

export const CURRENT_ENV = 'dev'
const ENVIRONMENTS = {
    dev: {
       BaseUrl: 'http://localhost:8000'
    },
    prod: {
      
    }
}
export const ENV = ENVIRONMENTS[`${CURRENT_ENV}`]