import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://next-prismic-news.prismic.io/api/v2';

export const accessToken = '';

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (
  req = null,
  prismicAccessToken: null | string = null
) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
