export type MetaProps = {
  params: {
    lang: string;
    slug: string;
  };
};

export type PageTypes = {
  data: {
    slug: string;
    hero: {
      title: string;
      description: string;
      label: string;
      backgroundImage: {
        url: string;
        title: string;
        description: string;
      };
      cta: {
        text: string;
        slug: string;
        isExternal: boolean;
      };
    };
    sectionCollection: {
      items: {
        variant: string;
        title: string;
        summary: string;
        gradientBg: boolean;
        cardsCollection: {
          items: [
            {
              title: string;
              summary: string;
              icon: string;
              image: {
                url: string;
                title: string;
                description: string;
              };
              cta: {
                text: string;
                slug: string;
                isExternal: boolean;
              };
            },
          ];
        };
      }[];
    };
  };
};
