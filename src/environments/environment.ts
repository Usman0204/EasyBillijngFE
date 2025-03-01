// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// tslint:disable-next-line:prefer-const
let baseUrl = 'https://easy-billing-erp.herokuapp.com';
export const environment = {
  production: false,
  login: `${baseUrl}/login`,
  signup: `${baseUrl}/signup`,
  contract: `${baseUrl}/contract`,
  rfqref: `${baseUrl}/reqs`,
  addmanual: `${baseUrl}/manual`,
  addsupplier: `${baseUrl}/supplier`,
  addcustomer: `${baseUrl}/customer`,
  addcosting: `${baseUrl}/manual`,
  postcosting: `${baseUrl}/costing`,
  quotationssave: `${baseUrl}/quotes/documentdetails`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
