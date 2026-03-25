import React from 'react'

const SectionHeader = ({ type, title, description, textAlign = 'center', darkMode = false }) => {
    const alignmentClass =
        textAlign === 'start'
            ? 'text-left'
            : textAlign === 'end'
              ? 'text-right'
              : 'text-center';

    return (
        <div className={`${textAlign === 'center' ? 'mx-auto' : ''} max-w-[760px] ${alignmentClass}`}>
            <span className={`inline-flex items-center rounded-[4px] p-[6px_12px] mb-1 text-base font-bold ${darkMode ? 'bg-[#212936] text-[#fff]' : 'bg-[var(--primary-text-bg)] text-[#000]'}`}>
                {type}
            </span>
            <h2 className={`mt-8 text-3xl leading-none font-bold tracking-[-0.02em] sm:text-4xl md:text-5xl ${darkMode ? 'text-[#fff]' : 'text-[#111827]'}`}>
                {title}
            </h2>
            <p className={`mt-8 max-w-[700px] text-base leading-[1.55] sm:text-lg ${darkMode ? 'text-[#fff]' : 'text-[#5f666f]'}`}>
                {description}
            </p>
        </div>
    )
}

export default SectionHeader