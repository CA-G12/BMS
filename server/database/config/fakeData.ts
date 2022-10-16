const announcements = [
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

const advertisements = [
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
    flat_id: 1,
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
    flat_id: 2,
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
    flat_id: 3,
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
    flat_id: 4,
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
    owner_id: 1,
  },
  {
    flat_number: 102,
    area: 160,
    notes: 'شقة جنوبية',
    is_active: true,
    owner_id: 2,
  },
  {
    flat_number: 103,
    area: 120,
    notes: 'شقة شرقية',
    is_active: true,
    owner_id: 3,
  },
  {
    flat_number: 104,
    area: 180,
    notes: 'شقة شمالية',
    is_active: true,
    owner_id: 4,
  },
];

export {
  announcements, advertisements, services, bills, flats,
};
