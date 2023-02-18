import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const res = await fetch(
  'http://localhost:3000/api/auth/sign-in',
  {
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const data = await res.text();

  return {
    props:{
      data
    }
  }
}

//@ts-ignore
export default function SignIn({data}) {
  const router = useRouter()

  return (
    <div>
      {data}
      <button>
        Sign in with Google
      </button>
    </div>
  )
}
