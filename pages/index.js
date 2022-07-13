import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Online from '../components/online'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
      <title>{siteTitle}</title>
      </Head>

      <div class="home">

        <h1 class="title">
          <br/>
          欢迎来到 {siteTitle}
        </h1>

        <p class="description">
          <br/>
          <br/>
          玩的开心哦！
          <br/>
        </p>

        <div class="text-center py-3">
          
          <div class="stats bg-primary text-primary-content">
            <Online server="2.7养成" />
            <Online server="2.8指令" />
            <Online server="2.8养成" />
          </div>

        </div>
        
        <p class="text-center">
          <br/>
          <br/>
          2.7养成 电脑：www.yuanshen.ml:4433          手机：https://www.yuanshen.ml:4433<br/>
          <br/>
          2.8指令 电脑：106.13.5.214:4433             手机：暂不可用<br/>
          <br/>
          2.8养成 电脑：www.yuanshen.ml:4434          手机：暂不可用<br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </p>

        <p class="description">
        
        </p>

      </div>
    </Layout>
  )
}
