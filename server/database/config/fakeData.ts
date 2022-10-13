const services = [
  {
    name: 'مياه صحية',
    price: '50$',
    is_fixed: true,
    description: 'مياه صحية على مدار 24 ساعة',
    is_open: true,
  },
  {
    name: 'مياه حلوة',
    price: '20$',
    is_fixed: true,
    description: 'مياه حلوة صالحة للشرب',
    is_open: true,
  },
  {
    name: 'كهرباء ',
    price: '0',
    is_fixed: false,
    description: 'يتم قراءة عداد الكهرباء كل شهر',
    is_open: true,
  },
];

const bills = [
  {
    total_price: '130$',
    flat_id: '101',
    is_open: true,
    services: ['كهرباء', 'مياه صحية', 'مياه حلوة'],
  },
  {
    total_price: '200$',
    flat_id: '102',
    is_open: true,
    services: ['كهرباء', 'مياه صحية', 'مياه حلوة'],
  },
  {
    total_price: '100$',
    flat_id: '103',
    is_open: true,
    services: ['كهرباء', 'مياه صحية', 'مياه حلوة'],
  },
];

const flats = [
  {
    area: '180m',
    notes: 'شقة غربية',
    is_active: true,
    owner_id: '1',
  },
  {
    area: '160m',
    notes: 'شقة جنوبية',
    is_active: true,
    owner_id: '2',
  },
  {
    area: '120m',
    notes: 'شقة شرقية',
    is_active: true,
    owner_id: '3',
  },
];

export {
  services, bills, flats,
};
