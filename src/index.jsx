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
    remarks: [
      'Marketing strategies for a startup company',
      'Marketing strategies to launch a media application',
    ]
  },
  {
    type: 'WORK',
    from: '2013',
    to: '2014',
    at: 'THS, Tekniska Högskolans Studentkår',
    title: 'President',
    subtitle: 'Full time',
    url: 'http://www.ths.kth.se/',
    remarks: [
      'Managing director',
      'Operational development',
      'Student representation'
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
      "Evaluation of organizaiton culture's effect on new employees",
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
  // ************ COMMISIONS OF TRUST ************

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

