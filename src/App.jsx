import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles, Cake, Stars } from 'lucide-react';
import niceImage from './assets/nice_placeholder.jpg';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#ffd700']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#ffd700']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-pink-500/30">

      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-300/40 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-300/40 rounded-full filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="entrance"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center justify-center p-6"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <button
                onClick={handleOpen}
                className="group relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-300 to-pink-400 p-[2px] shadow-[0_10px_40px_-10px_rgba(244,114,182,0.6)] transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-300 to-pink-400 opacity-60 blur-xl transition-opacity group-hover:opacity-100"></div>
                <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-white/90 backdrop-blur-xl">
                  <Gift className="h-12 w-12 text-rose-400 drop-shadow-sm" />
                </div>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-center font-medium tracking-widest text-rose-400 text-sm"
            >
              แตะเพื่อเปิดดู
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.8 }}
            className="relative z-10 flex w-full max-w-lg flex-col items-center justify-center p-6"
          >
            {/* Glass Card */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/60 bg-white/50 p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(255,192,203,0.5)] backdrop-blur-2xl">

              {/* Card Decorations */}
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-pink-200/50 blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-rose-200/50 blur-2xl"></div>

              <div className="relative flex flex-col items-center space-y-6 text-center">

                {/* Icons */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                  className="flex justify-center flex-row space-x-3 text-rose-400"
                >
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <Cake className="h-8 w-8 drop-shadow-[0_0_15px_rgba(251,113,133,0.3)]" />
                  <Stars className="h-6 w-6 animate-pulse" style={{ animationDelay: '1s' }} />
                </motion.div>

                {/* Typography */}
                <div className="space-y-2">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-serif italic text-rose-500 font-semibold text-lg sm:text-xl"
                  >
                    3 เมษายน
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-rose-700 drop-shadow-sm"
                  >
                    สุขสันต์วันเกิด<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 inline-block mt-2 font-black text-5xl sm:text-7xl">
                      ไนซ์
                    </span>
                  </motion.h1>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", bounce: 0.4 }}
                  className="relative group w-32 h-32 sm:w-40 sm:h-40 mt-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <img 
                    src={niceImage} 
                    alt="Birthday Girl" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-white/80 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Floating heart */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                    className="absolute -top-1 -right-1 bg-white rounded-full p-1.5 shadow-md"
                  >
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                  </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="pt-6 relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                  <p className="text-rose-900 text-base sm:text-lg leading-relaxed font-light">
                    สุขสันต์วันเกิดนะหนู 🎂✨ <br/>
                    โตขึ้นอีกปีแล้วแต่ก็ยังน่ารักเหมือนเดิมเลยนะ <br/>

                    ขอให้ปีนี้มีแต่เรื่องดีๆเข้ามาในชีวิต ยิ้มเยอะๆนะ<br/>
                    ถ้าเหงาเมื่อไหร่ก็หันมาหาพี่ได้ตลอดเลย<br/>

                    ดูแลตัวเองดีๆด้วยนะ<br/>
                    ส่วนที่เหลือ…เดี๋ยวพี่ดูแลเอง 😝💞<br/>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                  className="pt-4"
                >
                  <Heart className="h-8 w-8 text-rose-400 fill-rose-200 animate-bounce" />
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
