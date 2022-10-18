const users = [
  {
    id: 1,
    first_name: 'أحمد',
    last_name: 'سعيد',
    email: 'jcotte0@people.com.cn',
    phone_number: '0591000100',
    role: 'admin',
    hashed_password: '$2y$10$MKpnqAAinu5wjl/MYRc3U.XApWTaEexvI4DMaJA.XZTou5lvpSPfu',
  },
  {
    id: 2,
    first_name: 'خالد',
    last_name: 'عمر',
    email: 'gbelt1@thetimes.co.uk',
    phone_number: '0591000200',
    role: 'user',
    hashed_password: '$2y$10$ROMcXqVNwbepoV6ZdTsTa.6/iego9a72vzSK70pF/S8Oxe/y8tLeO',
  },
  {
    id: 3,
    first_name: 'سمير',
    last_name: 'عبد الله',
    email: 'tlobe2@angelfire.com',
    phone_number: '498-722-9258',
    role: 'user',
    hashed_password: '$2y$10$NrRa5y454oIukcfU/iNDruP2iEJPm9UGlHqyhZiyd5mY1fy2vULkG',
  },
  {
    id: 4,
    first_name: 'مهند',
    last_name: 'محمد',
    email: 'mgravey3@slideshare.net',
    phone_number: '172-408-5906',
    role: 'user',
    hashed_password: '$2y$10$dOSPYdqciJCM9U10HiWtCOg9j6jpMD69rMPV/2LI/dDL4SxLATkNG',
  },
  {
    id: 5,
    first_name: 'تميم',
    last_name: 'سليم',
    email: 'cscogin4@nytimes.com',
    phone_number: '910-220-7086',
    role: 'user',
    hashed_password: '$2y$10$6Y1AcLQDLM7vSSu1A5dj9e61YgCFACEXoBP3NxJ4qX/1SeUUXLFtm',
  },
];

const payments = [
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 80 شيكل',
    BillId: 4,
  },
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 70 شيكل',
    BillId: 3,
  },
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 90 شيكل',
    BillId: 1,
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

const complaints = [
  {
    title: 'شكوى رقم 1',
    description: 'تفاصيل الشكوى',
    is_solved: true,
    UserId: 1,
  },
  {
    title: 'شكوى رقم 2',
    description: 'تفاصيل الشكوى',
    is_solved: true,
    UserId: 2,
  },
  {
    title: 'شكوى رقم 3',
    description: 'تفاصيل الشكوى',
    is_solved: true,
    UserId: 3,
  },
];

const contactUs = [
  {
    name: 'محمد أمين',
    email: 'examplegmail.com',
    phone: '059200000',
    subject: 'حارس عمارة',
    description: 'تفاصيل الرسالة',
  },
  {
    name: 'محمد أمين',
    email: 'example@gmail.com',
    phone: '059200000',
    subject: 'حارس عمارة',
    description: 'تفاصيل الرسالة',
  },
  {
    name: 'محمد أمين',
    email: 'example@gmail.com',
    phone: '059200000',
    subject: 'حارس عمارة',
    description: 'تفاصيل الرسالة',
  },
];
const services = [
  {
    name: 'خدمات عامة',
    price: 100,
    is_fixed: true,
    description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
    is_open: true,
  },
  {
    name: 'مياه صحية',
    price: 0,
    is_fixed: false,
    description: 'مياه صحية على مدار 24 ساعة',
    is_open: true,
  },
  {
    name: 'مياه حلوة',
    price: 0,
    is_fixed: false,
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
  {
    name: 'مصف سيارات',
    price: 25,
    is_fixed: true,
    description: 'مصف سيارات لسكان البرج',
    is_open: true,
  },
];

const bills = [
  {
    total_price: 315,
    FlatId: 1,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 50,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 20,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 120,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 370,
    FlatId: 2,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 70,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 15,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 160,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 255,
    FlatId: 3,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 40,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 10,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 80,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 355,
    FlatId: 4,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 50,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 40,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 140,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },

];

const flats = [
  {
    flat_number: 101,
    area: 180,
    notes: 'شقة غربية',
    is_active: true,
    UserId: 1,
  },
  {
    flat_number: 102,
    area: 160,
    notes: 'شقة جنوبية',
    is_active: true,
    UserId: 2,
  },
  {
    flat_number: 103,
    area: 120,
    notes: 'شقة شرقية',
    is_active: true,
    UserId: 3,
  },
  {
    flat_number: 104,
    area: 180,
    notes: 'شقة شمالية',
    is_active: true,
    UserId: 4,
  },
];

export {
  announcements, advertisements, services, bills, flats, users, payments,
  complaints, contactUs,
};
