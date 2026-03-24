import React from 'react'

const SectionHeader = ({ type, title, description, textAlign = 'center' }) => {
    return (
        <div className={`${textAlign === 'center' ? 'mx-auto' : ''} max-w-[760px] text-${textAlign}`}>
            <span className="inline-flex h-[24px] items-center bg-[#E9EBEA] rounded-[4px] px-3 text-[length:var(--f-fs-font-fs16)] font-medium text-[#2d3542]">
                {type}
            </span>
            <h2 className="mt-4 font-['Poppins'] text-[length:var(--f-fs-font-fs48)] leading-[1.08] font-semibold tracking-[-0.02em] text-[#111827]">
                {title}
            </h2>
            <p className="mt-4 max-w-[700px] text-[length:var(--f-fs-font-fs18)] leading-[1.55] text-[#5f666f]">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader