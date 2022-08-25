import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = '琉璃神社'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>                
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="琉璃神社在线人数查看，如果你无法进入游戏而网页显示有人在线，那么请自行排查问题，如果服务器人数显示“？”，请联系管理员。" />
            </Head>
            <header>

            </header>
            {children}
            {home ? (
                <>

                </>
            ) : (
                <>
                    <h3 class="text-center">
                        <Link href="/">
                            <button class="btn btn-primary">Back to Home</button>
                        </Link>
                    </h3>
                </>
            )}
            <footer class="text-center py-3">
                <p>
                    <a href="https://jq.qq.com/?_wv=1027&k=ckBjiyJO" target="_blank" rel="sponsored">加群</a>
                </p>
                <p class="mt-4">
                    Power by <a href="https://www.yuanshen.cf:4433" target="_blank" rel="sponsored">©琉璃神社</a> | Fork from <a href="https://github.com/casksteven/Casks-server" target="_blank" rel="sponsored">@Casksteven</a> | 原作者<a href="https://github.com/akbaryahya/YuukiGame-Web" target="_blank" rel="sponsored">Yuki</a>
                </p>

            </footer>
        </div>
    )
}
