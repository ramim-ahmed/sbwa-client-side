
import Image from 'next/image'
type Props = {
    title: string;
    photo: string
}
export default function GalleryCard({ title, photo }: Props) {
    return (
        <div>
            <div className='relative w-full h-[350px]'>
                <Image src={photo} alt='gallery' layout='fill' className='rounded object-cover' />
                <div className='bottom-0 absolute bg-green-600/90 rounded-b p-2 w-full'>
                    <h1 className='text-white text-base font-medium'>{title}</h1>
                </div>
            </div>
        </div>
    )
}
