import { motion, AnimatePresence } from "framer-motion";
import {useState, useRef, useCallback, forwardRef, useEffect} from "react";

const Notiftoast = forwardRef((_, ref) => {
    const [toasts, setToasts] = useState([]);
    const timers = useRef({});
    const barRefs = useRef({});

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
        clearTimeout(timers.current[id]);
        delete timers.current[id];
        delete barRefs.current[id];
    }, []);

    const startTimer = useCallback((id, duration) => {
        timers.current[id] = setTimeout(() => removeToast(id), duration);
    }, [removeToast]);

    const pauseTimer = useCallback((id) => {
        clearTimeout(timers.current[id]);
        const bar = barRefs.current[id];
        if (!bar) return;
        const computed = getComputedStyle(bar).width;
        bar.style.animation = "none";
        bar.style.width = computed;
    }, []);

    const resumeTimer = useCallback((id, duration) => {
        startTimer(id, duration);
        const bar = barRefs.current[id];
        if (!bar) return;
        bar.style.width = "100%";
        void bar.offsetWidth;
        bar.style.animation = `shrink ${duration}ms linear forwards`;
    }, [startTimer]);

    useEffect(() => {
        const handler = (e) => {
            const { shortmessage, message, type = "info", duration = 10000 } = e.detail;
            const id = Date.now();
            setToasts(prev => [...prev, { id, shortmessage, message, type, duration }]);
            setTimeout(() => startTimer(id, duration), 0);
        };
        window.addEventListener('toast', handler);
        return () => window.removeEventListener('toast', handler);
    }, [startTimer]);

    const colorsBar = {
        success: "bg-green-500",
        error: "bg-[#ff0000]",
        info: "bg-blue-500",
        warning: "bg-yellow-500",
    };

    const colorsBG = {
        success: "bg-[rgba(28,90,28,0.25)]",
        error: "bg-[rgba(90,29,28,0.25)]"
    }

    return (
        <>
            <style>{`
                @keyframes shrink {
                    from { width: 100%; }
                    to { width: 0%; }
                }
            `}</style>
            <div className="fixed top-4 right-4 m-4 z-50">
                <AnimatePresence>
                    {toasts.map(toast => (
                        <motion.div
                            key={toast.id}
                            initial={{ x: "120%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "120%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            onMouseEnter={() => pauseTimer(toast.id)}
                            onMouseLeave={() => resumeTimer(toast.id, toast.duration)}
                            onClick={() => removeToast(toast.id)}
                            className= {`${colorsBG[toast.type]} w-100 h-40 mb-5 top-4 right-4 rounded-2xl outline-2 -outline-offset-1 outline-[rgba(191,191,191,0.09)] overflow-hidden backdrop-blur-lg shadow-2xl`}
                        >
                            <div
                                ref={el => barRefs.current[toast.id] = el}
                                className={`${colorsBar[toast.type]} h-1`}
                                style={{ animation: `shrink ${toast.duration}ms linear forwards` }}
                            />
                            <div className="relative text-white font-jetbrains -right-4 top-2 text-2xl">
                                {toast.shortmessage}
                            </div>
                            <div className="m-4 text-gray-400 font-jetbrains text-lg">
                                {toast.message}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
});

export default Notiftoast;