 const PhoneValidationRules={
  required: {
    value: true,
    message: 'شماره موبایل الزامی است.',
  },
  pattern: {
    value: /^09[0-9]{9}$/,
    message: 'شماره موبایل وارد شده معتبر نمی باشد.',
  },
  minLength: {
    value: 11,
    message: 'شماره موبایل باید ۱۱ رقمی باشد',
  },
}
 export default PhoneValidationRules;
