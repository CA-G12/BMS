const Users = [{
  id: 1,
  first_name: 'Jules',
  last_name: 'Cotte',
  email: 'jcotte0@people.com.cn',
  phone_number: '318-530-6030',
  roles: 'ADMIN',
  hased_password: 'eDuvQFk2tKR',
}, {
  id: 2,
  first_name: 'Gwen',
  last_name: 'Belt',
  email: 'gbelt1@thetimes.co.uk',
  phone_number: '235-783-1177',
  roles: 'USER',
  hased_password: 'j1Lwy1VL3k',
}, {
  id: 3,
  first_name: 'Trumann',
  last_name: 'Lobe',
  email: 'tlobe2@angelfire.com',
  phone_number: '498-722-9258',
  roles: 'USER',
  hased_password: 'UuXPw5W7H',
}, {
  id: 4,
  first_name: 'Meta',
  last_name: 'Gravey',
  email: 'mgravey3@slideshare.net',
  phone_number: '172-408-5906',
  roles: 'USER',
  hased_password: '3ZzMhbjfY6',
}, {
  id: 5,
  first_name: 'Chryste',
  last_name: 'Scogin',
  email: 'cscogin4@nytimes.com',
  phone_number: '910-220-7086',
  roles: 'USER',
  hased_password: '1edtRkJrJz1',
}, {
  id: 6,
  first_name: 'Bettye',
  last_name: 'Frail',
  email: 'bfrail5@google.com.br',
  phone_number: '178-978-2984',
  roles: 'USER',
  hased_password: 'FBL5ZQ8',
}, {
  id: 7,
  first_name: 'Barbi',
  last_name: 'Justis',
  email: 'bjustis6@state.gov',
  phone_number: '153-758-3576',
  roles: 'USER',
  hased_password: 'rqynGoZr6XJ1',
}, {
  id: 8,
  first_name: 'Ebba',
  last_name: 'Saltsberg',
  email: 'esaltsberg7@naver.com',
  phone_number: '746-342-8706',
  roles: 'USER',
  hased_password: 'NOj9CbSR',
}, {
  id: 9,
  first_name: 'Cinnamon',
  last_name: 'McGairl',
  email: 'cmcgairl8@livejournal.com',
  phone_number: '839-484-5210',
  roles: 'USER',
  hased_password: 'a82tTF',
}, {
  id: 10,
  first_name: 'Cordell',
  last_name: 'Shannahan',
  email: 'cshannahan9@wunderground.com',
  phone_number: '916-108-1812',
  roles: 'USER',
  hased_password: 'VWqe6ZR',
}, {
  id: 11,
  first_name: 'Elisha',
  last_name: 'Nadin',
  email: 'enadina@php.net',
  phone_number: '900-620-7479',
  roles: 'USER',
  hased_password: 'CfBoa3bYZkPr',
}, {
  id: 12,
  first_name: 'Maxi',
  last_name: 'Bront',
  email: 'mbrontb@phpbb.com',
  phone_number: '959-720-9384',
  roles: 'USER',
  hased_password: 'bVVXcX3nLF',
}, {
  id: 13,
  first_name: 'Star',
  last_name: 'Scoggans',
  email: 'sscoggansc@noaa.gov',
  phone_number: '521-649-4149',
  roles: 'USER',
  hased_password: 'D5PQW7u7jv3',
}, {
  id: 14,
  first_name: 'Eben',
  last_name: 'Johnigan',
  email: 'ejohnigand@blinklist.com',
  phone_number: '148-222-5388',
  roles: 'USER',
  hased_password: 'bVDwvHM',
}, {
  id: 15,
  first_name: 'Aimil',
  last_name: 'Binks',
  email: 'abinkse@flickr.com',
  phone_number: '907-611-5915',
  roles: 'USER',
  hased_password: 'OT3k2suBFF9X',
}, {
  id: 16,
  first_name: 'Lyn',
  last_name: 'Bridge',
  email: 'lbridgef@columbia.edu',
  phone_number: '813-752-6434',
  roles: 'USER',
  hased_password: 'L1g4CHQWq5',
}, {
  id: 17,
  first_name: 'Ana',
  last_name: 'Jayme',
  email: 'ajaymeg@nifty.com',
  phone_number: '588-244-3150',
  roles: 'USER',
  hased_password: 'ojldRgoVO',
}, {
  id: 18,
  first_name: 'Barnard',
  last_name: 'Ivanyushkin',
  email: 'bivanyushkinh@behance.net',
  phone_number: '390-816-5923',
  roles: 'USER',
  hased_password: 'zBZRkc7qlYA',
}, {
  id: 19,
  first_name: 'Jeanelle',
  last_name: 'Stranio',
  email: 'jstranioi@ibm.com',
  phone_number: '405-527-5827',
  roles: 'USER',
  hased_password: 'kvd7ziyp',
}, {
  id: 20,
  first_name: 'Gwenneth',
  last_name: 'Allridge',
  email: 'gallridgej@latimes.com',
  phone_number: '330-739-1479',
  roles: 'USER',
  hased_password: 'zgGeNhGc',
}];

const Reviews = [{
  id: 1,
  title: 'Financial Advisor',
  description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  points: 2,
  is_shown: false,
  user_id: 15,
}, {
  id: 2,
  title: 'Project Manager',
  description: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  points: 2,
  is_shown: false,
  user_id: 14,
}, {
  id: 3,
  title: 'Software Engineer I',
  description: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
  points: 0,
  is_shown: false,
  user_id: 1,
}, {
  id: 4,
  title: 'VP Product Management',
  description: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  points: 2,
  is_shown: false,
  user_id: 20,
}, {
  id: 5,
  title: 'Web Designer IV',
  description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  points: 0,
  is_shown: true,
  user_id: 14,
}, {
  id: 6,
  title: 'Assistant Media Planner',
  description: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
  points: 4,
  is_shown: true,
  user_id: 20,
}, {
  id: 7,
  title: 'Occupational Therapist',
  description: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  points: 2,
  is_shown: false,
  user_id: 10,
}, {
  id: 8,
  title: 'Data Coordiator',
  description: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
  points: 3,
  is_shown: true,
  user_id: 3,
}, {
  id: 9,
  title: 'Geologist I',
  description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  points: 2,
  is_shown: true,
  user_id: 15,
}, {
  id: 10,
  title: 'Web Developer I',
  description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  points: 0,
  is_shown: true,
  user_id: 17,
}, {
  id: 11,
  title: 'Product Engineer',
  description: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
  points: 4,
  is_shown: false,
  user_id: 3,
}, {
  id: 12,
  title: 'Sales Representative',
  description: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  points: 1,
  is_shown: true,
  user_id: 12,
}, {
  id: 13,
  title: 'Senior Quality Engineer',
  description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
  points: 3,
  is_shown: false,
  user_id: 8,
}, {
  id: 14,
  title: 'Senior Cost Accountant',
  description: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  points: 5,
  is_shown: false,
  user_id: 16,
}, {
  id: 15,
  title: 'Nurse',
  description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
  points: 5,
  is_shown: false,
  user_id: 7,
}, {
  id: 16,
  title: 'Assistant Manager',
  description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  points: 2,
  is_shown: false,
  user_id: 18,
}, {
  id: 17,
  title: 'Information Systems Manager',
  description: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
  points: 1,
  is_shown: true,
  user_id: 13,
}, {
  id: 18,
  title: 'Statistician I',
  description: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
  points: 2,
  is_shown: false,
  user_id: 13,
}, {
  id: 19,
  title: 'Senior Developer',
  description: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  points: 0,
  is_shown: true,
  user_id: 8,
}, {
  id: 20,
  title: 'General Manager',
  description: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  points: 3,
  is_shown: true,
  user_id: 4,
}];

const Transactions = [{
  title: 'DeveloperI',
  description: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  user_id: 8,
},
{
  title: 'SeniorEditor',
  description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  user_id: 9,
},
];

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

export {
  Announcements, Advertisements, Users, Reviews, Transactions,
};
