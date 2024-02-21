'use client';

import None from '@/commons/assets/sad_charac.svg';
import Btn from '@/components/commons/button/client/Btn';
import { useRouter } from 'next/navigation';

export const NotFound = () => {
    const router = useRouter();
    return (
        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
            <div className="flex flex-col items-center justify-center w-full h-[80vh] gap-2">
                <None />
                <div className="text-color-Gray500 text-center  ">
                    <p className="text-sm font-regular">잘못된 경로에요!</p>
                    <p className="text-sm font-regular"> 요청한 페이지를 찾을 수 없어요😢</p>
                </div>
            </div>
            <div className="bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-[0%] right-[0%] bottom-0 z-[5000]">
                <div className="flex-1">
                    <Btn title="홈으로 가기" active={true} onClick={() => router.push('/')} />
                </div>
            </div>
        </div>
    );
};