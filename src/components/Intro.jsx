import React from 'react';

function Intro() {
    return (
        <div className='"flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Hi, I'm Kailynne!</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer and Designer</p>
            <p className="text-sm max-w-l mb-6 font-bold">
            Bio paragraph 1.
            <br />
            Bio pragraph 2.
            Check out my links{' '}
            </p>
            <a href = "http://www.linkedin.com/in/kailynnelopez"
            target="_blank"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
            rel="norefferrer noopener">
                LinkedIn
            </a>{' '}
        
        </div>
    )
}

export default Intro;