
import React, { useState, useEffect, useRef } from 'react';

interface Comment {
  id: number;
  x: number;
  y: number;
  text: string;
  author: string;
  timestamp: string;
}

const FeedbackOverlay: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeComment, setActiveComment] = useState<{ x: number, y: number } | null>(null);
  const [newCommentText, setNewCommentText] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'comment-form') return;
    
    const rect = overlayRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setActiveComment({ x, y });
    }
  };

  const saveComment = () => {
    if (activeComment && newCommentText.trim()) {
      const newC: Comment = {
        id: Date.now(),
        x: activeComment.x,
        y: activeComment.y,
        text: newCommentText,
        author: 'UX Designer',
        timestamp: new Date().toLocaleTimeString()
      };
      setComments([...comments, newC]);
      setActiveComment(null);
      setNewCommentText('');
    }
  };

  return (
    <div 
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9998] bg-teal-500/10 cursor-crosshair backdrop-blur-[1px] border-4 border-teal-500/50 pointer-events-auto"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-6 py-2 rounded-full font-black text-xs shadow-2xl animate-bounce">
        MODO FEEDBACK: Haz clic en cualquier lugar para añadir una observación UX
      </div>

      {comments.map((c) => (
        <div 
          key={c.id} 
          className="absolute group z-10" 
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <div className="w-6 h-6 bg-teal-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-[10px] font-bold cursor-help active:scale-95 transition-transform">
            !
          </div>
          <div className="absolute left-8 top-0 w-64 bg-white p-4 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity border border-teal-100 pointer-events-none">
             <div className="flex justify-between items-center mb-2">
               <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">{c.author}</span>
               <span className="text-[10px] text-gray-400">{c.timestamp}</span>
             </div>
             <p className="text-sm text-gray-700 font-medium">{c.text}</p>
          </div>
        </div>
      ))}

      {activeComment && (
        <div 
          id="comment-form"
          className="absolute z-20 bg-white p-6 rounded-3xl shadow-2xl border-2 border-teal-500 w-80" 
          style={{ left: `${activeComment.x}%`, top: `${activeComment.y}%` }}
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Añadir Comentario UX</h4>
          <textarea 
            autoFocus
            className="w-full bg-gray-50 p-4 rounded-xl text-sm border-none outline-none focus:ring-2 focus:ring-teal-500 mb-4 h-24"
            placeholder="Ej: 'Mover este filtro a la izquierda' o 'Cambiar color de este gráfico'..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          />
          <div className="flex space-x-2">
            <button 
              onClick={saveComment}
              className="flex-1 bg-teal-600 text-white py-2 rounded-xl text-xs font-bold shadow-lg shadow-teal-100"
            >
              Guardar
            </button>
            <button 
              onClick={() => setActiveComment(null)}
              className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-400"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackOverlay;
