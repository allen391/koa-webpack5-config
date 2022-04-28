/**
 * log encapsulation
 * @author Allen Chen
 */

const log4j = require('./log4j');
const CODE = {
  SUCCESS: 200, // success
  PARAM_ERROR: 10001, // Parameter error
  USER_ACCOUNT_ERROR: 20001, // Wrong account or password
  USER_LOGIN_ERROR: 30001, // The user is not logged in
  BUSINESS_ERROR: 40001, // Business request failed
  AUTH_ERROR: 50001, // Authentication failed or TOKEN Be overdue
};
module.exports = {
  /**
   * Paging structure encapsulation
   * @param { number } pageNum Number of pages
   * @param { number } pageSize The current page number
   */
  pager({ pageNum = 1, pageSize = 1 }) {
    pageNum *= 1;
    pageSize *= 1;
    const skipIndex = (pageNum - 1) * pageSize; // Number of pages currently turned
    return {
      page: {
        pageNum,
        pageSize,
      },
      skipIndex,
    };
  },
  // Successful callback
  success(data = '', msg = '', code = CODE.SUCCESS) {
    log4j.debug(data);
    return { code, data, msg };
  },
  // Failed callback
  fail(data = '', msg = '', code = CODE > BUSINESS_ERROR) {
    log4j.debug(msg);
    return { code, data, msg };
  },
  // Expose the status code
  CODE,
};
