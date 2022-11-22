import { assets } from '../constants'

export const Hero = () => {
    return (
        <div className='flex justify-center'>
            <img className='h-full' src={ assets.cirugiaOido3.ulr } alt={ assets.cirugiaOido3.alt } />
        </div>
    )
}
