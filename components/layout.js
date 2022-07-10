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
                <meta name="description" content="琉璃神社" />
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
                    <a href="https://jq.qq.com/?_wv=1027&k=2JZmdxRY" target="_blank" rel="sponsored">加群</a>
                </p>
                <p class="mt-4">
                    <a href="https://github.com/casksteven/Casks-server" target="_blank" rel="sponsored">@Casksteven | 原作者Yuki</a>
                </p>

            </footer>
        </div>
    )
}
