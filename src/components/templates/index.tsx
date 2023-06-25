import tw from 'tailwind-styled-components'

export const TemplateContainer = tw.div`
  w-screen h-screen bg-gray-50 flex flex-col items-center mx-auto px-10
`
export const TemplateContent = tw.div`
  w-full max-w-screen-lg my-10 px-8 rounded-md grid md:grid-cols-2 grid-cols-1 bg-white
`
export const TemplateMainHeroSection = tw.main`
 flex flex-col justify-center items-center gap-6
`

export const BaseButton = tw.button`
  h-10 px-10 text-white font-bold rounded-md disabled:cursor-not-allowed disabled:bg-gray-300
`

export const MainButton = tw(BaseButton)`
  bg-blue-400 hover:bg-blue-200
`
export const GhostButton = tw(BaseButton)`
  bg-transparent text-blue-500 hover:underline px-2
`
