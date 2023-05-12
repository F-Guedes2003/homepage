import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from 'framer-motion';

function Reveal ({children, width}){
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControl = useAnimation();
    useEffect(() => {
    if (isInView) {
         mainControl.start('visible')
    }
    });
    return(
        <section ref ={ref} style={{position:'relative', width, overflow: 'hidden'}}>
            <motion.div
                variants ={{
                    hidden: {opacity:0, x:75},
                    visible: {opacity:1, x:0},
                }}
                initial ='hidden'
                animate={mainControl}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                
                }}>
                    {children}
            </motion.div>
        </section>
    );


}export default Reveal;
