import Image from "next/image";
import {Button} from "flowbite-react";
import Link from "next/link";
import {useStepperStore} from "@/stores/stepper.store";

export const VerifyAccount = () => {
    const {setStep} = useStepperStore();
    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-8'>
            <p className='font-semibold'>Xin chào! Vân Mai Thúy</p>
            <p className='text-sm text-[#626E7B]'>Chào mừng đến với HPay Business</p>
            <div>
                <Image
                    src="/images/logo/mail.logo.png"
                    alt="Mail Logo"
                    className="dark:invert"
                    width={120}
                    height={50}
                    priority
                />
            </div>
            <p className='text-sm text-[#626E7B]'>Bạn vui lòng truy cập hòm thư linh cute9x@gmail.com và bấm vào
                <span className='flex justify-center space-x-1'>
                    <Link className='text-red font-bold' href='#'>
                        Link kích hoạt
                    </Link>
                    <span className='space-x-2'> mà HPay đã gửi để hoàn tất đăng ký tài khoản.</span>
                </span>
            </p>
            <p className='text-[#46474B] text-sm'>Chưa nhận được email. <Link className='text-red font-bold'
                                                                              href='#'>Bấm vào đây!</Link></p>
            <Button onClick={() => setStep(4)} className='w-40 h-8 bg-[#4FAAC1] flex items-center text-sm'>Đăng nhập</Button>
            <p className='mt-5 text-xs text-[#A6C5CD]'>Hotline hỗ trợ 24/7: 1900 0128</p>
        </div>
    )
}