import React from 'react';
import DefaultNavbarItem from '@theme-original/NavbarItem';
import {useLocation} from '@docusaurus/router';

// Translation dictionary for navigation labels
const translations = {
  zh: {
    'nav.people': '成员',
    'nav.research': '研究',
    'nav.publications': '论文',
    'nav.teaching': '教学',
    'nav.about': '联系',
    'footer.navigation': '导航',
    'footer.links': '学术链接',
    'footer.contact': '联系',
    'footer.email': '邮箱: laizhengsh@mail.sysu.edu.cn',
    'footer.address': '中山大学珠海校区海琴1号',
  },
  en: {
    'nav.people': 'People',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.teaching': 'Admissions',
    'nav.about': 'Contact',
    'footer.navigation': 'Navigation',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.email': 'Email: laizhengsh@mail.sysu.edu.cn',
    'footer.address': 'Haiqin Building 1, Zhuhai Campus',
  },
};

function translateLabel(label, locale) {
  if (!label || typeof label !== 'string') return label;

  // Check if label is a translation key
  const dict = translations[locale] || translations.zh;
  return dict[label] || label;
}

export default function NavbarItem(props) {
  const location = useLocation();

  // Determine current locale from URL
  const isEnglish = location.pathname.startsWith('/en/');
  const locale = isEnglish ? 'en' : 'zh';

  // Translate the label if it's a key
  const translatedProps = {
    ...props,
    label: translateLabel(props.label, locale),
  };

  return <DefaultNavbarItem {...translatedProps} />;
}
