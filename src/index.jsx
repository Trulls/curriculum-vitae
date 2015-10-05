// import React from 'react';
var React = require('react');
import CV from './components/Cv.jsx';

const experiences = [
  // ************ WORK ************
  {
    type: 'WORK',
    from: '2014',
    to: '2014',
    at: 'Sumline, SUP46',
    title: 'Marketing Coordinator',
    subtitle: 'Summer Internship',
    url: 'http://sup46.com',
    remarks: [
      'Marketing strategies for startup',
      'Media consumption'
    ]
  },
  {
    type: 'WORK',
    from: '2015',
    to: '2015',
    at: 'SACO, Sveriges Akademikeers Centralorganisation',
    title: 'Investigator',
    subtitle: 'Summer Internship',
    url: 'http://sup46.com',
    remarks: [
      'Reasons for and effects of  for work life training in higher education'
    ]
  },
  {
    type: 'WORK',
    from: '2013',
    to: '2014',
    at: 'THS, Tekniska Högskolans Studentkår',
    title: 'President',
    subtitle: '',
    url: 'http://www.ths.kth.se/',
    remarks: [
      'Managing director',
      'Leadership',
      'Operational and organizational development',
      'Student representation',
      'Highter education politics'
    ]
  },
  {
    type: 'WORK',
    from: '2012',
    to: '2012',
    at: 'Ericsson AB',
    title: 'R&D Management Support',
    subtitle: 'Summer Internship',
    url: 'http://www.ericsson.com',
    remarks: [
      "Evaluation of organization culture's effect on new employees",
      'Evaluation of GROW, a Ericsson talent management prject'
    ]
  },
   {
    type: 'WORK',
    from: '2011',
    to: '2011',
    at: 'Ericsson AB',
    title: 'Software Developer',
    subtitle: 'Summer Internship',
    url: 'http://www.ericsson.com',
    remarks: [
      'Ericsson Networked Society',
      'Project management',
      'Knowledge transformation'
    ]
  },
  {
    type: 'WORK',
    from: '2010',
    to: '2013',
    at: 'Mattecoach på nätet',
    title: 'Coach',
    subtitle: '',
    url: 'http://www.mattecoach.se/#/about',
    remarks: [
      'E-learning',
      'Mathematics',
      'Pedagogics'
    ]
  },
  {
    type: 'WORK',
    from: '2014',
    to: '2014',
    at: 'Upgrades',
    title: 'Teacher',
    subtitle: 'Summer Internship',
    url: 'http://www.upgrades.se',
    remarks: [
      'Study technique',
      'High school pedagogics'
    ]
  },
  {
    type: 'WORK',
    from: '2015',
    at: 'TruePoint Sweden AB',
    title: 'Master Thesis Student',
    subtitle: '',
    url: 'http://www.truepoint.com/',
    remarks: [
      'Organizational development',
      'Leadership development',
      'IT development'
    ]
  },
  // ************ EDUCATION ************
  {
    type: 'EDUCATION',
    from: '2014',
    to: '2015',
    at: 'Hans Majestät Konungens Stiftelse Ungt Ledarskap',
    title: 'Value Based Leadership',
    subtitle: '',
    url: 'http://www.scouternasfolkhogskola.se/english/value-based-leadership/',
    remarks: [
      'Advanced leadership training program for young leaders'
    ]
  },
  {
    type: 'EDUCATION',
    from: '2008',
    to: '2015',
    at: 'KTH Royal Institute of Technology',
    title: 'Master of Science & Master of Education',
    subtitle: '',
    url: 'https://www.kth.se/student/kurser/program/CL/HT08/mal?l=en',
    remarks: [
      'Computer Science',
      'Mathematics',
      'Education'
    ]
  },
  {
    type: 'EDUCATION',
    from: '2013',
    to: '2013',
    at: 'Udayana University',
    title: 'Bali International Program on Asian Studies',
    subtitle: '',
    url: 'http://www.asiaexchange.org/en/study-abroad-programs/study-in-bali',
    remarks: [
      'Language: Indonesian',
      'South East Asian Economy'
    ]
  },
  {
    type: 'EDUCATION',
    from: '2005',
    to: '2008',
    at: 'Fredrika Bremergymnasiet',
    title: 'Natural Sciences',
    subtitle: '',
    url: 'fredrikabremergymnasierna.se',
    remarks: [
      'Specializing in Mathematics',
      'Languages: Spanish, English'
    ]
  },
  // ************ COMMISIONS OF TRUST ************
  {
    type: 'COMMISSION',
    from: '2013',
    to: '2015',
    at: 'KTH Royal Institute of Technology',
    title: 'Alumni Advisory Board',
    subtitle: '',
    url: 'https://www.kth.se/en/opportunities/',
    remarks: [
      'KTH Opportunities Fund'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2013',
    to: '2015',
    at: 'KTH Royal Institute of Technology',
    title: 'University Board',
    subtitle: '',
    url: 'https://www.kth.se/en/om/organisation/universitetsstyrelsen',
    remarks: [
      'KTH highest decision making body'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2013',
    to: '2015',
    at: 'SSCO Stockholm Studentkårers Centralorganisation',
    title: 'Board of Directors',
    subtitle: '',
    url: 'http://www.ssco.se/en/',
    remarks: [
      'Stockholm housing politics',
      'Organizational development',
      'Economic governance'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2014',
    to: '2015',
    at: 'THS Tekniska Högskolans Studentkår',
    title: 'Chairman, Board of Directors',
    subtitle: '',
    url: 'http://www.ths.kth.se',
    remarks: [
      'Organizational structures',
      'Strategic development',
      'Monitoring of operations'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2011',
    to: '2012',
    at: 'THS Local Chapter for Master of Science and of Education',
    title: 'Chairman of the Chapter',
    subtitle: '',
    url: 'http://www.cl-sektionen.se',
    remarks: [
      'Organizational development'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2012',
    to: '2012',
    at: 'THS Local Chapter for Master of Science and of Education',
    title: 'Vice Chairman of the International Board',
    subtitle: '',
    url: 'http://www.cl-sektionen.se',
    remarks: [
      'Internationalization of the chapter'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2011',
    to: '2011',
    at: 'THS Local Chapter for Master of Science and of Education',
    title: 'Vice Chairman of the Reception Board',
    subtitle: '',
    url: 'http://www.cl-sektionen.se',
    remarks: [
      'Project management'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2010',
    to: '2011',
    at: 'THS Local Chapter for Master of Science and of Education',
    title: 'Vice Chairman of the Social Welfare Board',
    subtitle: '',
    url: 'http://www.cl-sektionen.se',
    remarks: [
      'Event planning'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2004',
    to: '2012',
    at: 'Österhaninge Båtklubbs Ungdomssektion',
    title: 'Sailing Instructor and Board member',
    subtitle: '',
    url: 'http://www.obk.se',
    remarks: [
      'Group dynamics',
      'Leadership',
      'Project planning'
    ]
  },
  {
    type: 'COMMISSION',
    from: '2014',
    to: '2014',
    at: 'FFS Flemingsbergs Förenade Studentkårer',
    title: 'Board member',
    subtitle: '',
    url: '',
    remarks: [
      'Initial member',
      'Educational focus on regional development',
      'Building an organization'
    ]
  }
  // ************ OTHER ************
 
];

const details = {
  name: "Anna Johansson",
  email: "annaj9@kth.se",
  phone: "+46 (0) 73 033 55 85",
  imgurl: "http://s.gravatar.com/avatar/cdf8311d54ca1e120d559f2f791aef1d?s=80",
  address: {
    street: "Kungshamra 35/A",
    zip: "170 70",
    city: "Solna"
  },
  resources: [
    {title: 'LinkedIn', url: 'http://se.linkedin.com/in/trulls'},
    // {title: 'GitHub', url: 'https://github.com/Trulls'}
  ]
}

React.render(
  <CV experiences={experiences} details={details} />,
    document.getElementById('app')
);

