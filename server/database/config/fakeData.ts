const complaints = [
  {
    title: 'شكوى رقم 1',
    description: 'تفاصيل الشكوى',
    creationDate: '00/00/0000',
    isSolved: true,
    userId: 1,
  },
  {
    title: 'شكوى رقم 2',
    description: 'تفاصيل الشكوى',
    creationDate: '00/00/0000',
    isSolved: true,
    userId: 2,
  },
  {
    title: 'شكوى رقم 3',
    description: 'تفاصيل الشكوى',
    creationDate: '00/00/0000',
    isSolved: true,
    userId: 3,
  },
];

const contactUs = [
  {
    name: 'محمد أمين',
    email: 'example@gmail.com',
    phone: '059-200-000',
    subject: 'حارس عمارة',
    description: 'تفاصيل الرسالة',
  },
  {
    name: 'محمد أمين',
    email: 'example@gmail.com',
    phone: '059-200-000',
    subject: 'حارس عمارة',
    description: 'تفاصيل الرسالة',
  },
  {
    name: 'محمد أمين',
    email: 'example@gmail.com',
    phone: '059-200-000',
    subject: 'حارس عمارة',
    description: 'تفاصيل الرسالة',
  },
];
// const AnnouncementsType = {
//   title: string,
//   startDate: string,
//   endDate: string,
// };
const Announcements = [
  {
    title: 'تنبيه لسكان البرج الكرام: فصل الطاقة الشمسية على الساعة السابعة مساء اليوم',
    start_date: '20/10/2022',
    end_date: '21/10/2022',
  },
  {
    title: '  تنبيه لسكان البرج الكرام: نعلمكم بأنه سيتم اليوم اغلاق المصعد لأغراض الصيانة على الساعة السادسة مساء لمدة ساعة',
    start_date: '20/10/2022',
    end_date: '21/10/2022',
  },
  {
    title: 'اليوم سيتم الاحتفال بذكرى انشاء البرج الثالثة الساعة السابعة مساء على الروف نتمنى حضوركم',
    start_date: '20/10/2022',
    end_date: '21/10/2022',
  },
];

const Advertisements = [
  {
    title: 'شقة متاحة',
    description: ' متاح لدينا شقة فارغة بمساحة 140 متر  مربع تحتوي على 3 غرف نوم ومطبخ على الطابق الرابع للمزيد من المعلومات يرجى التواصل',
    start_date: '20/10/2022',
    end_date: '30/10/2022',
    image: 'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'مطلوب  عامل نظافة',
    description: 'البرج بحاجة الى عامل نظافة براتب 800 شيكل شهريا ',
    start_date: '20/10/2022',
    end_date: '30/10/2022',
    image: 'https://images.pexels.com/photos/6197123/pexels-photo-6197123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'شقة متاحة ',
    description: 'متاح لدينا شقة فارغة بمساحة 190 متر  مربع تحتوي على 3 غرف نوم ومطبخ على الطابق الخامس للمزيد من المعلومات يرجى التواصل',
    start_date: '20/10/2022',
    end_date: '30/10/2022',
    image: 'https://images.pexels.com/photos/5417293/pexels-photo-5417293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },

];

export { Announcements, Advertisements,   complaints,
  contactUs };
