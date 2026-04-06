import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

// 客观数据
const personalInfo = {
  name: '赖正首',
  nameEn: 'Zhengshou Lai',
  title: '副教授、博士生导师',
  department: '中山大学 土木工程学院',
  email: 'laizhengsh@mail.sysu.edu.cn',
  orcid: '0000-0002-2378-9193',
  hIndex: 19,
  worksCount: 53,
};

const education = [
  { degree: '博士', field: '土木工程', school: '美国克莱姆森大学', period: '2015–2018' },
  { degree: '直博生', field: '工程力学', school: '中山大学', period: '2012–2014' },
  { degree: '学士', field: '交通工程', school: '中山大学', period: '2008–2012' },
];

const positions = [
  { title: '副教授', institution: '中山大学 土木工程学院', period: '2023–至今' },
  { title: '双聘教师', institution: '中山大学 香港高等研究院 应用数学研究中心', period: '2025–至今' },
  { title: '博士后（香江学者）', institution: '香港科技大学 / 中山大学', period: '2021–2023' },
  { title: '博士后', institution: '中山大学 智能工程学院', period: '2019–2021' },
];

const researchAreas = [
  '计算岩土力学',
  '离散元方法（DEM）',
  '多尺度模拟',
  '机器学习',
];

const selectedPublications = [
  {
    authors: 'Lai, Z., Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L.',
    year: '2026',
    title: 'Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems',
    journal: 'Journal of Computational Physics',
    volume: '554',
    pages: '114759',
  },
  {
    authors: 'Lai, Z., Zhao, J., Zhao, S., & Huang, L.',
    year: '2023',
    title: 'Signed distance field enhanced fully resolved CFD-DEM',
    journal: 'Computer Methods in Applied Mechanics and Engineering',
    volume: '414',
    pages: '116195',
  },
  {
    authors: 'Lai, Z., Chen, Q., & Huang, L.',
    year: '2021',
    title: 'Machine-learning-enabled discrete element method',
    journal: 'International Journal for Numerical and Analytical Methods in Geomechanics',
  },
];

const projects = [
  {
    role: '主持',
    agency: '广东省科学技术厅',
    type: '面上项目',
    title: '水合物固态流化开采中气—液—固三相流动机理与耦合数值方法研究',
    period: '2026–',
  },
  {
    role: '参与',
    agency: '广东省科学技术厅',
    type: '基础研究重大项目',
    title: '极端海洋环境下海上风电平台多场多尺度动力耦合灾变机理与减灾机制',
    period: '2025–',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: `${personalInfo.name} | ${personalInfo.department}`,
        description: 'The homepage title'
      })}
      description={translate({
        id: 'homepage.description',
        message: `${personalInfo.title}，${personalInfo.department}`,
        description: 'The homepage description'
      })}
    >
      <main className={styles.main}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.headerGrid}>
              <div className={styles.nameSection}>
                <h1 className={styles.name}>{personalInfo.name}</h1>
                <p className={styles.nameEn}>{personalInfo.nameEn}</p>
                <p className={styles.title}>{personalInfo.title}</p>
                <p className={styles.department}>{personalInfo.department}</p>
              </div>
              <div className={styles.contactSection}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href={`mailto:${personalInfo.email}`} className={styles.contactValue}>
                    {personalInfo.email}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>ORCID</span>
                  <a
                    href={`https://orcid.org/${personalInfo.orcid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    {personalInfo.orcid}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Google Scholar</span>
                  <a
                    href="https://scholar.google.com/citations?user=iiK6e1cAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{personalInfo.hIndex}</span>
                <span className={styles.statLabel}>h-index</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{personalInfo.worksCount}</span>
                <span className={styles.statLabel}>Publications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Left Column */}
              <div className={styles.leftColumn}>
                {/* Research Areas */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Research Areas</h2>
                  <ul className={styles.researchList}>
                    {researchAreas.map((area) => (
                      <li key={area} className={styles.researchItem}>{area}</li>
                    ))}
                  </ul>
                </section>

                {/* Education */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Education</h2>
                  <div className={styles.timeline}>
                    {education.map((edu, index) => (
                      <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelinePeriod}>{edu.period}</div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineTitle}>
                            {edu.degree}，{edu.field}
                          </div>
                          <div className={styles.timelineSubtitle}>{edu.school}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Positions */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Academic Positions</h2>
                  <div className={styles.timeline}>
                    {positions.map((pos, index) => (
                      <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelinePeriod}>{pos.period}</div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineTitle}>{pos.title}</div>
                          <div className={styles.timelineSubtitle}>{pos.institution}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className={styles.rightColumn}>
                {/* Selected Publications */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Selected Publications</h2>
                  <div className={styles.publications}>
                    {selectedPublications.map((pub, index) => (
                      <div key={index} className={styles.publication}>
                        <div className={styles.pubAuthors}>{pub.authors}</div>
                        <div className={styles.pubYear}>{pub.year}</div>
                        <div className={styles.pubTitle}>{pub.title}</div>
                        <div className={styles.pubJournal}>
                          {pub.journal}
                          {pub.volume && `, ${pub.volume}`}
                          {pub.pages && `, ${pub.pages}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Research Projects */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Research Projects</h2>
                  <div className={styles.projects}>
                    {projects.map((proj, index) => (
                      <div key={index} className={styles.project}>
                        <div className={styles.projectMeta}>
                          <span className={styles.projectRole}>{proj.role}</span>
                          <span className={styles.projectPeriod}>{proj.period}</span>
                        </div>
                        <div className={styles.projectTitle}>{proj.title}</div>
                        <div className={styles.projectAgency}>
                          {proj.agency} · {proj.type}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
