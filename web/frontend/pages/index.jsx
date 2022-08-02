import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

export default function HomePage() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card
            title="You can add and configure Message section in Theme Customizer following instruction below.."
          >
            <div className="instruction-wrapper">
              <iframe className="instruction-frame" src="https://www.loom.com/embed/32f9260c8392463fb00c0c8c59ca67fd" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen >
              </iframe>
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
