import { useRouter } from 'next/router';
import styles from './Login.module.css'
import Link from 'next/link';

const LoginViews = () => {
    const { push } = useRouter()
    const handleLogin = () => {
        push('/product');
    }
    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Login Page</h1>
            <button className={styles.button} onClick={handleLogin}>Login</button>
            <p className={styles.registerPrompt}>Belum Punya Akun? register <Link href={"/auth/register"}>Disini</Link>
            </p>
        </div>
    )

}

export default LoginViews