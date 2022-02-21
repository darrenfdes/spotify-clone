import { getProviders, signIn } from 'next-auth/react'
import spotifyIcon from '../assests/spotify-logo-png-7057.png'

const Login: React.FC<any> = ({ providers }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img className="mb-5 w-32" src={spotifyIcon.src} alt="spotify logo" />
      {Object.values(providers).map((provider: any) => (
        <div key={provider.id}>
          <button
            className="rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
