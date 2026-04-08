import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Translation dictionary
const translations = {
  zh: {
    'footer.navigation': '导航',
    'footer.links': '学术链接',
    'footer.contact': '联系',
    'footer.email': '邮箱: laizhengsh@mail.sysu.edu.cn',
    'footer.address': '中山大学珠海校区海琴1号',
    'nav.people': '成员',
    'nav.research': '研究',
    'nav.publications': '论文',
    'nav.teaching': '教学',
    'nav.about': '联系',
  },
  en: {
    'footer.navigation': 'Navigation',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.email': 'Email: laizhengsh@mail.sysu.edu.cn',
    'footer.address': 'Haiqin Building 1, Zhuhai Campus',
    'nav.people': 'People',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.teaching': 'Admissions',
    'nav.about': 'Contact',
  },
};

function translate(key, locale) {
  if (!key || typeof key !== 'string') return key;
  const dict = translations[locale] || translations.zh;
  return dict[key] || key;
}

export default function Footer() {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const isEnglish = location.pathname.startsWith('/en/');
  const locale = isEnglish ? 'en' : 'zh';

  const footerLinks = siteConfig.themeConfig.footer?.links || [];
  const copyright = siteConfig.themeConfig.footer?.copyright;

  return (
    <footer className="theme-layout-footer footer">
      <div className="container container-fluid">
        <div className="row footer__links">
          {footerLinks.map((linkItem, i) => (
            <div key={i} className="theme-layout-footer-column col footer__col">
              <div className="footer__title">{translate(linkItem.title, locale)}</div>
              <ul className="footer__items clean-list">
                {linkItem.items?.map((item, j) => (
                  <li key={j} className="footer__item">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link-item">
                        {translate(item.label, locale)}
                        <svg width="13.5" height="13.5" aria-hidden="true" className="iconExternalLink_nPIU">
                          <use href="#theme-svg-external-link" />
                        </svg>
                      </a>
                    ) : (
                      <Link to={item.to} className="footer__link-item">
                        {translate(item.label, locale)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {copyright && (
          <div className="footer__bottom text--center">
            <div className="footer__copyright">{copyright}</div>
          </div>
        )}
      </div>
    </footer>
  );
}
