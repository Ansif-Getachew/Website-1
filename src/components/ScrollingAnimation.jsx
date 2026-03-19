import { useRef, useEffect } from 'react';

export const ScrollingAnimation = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!element) return;
    
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible"); // 👈 THIS is key
                }
            },
            {
                threshold: 0.1,
            }
        );
    
        observer.observe(element);
    
        return () => observer.disconnect();
    }, []);
    
    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};