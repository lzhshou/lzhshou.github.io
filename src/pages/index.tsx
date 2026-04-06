import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import { motion } from 'framer-motion';

import styles from './index.module.css';

// 研究数据展示
const researchStats = [
  { number: '', label: '学术论文', suffix: '' },
  { number: '', label: '科研项目', suffix: '' },
  { number: '', label: '发明专利', suffix: '' },
  { number: '', label: '学术合作', suffix: '' },
];

// 研究方向
const researchAreas = [
  {
    title: '离散元方法',
    description: '基于符号距离场的任意形状颗粒建模与多尺度模拟',
    icon: '🔬',
  },
  {
    title: '计算岩土力学',
    description: 'CFD-DEM耦合方法与多相流数值模拟',
    icon: '🏗️',
  },
  {
    title: '机器学习',
    description: 'AI赋能的材料力学性能预测与优化',
    icon: '🤖',
  },
  {
    title: '多尺度模拟',
    description: '从微观到宏观的跨尺度力学行为研究',
    icon: '⚛️',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      {/* 背景动画网格 */}
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern} />
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>

      <div className={clsx('container', styles.heroContainer)}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={styles.heroContent}
        >
          {/* 实验室徽章 */}
          <motion.div
            className={styles.labBadge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className={styles.badgeText}>中山大学 · 智能工程学院</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className={styles.titleGradient}>APAAM Lab</span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Translate
              id="homepage.tagline"
              description="The homepage tagline">
              应用过程分析与模拟实验室
            </Translate>
          </motion.p>

          {/* 描述 */}
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            专注于计算力学、离散元方法与机器学习在岩土工程中的创新应用
          </motion.p>

          {/* CTA 按钮组 */}
          <motion.div
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link
              className={clsx(styles.buttonPrimary, styles.button)}
              to="/docs/people">
              <Translate id="homepage.getStarted" description="Get started button text">
                探索研究
              </Translate>
              <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              className={clsx(styles.buttonSecondary, styles.button)}
              to="/docs/publications">
              <Translate id="homepage.publications" description="Publications button text">
                学术成果
              </Translate>
            </Link>
          </motion.div>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollText}>向下滚动</span>
        </motion.div>
      </div>
    </header>
  );
}

// 数据统计区域
function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {researchStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {stat.number && <div className={styles.statNumber}>{stat.number}</div>}
              <div className={styles.statLabel}>{stat.label}</div>
              {stat.suffix && <div className={styles.statSuffix}>{stat.suffix}</div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// 研究方向展示
function ResearchSection() {
  return (
    <section className={styles.researchSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.sectionTitle}>研究方向</h2>
          <p className={styles.sectionSubtitle}>
            我们在计算力学与人工智能交叉领域开展前沿研究
          </p>
        </motion.div>

        <div className={styles.researchGrid}>
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className={styles.researchCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.researchIcon}>{area.icon}</div>
              <h3 className={styles.researchTitle}>{area.title}</h3>
              <p className={styles.researchDescription}>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 特色展示区域
function FeatureShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.showcaseBackground} />
      <div className="container">
        <div className={styles.showcaseGrid}>
          <motion.div
            className={styles.showcaseText}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.showcaseLabel}>开源软件</span>
            <h2 className={styles.showcaseTitle}>NetDEM</h2>
            <p className={styles.showcaseDescription}>
              我们开发了开源离散元模拟软件 NetDEM，支持任意形状颗粒建模、
              多尺度模拟和机器学习集成，为岩土工程研究提供强大的数值工具。
            </p>
            <Link className={styles.showcaseLink} to="/docs/resources">
              了解 NetDEM →
            </Link>
          </motion.div>

          <motion.div
            className={styles.showcaseVisual}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot} />
                <span className={styles.codeDot} />
                <span className={styles.codeDot} />
              </div>
              <pre className={styles.codeContent}>
{`// NetDEM 示例代码
simulation.Initialize();

// 创建颗粒形状
auto shape = ShapeFactory::Create("polyhedron");
shape->Load("particle.stl");

// 设置材料参数
auto mat = new Material();
mat->SetYoungsModulus(1e8);
mat->SetPoissonsRatio(0.25);

// 运行模拟
simulation.Run();`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA 区域
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}>
        <div className={styles.ctaGradient} />
      </div>
      <div className="container">
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.ctaTitle}>加入我们</h2>
          <p className={styles.ctaDescription}>
            我们欢迎对计算力学、离散元方法和人工智能感兴趣的学生和研究人员
            <br />
            加入 APAAM Lab 开展前沿研究
          </p>
          <div className={styles.ctaButtons}>
            <Link className={clsx(styles.buttonPrimary, styles.button)} to="/docs/about">
              联系我们
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'APAAM Lab - 应用过程分析与模拟实验室',
        description: 'The homepage title'
      })}
      description={translate({
        id: 'homepage.description',
        message: '应用过程分析与模拟实验室 - 专注于计算力学和材料科学领域的创新解决方案',
        description: 'The homepage description'
      })}>
      <HomepageHeader />
      <main>
        <StatsSection />
        <ResearchSection />
        <FeatureShowcase />
        <CTASection />
      </main>
    </Layout>
  );
}
