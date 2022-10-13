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

const Services = [
  {
    name: 'مياه صحية',
    price: 50,
    is_fixed: true,
    description: 'مياه صحية على مدار 24 ساعة',
    is_open: true,
  },
  {
    name: 'مياه حلوة',
    price: 20,
    is_fixed: true,
    description: 'مياه حلوة صالحة للشرب',
    is_open: true,
  },
  {
    name: 'كهرباء ',
    price: 0,
    is_fixed: false,
    description: 'يتم قراءة عداد الكهرباء كل شهر',
    is_open: true,
  },
];

const Bills = [
  {
    total_price: 130,
    flat_id: 101,
    is_open: true,
    services: ['كهرباء', 'مياه صحية', 'مياه حلوة'],
  },
  {
    total_price: 200,
    flat_id: 102,
    is_open: true,
    services: ['كهرباء', 'مياه صحية', 'مياه حلوة'],
  },
  {
    total_price: 100,
    flat_id: 103,
    is_open: true,
    services: ['كهرباء', 'مياه صحية', 'مياه حلوة'],
  },
];

const Flats = [
  {
    area: 180,
    notes: 'شقة غربية',
    is_active: true,
    owner_id: 1,
  },
  {
    area: 160,
    notes: 'شقة جنوبية',
    is_active: true,
    owner_id: 2,
  },
  {
    area: 120,
    notes: 'شقة شرقية',
    is_active: true,
    owner_id: 3,
  },
];

export {
  Announcements, Advertisements, Services, Bills, Flats,
};
