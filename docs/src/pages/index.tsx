import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Redirect } from "@docusaurus/router";

function HomepageHeader() {
  return <Redirect to="/docs/intro" />;
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to JS Logs Formatter documentation"
    >
      <HomepageHeader />
    </Layout>
  );
}
