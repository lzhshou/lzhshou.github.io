import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh';

  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'APAAM Lab | Applied Process Analysis and Modeling',
        description: 'The homepage title'
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Applied Process Analysis and Modeling Laboratory at Sun Yat-sen University',
        description: 'The homepage description'
      })}
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <p className={styles.labAcronym}>APAAM</p>
              <h1 className={styles.labName}>
                <Translate id="homepage.labName">
                  应用过程分析与模拟实验室
                </Translate>
              </h1>
              <p className={styles.labNameEn}>
                Applied Process Analysis and Modeling Laboratory
              </p>
              <p className={styles.labAffiliation}>
                <Translate id="homepage.affiliation">
                  中山大学 土木工程学院
                </Translate>
              </p>
            </div>
          </div>
        </header>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.introText}>
              <Translate id="homepage.intro">
                APAAM实验室致力于计算岩土力学与多尺度数值模拟研究，开发先进的计算方法与软件工具，应用于过程仿真分析及基础设施防灾减灾研究。
              </Translate>
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className={styles.areasSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              <Translate id="homepage.researchAreas">研究方向</Translate>
            </h2>
            <div className={styles.areasGrid}>
              <div className={styles.areaCard}>
                <h3 className={styles.areaTitle}>
                  <Translate id="research.area1">离散元方法</Translate>
                </h3>
                <p className={styles.areaDesc}>
                  <Translate id="research.area1.desc">
                    SDF框架、傅里叶级数颗粒模型、机器学习加速、GPU并行计算
                  </Translate>
                </p>
              </div>
              <div className={styles.areaCard}>
                <h3 className={styles.areaTitle}>
                  <Translate id="research.area2">多尺度模拟</Translate>
                </h3>
                <p className={styles.areaDesc}>
                  <Translate id="research.area2.desc">
                    CFD-DEM耦合、多相流、孔隙介质流动、流固耦合
                  </Translate>
                </p>
              </div>
              <div className={styles.areaCard}>
                <h3 className={styles.areaTitle}>
                  <Translate id="research.area3">机器学习</Translate>
                </h3>
                <p className={styles.areaDesc}>
                  <Translate id="research.area3.desc">
                    生成式AI、形状表征、本构建模、计算加速
                  </Translate>
                </p>
              </div>
              <div className={styles.areaCard}>
                <h3 className={styles.areaTitle}>
                  <Translate id="research.area4">颗粒材料</Translate>
                </h3>
                <p className={styles.areaDesc}>
                  <Translate id="research.area4.desc">
                    CT图像重建、形态表征、生物胶结、多尺度建模
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.linksSection}>
          <div className={styles.container}>
            <div className={styles.linksGrid}>
              <Link to="/docs/research" className={styles.linkCard}>
                <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v8L4.5 18A3.5 3.5 0 0 0 7 23h10a3.5 3.5 0 0 0 2.5-5L14 10V2"/>
                  <path d="M8 2h8"/>
                </svg>
                <span className={styles.linkText}>
                  <Translate id="homepage.link.research">研究详情</Translate>
                </span>
              </Link>
              <Link to="/docs/publications" className={styles.linkCard}>
                <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <line x1="10" y1="9" x2="8" y2="9"/>
                </svg>
                <span className={styles.linkText}>
                  <Translate id="homepage.link.publications">学术发表</Translate>
                </span>
              </Link>
              <Link to="/docs/people" className={styles.linkCard}>
                <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span className={styles.linkText}>
                  <Translate id="homepage.link.people">团队成员</Translate>
                </span>
              </Link>
              <Link to="/docs/teaching" className={styles.linkCard}>
                <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span className={styles.linkText}>
                  <Translate id="homepage.link.teaching">招生信息</Translate>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactCard}>
              <h2 className={styles.contactTitle}>
                <Translate id="homepage.contact">联系我们</Translate>
              </h2>
              <p className={styles.contactInfo}>
                <svg className={styles.contactIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg> laizhengsh@mail.sysu.edu.cn
              </p>
              <p className={styles.contactAddress}>
                <Translate id="homepage.address">
                  珠海市香洲区唐家湾中山大学珠海校区海琴1号
                </Translate>
              </p>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
