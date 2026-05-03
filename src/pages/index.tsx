import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home(): ReactNode {
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
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <p className={styles.heroEyebrow}>APAAM</p>
              <h1 className={styles.heroTitle}>
                <Translate id="homepage.labName">
                  应用过程分析与模拟实验室
                </Translate>
              </h1>
              <p className={styles.heroLead}>
                Applied Process Analysis and Modeling Laboratory
              </p>
              <p className={styles.heroAffiliation}>
                <Translate id="homepage.affiliation">
                  中山大学 土木工程学院
                </Translate>
              </p>
            </div>
          </div>
        </header>

        <section className={styles.scope} aria-labelledby="scope-heading">
          <div className={styles.container}>
            <h2 id="scope-heading" className={styles.sectionTitle}>
              <Translate id="homepage.scopeHeading">实验室简介</Translate>
            </h2>
            <p className={styles.sectionLead}>
              <Translate id="homepage.intro">
                APAAM实验室致力于计算岩土力学与多尺度数值模拟研究，开发先进的计算方法与软件工具，应用于复杂多物理过程的数值建模、不确定性量化及数据驱动计算研究。
              </Translate>
            </p>
          </div>
        </section>

        <section className={styles.pillars} aria-labelledby="pillars-heading">
          <div className={styles.container}>
            <h2 id="pillars-heading" className={styles.sectionTitle}>
              <Translate id="homepage.researchAreas">研究方向</Translate>
            </h2>
            <p className={styles.sectionSubtitle}>
              <Translate id="homepage.researchAreasSubtitle">
                计算岩土、离散元与多物理耦合——算法、软件与工程应用。
              </Translate>
            </p>
            <div className={styles.pillarGrid}>
              <Link to="/docs/research/machine-learning" className={styles.pillarCard}>
                <div className={styles.pillarImage}>
                  <img src="/img/research/machine-learning.png" alt="" loading="lazy" />
                </div>
                <h3 className={styles.pillarTitle}>
                  <Translate id="research.area1">颗粒材料智能表征</Translate>
                </h3>
                <p className={styles.pillarBody}>
                  <Translate id="research.area1.desc">
                    深度学习图像重建、虚拟颗粒生成、数据驱动本构
                  </Translate>
                </p>
              </Link>
              <Link to="/docs/research/algorithms" className={styles.pillarCard}>
                <div className={styles.pillarImage}>
                  <img src="/img/research/algorithms.png" alt="" loading="lazy" />
                </div>
                <h3 className={styles.pillarTitle}>
                  <Translate id="research.area2">异形颗粒离散元</Translate>
                </h3>
                <p className={styles.pillarBody}>
                  <Translate id="research.area2.desc">
                    SDF统一接触理论、全流程数字化、机器学习加速
                  </Translate>
                </p>
              </Link>
              <Link to="/docs/research/multiphase" className={styles.pillarCard}>
                <div className={styles.pillarImage}>
                  <img src="/img/research/multiphase.png" alt="" loading="lazy" />
                </div>
                <h3 className={styles.pillarTitle}>
                  <Translate id="research.area3">多尺度流固耦合</Translate>
                </h3>
                <p className={styles.pillarBody}>
                  <Translate id="research.area3.desc">
                    混合解析CFD-DEM、相变-破碎耦合、多相流失稳
                  </Translate>
                </p>
              </Link>
              <Link to="/docs/research/random-field" className={styles.pillarCard}>
                <div className={styles.pillarImage}>
                  <img src="/img/research/random-field.png" alt="" loading="lazy" />
                </div>
                <h3 className={styles.pillarTitle}>
                  <Translate id="research.area4">随机场与可靠度</Translate>
                </h3>
                <p className={styles.pillarBody}>
                  <Translate id="research.area4.desc">
                    智能勘察优化、旋转各向异性、能量演化失稳判据
                  </Translate>
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.paths} aria-labelledby="paths-heading">
          <div className={styles.container}>
            <h2 id="paths-heading" className={styles.sectionTitle}>
              <Translate id="homepage.pathsHeading">浏览站点</Translate>
            </h2>
            <div className={styles.pathFeatured}>
              <Link to="/docs/research" className={styles.pathTile}>
                <span className={styles.pathIconWrap} aria-hidden>
                  <svg className={styles.pathIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v8L4.5 18A3.5 3.5 0 0 0 7 23h10a3.5 3.5 0 0 0 2.5-5L14 10V2"/>
                    <path d="M8 2h8"/>
                  </svg>
                </span>
                <span className={styles.pathLabel}>
                  <Translate id="homepage.link.research">研究详情</Translate>
                </span>
              </Link>
              <Link to="/docs/publications" className={styles.pathTile}>
                <span className={styles.pathIconWrap} aria-hidden>
                  <svg className={styles.pathIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <line x1="10" y1="9" x2="8" y2="9"/>
                  </svg>
                </span>
                <span className={styles.pathLabel}>
                  <Translate id="homepage.link.publications">学术发表</Translate>
                </span>
              </Link>
              <Link to="/docs/people" className={styles.pathTile}>
                <span className={styles.pathIconWrap} aria-hidden>
                  <svg className={styles.pathIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <span className={styles.pathLabel}>
                  <Translate id="homepage.link.people">团队成员</Translate>
                </span>
              </Link>
              <Link to="/docs/teaching" className={styles.pathTile}>
                <span className={styles.pathIconWrap} aria-hidden>
                  <svg className={styles.pathIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </span>
                <span className={styles.pathLabel}>
                  <Translate id="homepage.link.teaching">招生信息</Translate>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.outro} aria-labelledby="outro-heading">
          <div className={styles.container}>
            <div className={styles.outroCard}>
              <h2 id="outro-heading" className={styles.outroTitle}>
                <Translate id="homepage.contact">联系我们</Translate>
              </h2>
              <p className={styles.outroMail}>
                <svg className={styles.contactIconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <Link href="mailto:laizhengsh@mail.sysu.edu.cn">laizhengsh@mail.sysu.edu.cn</Link>
              </p>
              <p className={styles.outroAddress}>
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
