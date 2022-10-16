const users = [
  {
    id: 1,
    first_name: 'أحمد',
    last_name: 'سعيد',
    email: 'jcotte0@people.com.cn',
    phone_number: '0591000100',
    roles: 'admin',
    hased_password: '$2y$10$MKpnqAAinu5wjl/MYRc3U.XApWTaEexvI4DMaJA.XZTou5lvpSPfu',
  },
  {
    id: 2,
    first_name: 'خالد',
    last_name: 'عمر',
    email: 'gbelt1@thetimes.co.uk',
    phone_number: '0591000200',
    roles: 'user',
    hased_password: '$2y$10$ROMcXqVNwbepoV6ZdTsTa.6/iego9a72vzSK70pF/S8Oxe/y8tLeO',
  },
  {
    id: 3,
    first_name: 'سمير',
    last_name: 'عبد الله',
    email: 'tlobe2@angelfire.com',
    phone_number: '498-722-9258',
    roles: 'user',
    hased_password: '$2y$10$NrRa5y454oIukcfU/iNDruP2iEJPm9UGlHqyhZiyd5mY1fy2vULkG',
  },
  {
    id: 4,
    first_name: 'مهند',
    last_name: 'محمد',
    email: 'mgravey3@slideshare.net',
    phone_number: '172-408-5906',
    roles: 'user',
    hased_password: '$2y$10$dOSPYdqciJCM9U10HiWtCOg9j6jpMD69rMPV/2LI/dDL4SxLATkNG',
  },
  {
    id: 5,
    first_name: 'تميم',
    last_name: 'سليم',
    email: 'cscogin4@nytimes.com',
    phone_number: '910-220-7086',
    roles: 'user',
    hased_password: '$2y$10$6Y1AcLQDLM7vSSu1A5dj9e61YgCFACEXoBP3NxJ4qX/1SeUUXLFtm',
  },
];

const payments = [
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 80 شيكل',
    user_id: 4,
  },
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 70 شيكل',
    user_id: 3,
  },
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 90 شيكل',
    user_id: 5,
  },
];

const announcements = [
  {
    title:
      'تنبيه لسكان البرج الكرام: فصل الطاقة الشمسية على الساعة السابعة مساء اليوم',
    start_date: '20/10/2022',
    end_date: '21/10/2022',
  },
  {
    title:
      '  تنبيه لسكان البرج الكرام: نعلمكم بأنه سيتم اليوم اغلاق المصعد لأغراض الصيانة على الساعة السادسة مساء لمدة ساعة',
    start_date: '20/10/2022',
    end_date: '21/10/2022',
  },
  {
    title:
      'اليوم سيتم الاحتفال بذكرى انشاء البرج الثالثة الساعة السابعة مساء على الروف نتمنى حضوركم',
    start_date: '20/10/2022',
    end_date: '21/10/2022',
  },
];

const advertisements = [
  {
    title: 'شقة متاحة',
    description:
      ' متاح لدينا شقة فارغة بمساحة 140 متر  مربع تحتوي على 3 غرف نوم ومطبخ على الطابق الرابع للمزيد من المعلومات يرجى التواصل',
    start_date: '20/10/2022',
    end_date: '30/10/2022',
    image:
      'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'مطلوب  عامل نظافة',
    description: 'البرج بحاجة الى عامل نظافة براتب 800 شيكل شهريا ',
    start_date: '20/10/2022',
    end_date: '30/10/2022',
    image:
      'https://images.pexels.com/photos/6197123/pexels-photo-6197123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'شقة متاحة ',
    description:
      'متاح لدينا شقة فارغة بمساحة 190 متر  مربع تحتوي على 3 غرف نوم ومطبخ على الطابق الخامس للمزيد من المعلومات يرجى التواصل',
    start_date: '20/10/2022',
    end_date: '30/10/2022',
    image:
      'https://images.pexels.com/photos/5417293/pexels-photo-5417293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

export {
  announcements, advertisements, users, payments,
};
