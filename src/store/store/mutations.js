/*
export function someMutation (state) {
}
*/

export function appendCompany (state, company) {
  state.companies.push(company)
}

export function addNew (state, companyId) {
  console.log('ttt', companyId)
  const company = state.companies.find(c => c.companyId === companyId)
  Object.assign(company, { new: company.new + 1 })
  console.log(state.companies)
}
