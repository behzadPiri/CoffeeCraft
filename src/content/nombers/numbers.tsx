export function toLocal(number: number | string): string {
    let numStr = String(number); // تبدیل به رشته
    if (numStr === '.') return '0.';
    if (numStr.startsWith('-')) return '0';

    // حذف نمادهای علمی و جایگزینی عدد کوچک با صفر
    if (numStr.includes('E') && parseFloat(numStr) < 1.0e-7) return '0';
    numStr = parseFloat(numStr).toString();

    // پاکسازی و تبدیل اعداد فارسی به انگلیسی
    numStr = p2e(numStr).replace(/[^\d.]|\.{2}|,/g, '');
    const [integerPart, decimalPart] = numStr.split('.');

    // قالب‌بندی عدد با استفاده از جداکننده هزارگان و محدودسازی اعشار به 8 رقم
    const formattedInt = Separate(integerPart);
    return decimalPart ? `${formattedInt}.${decimalPart.slice(0, 8)}` : formattedInt;
}

export function Separate(number: string): string {
    let numStr = number.replace(',', '');
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// تبدیل اعداد فارسی به انگلیسی
const p2e = (str: string): string =>
  str.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
