import IntlPolyfill from 'intl';
import './libs/vi-VN';

export const numberToVnd = number => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);

export const numberFormat = number => new Intl.NumberFormat('vi-VN').format(number);

export const thoudsandFormater = number => `${numberFormat(number / 1000)}K`;

export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
  const match = cleaned.match(/^(84|0)?(\d{3})(\d{2})(\d{4})$/);
  if (match) {
    const intlCode = (match[1] ? '+84 ' : '');
    return ['(', intlCode, ') ', match[2], ' ', match[3], ' ', match[4]].join('');
  }
  return phoneNumberString;
};

export const currencyFormatter = price => {
  if (typeof price === 'string') {
    return price;
  } else if (!price && price !== 0) {
    return '';
  }

  return new IntlPolyfill.NumberFormat(
    'vi-VN',
    {
      // maximumSignificantDigits: 3,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
    // noSymbol
    //   ? {
    //       style: 'currency',
    //       currency: 'VND',
    //     }
    //   : { maximumSignificantDigits: 3 }
  ).format(price);
};
