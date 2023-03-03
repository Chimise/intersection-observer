import {useEffect, useState} from 'react';


const usePresence = (ref, options = {}) => {
    const [isEntering, setIsEntering] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsEntering(entries[0].isIntersecting);
        }, options)

        if(ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        }
    }, [ref])

    return isEntering;
}

export default usePresence;

