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
          欢迎来到 <font color=#f1b8f1>琉</font><font color=#d9b8f1>璃</font><font color=#f1ccb8>神</font><font color=#f1f1b8>社</font>
          
        </h1>

        <p class="description">
          <br/>
          <br/>
          玩的开心哦！
          <br/>
        </p>

        <div class="text-center py-3">
          
          <div class="stats bg-primary text-primary-content">
            <Online server="养成服" />
            <Online server="指令服" />
            <Online server="敬请期待" />
          </div>

        </div>
        
        <p class="text-center">
          <br/>
          <br/>ㅤ
          养成服 电脑：www.yuanshen.cf          手机：https://www.yuanshen.cf<br/>
          <br/>
          指令服 电脑：106.13.5.214:4433        手机：106.13.5.214:4433<br/>
          <br/>ㅤ
          测试服 电脑：敬请期待                  手机：敬请期待<br/>
          <br/>
          <br/>
          <br/>
          <br/>
           
        </p>

        <p class="description">
        <a href="https://www.yuanshen.cf" target="_blank" rel="sponsored">主页</a>
        <br/>
        <br/>
        </p>

      </div>
    </Layout>
  )
}
