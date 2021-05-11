import AboutScreen, { getContent } from '@fernandoadriano/ui/src/components/screens/AboutScreen';
import websitePageHOC from '@fernandoadriano/ui/src/components/wrappers/WebSitePage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
