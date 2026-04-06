import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

// Personal info (same in both languages)
const personalInfo = {
  name: '赖正首',
  nameEn: 'Zhengshou Lai',
  email: 'laizhengsh@mail.sysu.edu.cn',
  orcid: '0000-0002-2378-9193',
  hIndex: 19,
  worksCount: 53,
};

export default function Home(): ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh';

  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Zhengshou Lai | School of Civil Engineering, SYSU',
        description: 'The homepage title'
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Associate Professor, School of Civil Engineering, Sun Yat-sen University',
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
                <p className={styles.title}>
                  <Translate id="homepage.position">
                    副教授、博士生导师
                  </Translate>
                </p>
                <p className={styles.department}>
                  <Translate id="homepage.department">
                    中山大学 土木工程学院
                  </Translate>
                </p>
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
                    <Translate id="homepage.viewProfile">View Profile</Translate>
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
                <span className={styles.statLabel}>
                  <Translate id="homepage.publications">Publications</Translate>
                </span>
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
                  <h2 className={styles.sectionTitle}>
                    <Translate id="homepage.researchAreas">Research Areas</Translate>
                  </h2>
                  <ul className={styles.researchList}>
                    <li className={styles.researchItem}>
                      <Translate id="research.area1">计算岩土力学</Translate>
                    </li>
                    <li className={styles.researchItem}>
                      <Translate id="research.area2">离散元方法（DEM）</Translate>
                    </li>
                    <li className={styles.researchItem}>
                      <Translate id="research.area3">多尺度模拟</Translate>
                    </li>
                    <li className={styles.researchItem}>
                      <Translate id="research.area4">机器学习</Translate>
                    </li>
                  </ul>
                </section>

                {/* Education */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <Translate id="homepage.education">Education</Translate>
                  </h2>
                  <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2015–2018</div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="edu.phd">博士，土木工程</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="edu.clemson">美国克莱姆森大学</Translate>
                        </div>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2012–2014</div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="edu.phdStudent">直博生，工程力学</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="edu.sysu1">中山大学</Translate>
                        </div>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2008–2012</div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="edu.bachelor">学士，交通工程</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="edu.sysu2">中山大学</Translate>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Positions */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <Translate id="homepage.positions">Academic Positions</Translate>
                  </h2>
                  <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2023–<Translate id="time.present">至今</Translate></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="position.professor">副教授</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="institution.civil">中山大学 土木工程学院</Translate>
                        </div>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2025–<Translate id="time.present">至今</Translate></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="position.affiliated">双聘教师</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="institution.hkias">中山大学 香港高等研究院 应用数学研究中心</Translate>
                        </div>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2021–2023</div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="position.postdoc1">博士后（香江学者）</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="institution.hkusysu">香港科技大学 / 中山大学</Translate>
                        </div>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelinePeriod}>2019–2021</div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>
                          <Translate id="position.postdoc2">博士后</Translate>
                        </div>
                        <div className={styles.timelineSubtitle}>
                          <Translate id="institution.intelligent">中山大学 智能工程学院</Translate>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className={styles.rightColumn}>
                {/* Selected Publications */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <Translate id="homepage.publicationsTitle">Selected Publications</Translate>
                  </h2>
                  <div className={styles.publications}>
                    <div className={styles.publication}>
                      <div className={styles.pubAuthors}>Lai, Z., Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L.</div>
                      <div className={styles.pubYear}>2026</div>
                      <div className={styles.pubTitle}>Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems</div>
                      <div className={styles.pubJournal}>Journal of Computational Physics, 554, 114759</div>
                    </div>
                    <div className={styles.publication}>
                      <div className={styles.pubAuthors}>Lai, Z., Zhao, J., Zhao, S., & Huang, L.</div>
                      <div className={styles.pubYear}>2023</div>
                      <div className={styles.pubTitle}>Signed distance field enhanced fully resolved CFD-DEM</div>
                      <div className={styles.pubJournal}>Computer Methods in Applied Mechanics and Engineering, 414, 116195</div>
                    </div>
                    <div className={styles.publication}>
                      <div className={styles.pubAuthors}>Lai, Z., Chen, Q., & Huang, L.</div>
                      <div className={styles.pubYear}>2021</div>
                      <div className={styles.pubTitle}>Machine-learning-enabled discrete element method</div>
                      <div className={styles.pubJournal}>International Journal for Numerical and Analytical Methods in Geomechanics</div>
                    </div>
                  </div>
                </section>

                {/* Research Projects */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <Translate id="homepage.projects">Research Projects</Translate>
                  </h2>
                  <div className={styles.projects}>
                    <div className={styles.project}>
                      <div className={styles.projectMeta}>
                        <span className={styles.projectRole}>
                          <Translate id="project.pi">主持</Translate>
                        </span>
                        <span className={styles.projectPeriod}>2026–</span>
                      </div>
                      <div className={styles.projectTitle}>
                        <Translate id="project.title1">水合物固态流化开采中气—液—固三相流动机理与耦合数值方法研究</Translate>
                      </div>
                      <div className={styles.projectAgency}>
                        <Translate id="project.gdst">广东省科学技术厅</Translate> · <Translate id="project.general">面上项目</Translate>
                      </div>
                    </div>
                    <div className={styles.project}>
                      <div className={styles.projectMeta}>
                        <span className={styles.projectRole}>
                          <Translate id="project.coPI">参与</Translate>
                        </span>
                        <span className={styles.projectPeriod}>2025–</span>
                      </div>
                      <div className={styles.projectTitle}>
                        <Translate id="project.title2">极端海洋环境下海上风电平台多场多尺度动力耦合灾变机理与减灾机制</Translate>
                      </div>
                      <div className={styles.projectAgency}>
                        <Translate id="project.gdst">广东省科学技术厅</Translate> · <Translate id="project.major">基础研究重大项目</Translate>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}
