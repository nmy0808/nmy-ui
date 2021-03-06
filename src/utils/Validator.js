/**
 * 表单验证
 * @param {Object} dates 数据
 * @param {Array} rules 规则
 * @returns {Object} error对象
 */
export class Validator {
  static add(name, fn) {
    this.prototype[name] = fn;
  }

  validate(dates, rules) {
    const error = {};
    const dateObj = dates;
    const ruleArr = rules;
    ruleArr.forEach((rule) => {
      const { name } = rule;
      const value = dateObj[name];
      // 验证必填 (优先级最高)
      if (rule.required) {
        const errorMsg = this.required(value);
        if (errorMsg) {
          ensureObject(error, name);
          error[name].required = errorMsg;
          return;
        }
      }
      // 遍历用户制定的所有规则
      const validateKeys = Object.keys(rule).filter((ruleName) => ruleName !== 'name' && ruleName !== 'required');
      validateKeys.forEach((ruleName) => {
        if (!this[ruleName]) {
          throw new Error(`没有该检查器: ${ruleName}`);
        } else {
          const errorMsg = this[ruleName](value, rule[ruleName]);
          if (errorMsg) {
            ensureObject(error, name);
            error[name][ruleName] = errorMsg;
          }
        }
      });
    });
    return error;
  }

  // 预定义的规则
  required(value) {
    if (!value && value !== 0) {
      return '必填';
    }
    return null;
  }

  pattern(value, pattern) {
    let reg = pattern;
    if (pattern === 'email') {
      reg = /.+@.+/g;
    }
    if (pattern === 'phone') {
      reg = /^\d{11}$/g;
    }
    const regRes = reg.test(value);
    if (!regRes) {
      return '格式不正确';
    }
    return null;
  }

  minLength(value, minLength) {
    if (value.length < minLength) {
      return '字体太短';
    }
    return null;
  }
}
// 确保该key的值是对象
function ensureObject(obj, key) {
  const objCopy = obj;
  const keyCopy = key;
  if (!objCopy[keyCopy]) {
    objCopy[keyCopy] = {};
  }
}