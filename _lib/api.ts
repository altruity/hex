// GQL
const PAGE_GRAPHQL_FIELDS = `
  slug
  hero {
    title
    description
    label
    backgroundImage {
      url
      title
      description
    }
    cta {
      text
      slug
      isExternal
    }
  }
  sectionCollection(limit: 10) {
    items {
      ... on Section {
        variant
        title
        summary
        gradientBg
        cardsCollection {
          items {
            title
            summary
            image {
              url
              title
              description
            }
            icon
            cta {
              text
              slug
              isExternal
            }
          }
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['pages'] },
    },
  ).then((response) => response.json());
}

function extractPageEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getAllPages(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: { slug_exists: true }, limit: 10, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );

  return extractPageEntries(entries);
}
