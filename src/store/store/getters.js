/*
export function someGetter (state) {
}
*/

export function getCompanies (state) {
  return state.companies
}

export function getNewSum (state) {
  return state.companies.reduce((accumulator, c) => {
    // console.log(accumulator, c)
    return accumulator + c.new
  }, 0)
}

export function getCompaniesByType (state) {
  return function (type) {
    return state.companies.filter(c => c.type === type)
  }
}
