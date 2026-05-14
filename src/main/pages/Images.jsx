import { motion } from 'framer-motion';

function Images() {
    return (
        <div className="fixed w-full h-full bg-background flex justify-center items-center">
            <motion.div
                className="relative outline-10 outline-defgreen w-[30%] h-[40%] rounded-4xl outline-dashed border-border border -outline-offset-5 bg-highlight flex justify-center items-center"
                whileHover={{ scale: 1.008 }}
                whileTap={{ scale: 0.992 }}
                transition={{ type: "spring", stiffness: 500, damping: 30}}
            >
                <input type="file" className="absolute w-full h-full hidden" id="imgs.fileupload" accept="image/*"/>
                <button  className="absolute w-full h-full cursor-pointer z-2" onClick={() => document.getElementById("imgs.fileupload").click()}/>
                <div className="relative w-[60%] h-[15%] flex justify-between items-center text-defgreen text-3xl font-mono">
                    <svg className="relative h-full aspect-square" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    upload an image
                </div>
            </motion.div>
        </div>
    )
}

export default Images