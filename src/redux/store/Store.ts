import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {withExtraArgument} from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ModalReducer} from '../reducers';

// تنظیمات ذخیره و بازیابی وضعیت با استفاده از redux-persist
const persistConfig = {
  key: 'root', // کلید برای ذخیره در حافظه محلی
  storage: AsyncStorage, //استفاده از AsyncStorage برای ذخیره‌سازی اطلاعات
  blacklist: ['ModalApp'], // لیست ردیوسرزی که نباید در حافظه محلی ذخیره شوند
};

// ترکیب تمامی ردیوسرز به یک ردیوسر اصلی
const rootReducer = combineReducers({
  ModalApp: ModalReducer,
});


// استفاده از persistReducer برای اعمال تنظیمات ذخیره و بازیابی
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ایجاد store برای مدیریت وضعیت با استفاده از createStore و applyMiddleware
export const store = createStore(
  persistedReducer,
  applyMiddleware(withExtraArgument(thunk)),
);

// ایجاد persistor برای مدیریت بازیابی وضعیت از حافظه محلی
export const persistor = persistStore(store);

// تعریف نوع‌ها برای استفاده در سایر قسمت‌های اپلیکیشن
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
