import React from 'react'

const SectionHeader = ({ type, title, description, textAlign = 'center', darkMode = false }) => {
    return (
        <div className={`${textAlign === 'center' ? 'mx-auto' : ''} max-w-[760px] text-${textAlign}`}>
            <span className={`inline-flex items-center rounded-[4px] p-[6px_12px] mb-1 text-base font-medium ${darkMode ? 'bg-[#212936] text-[#fff]' : 'bg-[#E9EBEA] text-[#000]'}`}>
                {type}
            </span>
            <h2 className={`mt-4 text-5xl leading-none font-semibold tracking-[-0.02em] ${darkMode ? 'text-[#fff]' : 'text-[#111827]'}`}>
                {title}
            </h2>
            <p className={`mt-4 max-w-[700px] text-lg leading-[1.55] ${darkMode ? 'text-[#fff]' : 'text-[#5f666f]'}`}>
                {description}
            </p>
        </div>
    )
}

export default SectionHeader