import A from '../components/A'
import Head from 'next/head'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>Next Lol</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text={'Главная'} />
        <A href={'/users'} text={'Пользователи'} />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  )
}

export default MainContainer
