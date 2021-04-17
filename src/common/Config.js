export default {
  showStatusBar: true,
  LogoLoading: '',
  LogoLoading: require('../images/travels/onboardImage.jpg'),

  appFacebookId: '1788796174511520',

  intro: [
    {
      key: 'page1',
      title: 'Thực phẩm chất lượng',
      text:
        'Nguồn thực phẩm được tuyển chọn phong phú, tươi ngon có nguồn gốc xuất xứ rõ ràng và thông tin đầy đủ',
      icon: 'ios-basket',
      colors: ['#FB931B', '#009387'],
    },
    {
      key: 'page2',
      title: 'Công nghệ thông minh',
      text:
        'Công nghệ là nền tảng sức mạnh được áp dụng toàn diện trong các khâu giám sát, xử lý và vận hành',
      icon: 'md-checkbox-outline',
      colors: ['#FB931B', '#009387'],
    },
    {
      key: 'page3',
      title: 'Am hiểu tận tình',
      text:
        'Kinh nghiệm, sự am hiểu và tinh thần lắng nghe để phục vụ tạo nên sự gắn kết như tình thân',
      icon: 'ios-card',
      colors: ['#FB931B', '#009387'],
    },
  ],

  // define menu for profile tab
  ProfileSettings: [
    {
      label: 'MyOrder',
      routeName: 'MyOrdersScreen',
    },
    {
      label: 'WishList',
      routeName: 'WishListScreen',
    },
    {
      label: 'Notifications',
      routeName: 'MyMessagesScreen',
    },
    // {
    //   label: 'Development',
    //   routeName: 'DevSettingsScreen',
    // },
    // only support mstore pro
    // {
    //   label: 'PushNotification',
    // },
  ],
};
