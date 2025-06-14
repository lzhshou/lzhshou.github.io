import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate
        id="homepage.feature1.title"
        description="Feature 1 title">
        计算力学
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="homepage.feature1.description"
        description="Feature 1 description">
        有限元、离散元、物质点法等数值计算方法的研究与应用，解决复杂工程问题。
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.feature2.title"
        description="Feature 2 title">
        颗粒材料建模
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="homepage.feature2.description"
        description="Feature 2 description">
        基于CT图像的颗粒重建、形状表征、接触检测等先进建模技术。
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.feature3.title"
        description="Feature 3 title">
        机器学习应用
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="homepage.feature3.description"
        description="Feature 3 description">
        基于深度学习的材料参数识别、结构健康监测等智能化解决方案。
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className="col col--12 text--center">
            <Heading as="h2">
              <Translate
                id="homepage.news.title"
                description="News section title">
                最新动态
              </Translate>
            </Heading>
            <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'left'}}>
              <ul>
                <li>
                  <strong>2024-03</strong>: 
                  <Translate
                    id="homepage.news.item1"
                    description="News item 1">
                    实验室网站正式上线
                  </Translate>
                </li>
                <li>
                  <strong>2023-03</strong>: 
                  <Translate
                    id="homepage.news.item2"
                    description="News item 2">
                    赖正首老师加入中山大学土木工程学院
                  </Translate>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
