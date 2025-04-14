import React, { useState } from 'react';
import { Film, User, Mail, Camera } from 'lucide-react';
import Modal from './components/Modal';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/tuc7SyXATZQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=tuc7SyXATZQ"
          className="w-full h-full scale-150"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="w-full h-[70px] bg-black/50 flex items-center px-8">
          <div className="flex items-center gap-2 text-white">
            <Camera size={24} />
            <span className="text-lg font-light tracking-wider">FABRICIO</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-end px-8 py-6 gap-4">
          <button
            onClick={() => setActiveModal('work')}
            className="flex items-center gap-2 px-6 py-2 bg-black/50 hover:bg-black/70 text-white transition-all border border-white/10"
          >
            <Film size={20} />
            <span className="text-sm font-light">Work</span>
          </button>
          
          <button
            onClick={() => setActiveModal('about')}
            className="flex items-center gap-2 px-6 py-2 bg-black/50 hover:bg-black/70 text-white transition-all border border-white/10"
          >
            <User size={20} />
            <span className="text-sm font-light">About</span>
          </button>
          
          <button
            onClick={() => setActiveModal('contact')}
            className="flex items-center gap-2 px-6 py-2 bg-black/50 hover:bg-black/70 text-white transition-all border border-white/10"
          >
            <Mail size={20} />
            <span className="text-sm font-light">Contact</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative">
          {/* Centered Title */}
          <div className="absolute bottom-16 left-16">
            <h1 className="text-white text-4xl font-light tracking-wider">JOHN DOE</h1>
            <p className="text-white/70 mt-2 text-sm tracking-widest">FILMMAKER</p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[20px] bg-black/50 flex items-center justify-center">
          <span className="text-white/70 text-xs tracking-wider">2025 - fabricio</span>
        </div>

        {/* Modals */}
        <Modal isOpen={activeModal === 'work'} onClose={closeModal} title="WORK">
          <div className="grid grid-cols-2 gap-6">
            {/* Streamable Videos */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/yxfr0" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/1dgxn" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/moo" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/26vx" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/e8h8" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/h6do" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/ifjh" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/vfl3" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/qitk" className="w-full h-full"></iframe>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src="https://streamable.com/e/jtzp" className="w-full h-full"></iframe>
            </div>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="ABOUT">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-light tracking-wide mb-6">CINEMATIC STORYTELLER</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  With over a decade of experience in visual storytelling, I've dedicated my career to capturing moments that move and inspire. My work spans from intimate documentaries to large-scale commercial productions.
                </p>
                <p className="leading-relaxed">
                  Every project is an opportunity to create something unique and meaningful. I believe in the power of visual storytelling to connect, inspire, and transform perspectives.
                </p>
                <div className="mt-8">
                  <h3 className="text-sm font-medium tracking-wider text-white/90 mb-3">AWARDS & RECOGNITION</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Best Documentary Short - NYC Film Festival 2023</li>
                    <li>Cinematography Award - LA Independent Film Awards</li>
                    <li>Official Selection - Sundance Film Festival 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb"
                alt="Profile"
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
            </div>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'contact'} onClose={closeModal} title="CONTACT">
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <input
                type="text"
                placeholder="NAME"
                className="w-full px-0 py-4 border-0 border-b-2 border-white/20 focus:border-white focus:ring-0 bg-transparent text-white text-sm placeholder:text-gray-500 placeholder:tracking-wider"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-0 py-4 border-0 border-b-2 border-white/20 focus:border-white focus:ring-0 bg-transparent text-white text-sm placeholder:text-gray-500 placeholder:tracking-wider"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="MESSAGE"
                className="w-full px-0 py-4 border-0 border-b-2 border-white/20 focus:border-white focus:ring-0 bg-transparent text-white text-sm placeholder:text-gray-500 placeholder:tracking-wider resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-white text-black text-sm tracking-wider hover:bg-white/90 transition-colors"
            >
              SEND
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default App;