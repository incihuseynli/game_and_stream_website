import { IChildren } from '../../types';
import HeroBorder from './HeroBorder';
const HeroSect = ({children}:IChildren) => {
  return (
    <section className='w-full h-full'>
      {children}
      <HeroBorder/>
    </section>
  )
}

export default HeroSect
