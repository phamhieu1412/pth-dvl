 import { Dimensions, Platform } from 'react-native';
 import { Languages } from '../common';
 
 const { width, height } = Dimensions.get('window');
 const minTabletWidth = 581;
 const isIphoneX =
   Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height >= 812 || width >= 812);
 const isTablet = Platform.isPad || (width >= minTabletWidth && height >= minTabletWidth);
 
 const Constants = {
   devDomain: 'https://vlhb-store-api.herokuapp.com',
   appStoreId: '',
   bundleId: '',
   isIphoneX,
   isTablet,
   minTabletWidth,
   VND: '₫',
   isoDateFormat: 'YYYY-MM-DD',
   defaultISOTime: 'T07:00:01Z',
   shortDateFormat: 'D-M-YY',
   dateFormat: 'DD-MM-YYYY',
   dateTimeFormat: 'DD-MM-YYYY HH:mm',
   timeFormat: 'HH:mm',
   dateOptions: {
     all: { key: 'all', label: Languages.AllDate },
     tomorrow: { key: 'tomorrow', label: 'Ngày mai' },
     today: { key: 'today', label: 'Hôm nay' },
     yesterday: { key: 'yesterday', label: 'Hôm qua' },
     '2dayago': { key: '2dayago', label: 'Hôm kia' },
     custom: { key: 'custom', label: 'Ngày cụ thể' },
   },
   dateRangeOptions: {
     all: { key: 'all', label: Languages.AllDate },
     tomorrow: { key: 'tomorrow', label: 'Ngày mai' },
     today: { key: 'today', label: 'Hôm nay' },
     yesterday: { key: 'yesterday', label: 'Hôm qua' },
     // '2dayago': { key: '2dayago', label: 'Hôm kia' },
     this_week: { key: 'this_week', label: 'Tuần này' },
     last_week: { key: 'last_week', label: 'Tuần trước' },
     this_month: { key: 'this_month', label: 'Tháng này' },
     last_month: { key: 'last_month', label: 'Tháng trước' },
     year_to_date: { key: 'year_to_date', label: 'Năm nay' },
     custom: { key: 'custom', label: 'Ngày cụ thể' },
   },
   datePeriod: {
     daily: 'daily',
     weekly: 'weekly',
     monthly: 'monthly',
   },
   pageSize: 20,
   fontFamily: 'Roboto-Regular',
   fontHeader: 'Roboto-Regular',
   SplashScreen: {
     Duration: 2000,
   },
   EmitCode: {
     Toast: 'toast',
   },
   Dimension: {
     ScreenWidth(percent = 1) {
       return Dimensions.get('window').width * percent;
     },
     ScreenHeight(percent = 1) {
       return Dimensions.get('window').height * percent;
     },
   },
   Window: {
     width,
     height: Platform.OS !== 'ios' ? height : height - 20,
   },
 };
 
 export default Constants;
 