 const FullNameValidationRules={
   required: { value: true, message: "نام و نام خانوادگی الزامی است." },
   pattern: {
     value: /^[a-zA-Z\u0600-\u06FF\s]+$/,
     message: "نام و نام خانوادگی معتبر نیست.",
   },
}
 export default FullNameValidationRules;
