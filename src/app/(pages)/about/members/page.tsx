import Wrapper from '@/components/wrapper/Wrapper';
import React from 'react';
import Image from 'next/image';


export default function Page() {
    return (
        <div>
            <Wrapper>
                <div className="py-20 px-6">
                    <div>
                        <div className='flex justify-center'>
                            <h1 className="text-4xl text-center font-light uppercase border-b-2 border-red-600 inline">Our Members</h1>
                        </div>
                        <div className="mt-16">
                            <div className="mt-3">
                                <div className='flex justify-center'>
                                    <div className='text-center'>
                                        <div className='flex justify-center'>
                                            <Image src={'/members/ziauddin.png'} alt='ziauddin' width={150} height={150} className='rounded' />
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className='text-lg font-semibold'>Ziauddin K Siddique (Sumon)</h3>
                                            <p className='text-gray-800'>President</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10 items-center'>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/elahi.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Elahi Khan (Monju)                                         </h3>
                                        <p className='text-gray-800'>General Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/mohit.jpg'} alt='ziauddin' width={150} height={150} className='rounded border h-[150px] border-red-600 object-cover' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Mohit Hossain
                                        </h3>
                                        <p>Organizing Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/faysal.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Foysal Ahmed
                                        </h3>
                                        <p>Treasurer</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/khandakar.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Dr. Khandakar Ali Kawsar
                                        </h3>
                                        <p>Heath & Wellbeing Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/azim.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Azim Uddin Mahmood
                                        </h3>
                                        <p className='text-gray-800'>Cultural Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/chandrima.png'} alt='ziauddin' width={150} height={150} className='rounded border h-[150px] border-red-600 object-cover' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Chandrima Lala
                                        </h3>
                                        <p>Social Wellbeing Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/fakhrul.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Md. Fokhrul Islam
                                        </h3>
                                        <p>Education & Skills Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/Nazim.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Nazim Ahmed
                                        </h3>
                                        <p>Event Management Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/elman.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Elman Rahman
                                        </h3>
                                        <p className='text-gray-800'>Creative Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/aminul.png'} alt='ziauddin' width={150} height={150} className='rounded border h-[150px] border-red-600 object-cover' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Aminul Islam (Sourov)
                                        </h3>
                                        <p>Communications Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/ateequr.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Mohammad Ateequr Rahman
                                        </h3>
                                        <p>Sports Secretary
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/kakon.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Kakon Chowdhury
                                        </h3>
                                        <p>Child Welfare Secretary
                                        </p>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/shamim.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Shamim Zaman
                                        </h3>
                                        <p className='text-gray-800'>Executive Member
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/alaUddin.png'} alt='ziauddin' width={150} height={150} className='rounded border h-[150px] border-red-600 object-cover' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Ala Uddin Alo
                                        </h3>
                                        <p>Executive Member
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/fahad.jpg'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Dr.Fahad Taher
                                        </h3>
                                        <p>Executive Member
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/shagufta.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Shagufta Mahin
                                        </h3>
                                        <p>Executive Member
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/shanta.png'} alt='ziauddin' width={150} height={150} className='rounded border h-[150px] border-red-600 object-cover' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Shanta Saha
                                        </h3>
                                        <p>Executive Member
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/robin.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Robin Hossain
                                        </h3>
                                        <p>Executive Member
                                        </p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={'/members/nandan.png'} alt='ziauddin' width={150} height={150} className='rounded border border-red-600' />
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-base font-semibold'>Nandan Barua
                                        </h3>
                                        <p>Executive Member
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}


