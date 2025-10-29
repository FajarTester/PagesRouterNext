import Link from "next/link"

const RegisterViews = () => {
    return (
        <div>
            <h1>Register Page</h1>

            <p>Sudah Punya Akun? Login <Link href={"/auth/login"}>Disini</Link>
            </p>
        </div>
    )
}

export default RegisterViews;