/*
export function someMutation (state) {
}
*/

export function appendCompany (state, company) {
  state.companies.push(company)
}

export function addNew (state, companyId) {
  const company = state.companies.find(c => c.companyId === companyId)
  company.new += 1
}
