// import axios from "axios";
// import {toast} from "@backpackapp-io/react-native-toast";
// import {Width} from "../width_height/width_height";
//
// const toastError = (title) => (
//     toast.error(title, {
//         duration: 3000,
//         width: Width - 32,
//         disableShadow: true,
//     })
// );
// const instance = axios.create({
//     timeout: 20000,
// });
//
// instance.dispatch = null;
// instance.setLogin = null;
// instance.clearData = null;
// axios.navigation = null;
// instance.CommonActions = null;
//
// instance.interceptors.response.use((res) => {
//         const {data} = res;
//         if (!data?.success && data?.message) {
//             toastError(data.message);
//             return Promise.reject();
//         }
//         return data;
//     },
//     (err) => {
//         if (typeof err.response?.status == "undefined") {
//         } else {
//             const status = err.response.status;
//             switch (status) {
//                 case 401:
//                     handleUnauthorized(err);
//                     break;
//                 case 403:
//                     handleForbidden(err);
//                     break;
//                 case 404:
//                     handleNotFound(err);
//                     break;
//                 case 422:
//                     handleUnprocessableEntity(err.response.data.errors);
//                     break;
//                 case 429:
//                     handleToManyRequest(err);
//                     break;
//                 case 500:
//                     handleServerError(err);
//                     break;
//                 default:
//                     handleTimeoutError();
//                     break;
//             }
//         }
//
//
//         return Promise.reject(err);
//     });
//
// const handleUnprocessableEntity = (messages) => {
//     let errors = "";
//     for (const field in messages) {
//         if (errors.length != 0)
//             errors += "\n";
//         errors += messages[field][0];
//     }
//     toastError(errors);
// };
//
// const handleTimeoutError = () => {
// };
//
// const handleUnauthorized = () => {
//     //TODO: handle UnAuthorized
//     toast.error("مجدد وارد حساب کاربری خود بشوید");
//     instance.dispatch(instance.clearData());
//     instance.dispatch(instance.setLogin(false));
//     instance.navigation.dispatch(
//         instance.CommonActions.reset({
//             index: 0,
//             routes: [
//                 {
//                     name: "Authentication",
//                     params: {screen: "Splash"}
//                 },
//             ],
//         }),
//     );
// };
//
// const handleNotFound = () => {
//     // toast.error(t('common:serverError'))
// };
//
// const handleForbidden = () => {
//     //TODO: handle Forbidden
// };
//
// const handleServerError = () => {
//     //TODO: handle Server Error
// };
//
// const handleToManyRequest = () => {
//     //TODO: handle TO Many Request
// };
//
// export default instance;
