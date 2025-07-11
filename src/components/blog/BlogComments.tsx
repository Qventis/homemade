'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ChatBubbleLeftIcon,
  HeartIcon,
  ArrowUturnLeftIcon,
  UserIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface BlogCommentsProps {
  articleId: number;
}

export function BlogComments({ articleId }: BlogCommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jean Dupont",
      date: "2024-01-16",
      content: "Excellent article ! Les explications sur l'App Router sont très claires. J'ai réussi à migrer mon projet grâce à ce guide.",
      likes: 12,
      replies: [
        {
          id: 11,
          author: "Thomas Qventis",
          date: "2024-01-16",
          content: "Merci Jean ! Ravi que l'article vous ait aidé dans votre migration. N'hésitez pas si vous avez des questions.",
          likes: 5,
          isAuthor: true
        }
      ]
    },
    {
      id: 2,
      author: "Marie Martin",
      date: "2024-01-15",
      content: "Je débute avec Next.js et cet article tombe à pic ! Pourriez-vous faire un tutoriel sur les Server Actions ?",
      likes: 8,
      replies: []
    },
    {
      id: 3,
      author: "Pierre Dubois",
      date: "2024-01-15",
      content: "Les exemples de code sont parfaits. Cela aide beaucoup à comprendre les concepts. Merci pour ce partage !",
      likes: 15,
      replies: []
    }
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: "Utilisateur Anonyme",
      date: new Date().toISOString().split('T')[0],
      content: newComment,
      likes: 0,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-qventis-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChatBubbleLeftIcon className="w-8 h-8 text-qventis-coral" />
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900">
                Commentaires ({comments.length})
              </h2>
            </div>
            <p className="text-qventis-gray-600">
              Partagez vos questions, retours d'expérience et suggestions
            </p>
          </motion.div>

          {/* Comment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-qventis-gray-50 rounded-2xl p-6 mb-12 border border-qventis-gray-200"
          >
            <h3 className="font-display font-bold text-qventis-gray-900 mb-4">
              Laisser un commentaire
            </h3>
            
            <form onSubmit={handleSubmitComment}>
              <div className="mb-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Partagez votre avis, vos questions ou vos retours d'expérience..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-qventis-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-qventis-coral focus:border-transparent resize-none"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-qventis-gray-500">
                  <FaceSmileIcon className="w-4 h-4" />
                  <span>Soyez respectueux et constructif</span>
                </div>
                
                <Button
                  type="submit"
                  variant="coral"
                  disabled={!newComment.trim()}
                  className="px-6"
                >
                  Publier le commentaire
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Comments List */}
          <div className="space-y-8">
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-qventis-gray-100"
              >
                
                {/* Comment Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-qventis-coral/20 rounded-full flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-qventis-coral" />
                    </div>
                    <div>
                      <div className="font-semibold text-qventis-gray-900">
                        {comment.author}
                      </div>
                      <div className="text-sm text-qventis-gray-500">
                        {formatDate(comment.date)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 text-sm text-qventis-gray-500 hover:text-qventis-coral transition-colors">
                      <HeartIcon className="w-4 h-4" />
                      {comment.likes}
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 text-sm text-qventis-gray-500 hover:text-qventis-coral transition-colors">
                      <ArrowUturnLeftIcon className="w-4 h-4" />
                      Répondre
                    </button>
                  </div>
                </div>

                {/* Comment Content */}
                <div className="text-qventis-gray-700 leading-relaxed mb-4">
                  {comment.content}
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="ml-8 pt-4 border-t border-qventis-gray-100 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-qventis-gray-50 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              reply.isAuthor 
                                ? 'bg-qventis-coral text-white' 
                                : 'bg-qventis-coral/20 text-qventis-coral'
                            }`}>
                              <UserIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-qventis-gray-900 text-sm">
                                  {reply.author}
                                </span>
                                {reply.isAuthor && (
                                  <span className="px-2 py-0.5 bg-qventis-coral text-white text-xs rounded-full">
                                    Auteur
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-qventis-gray-500">
                                {formatDate(reply.date)}
                              </div>
                            </div>
                          </div>
                          
                          <button className="flex items-center gap-1 px-2 py-1 text-xs text-qventis-gray-500 hover:text-qventis-coral transition-colors">
                            <HeartIcon className="w-3 h-3" />
                            {reply.likes}
                          </button>
                        </div>
                        
                        <div className="text-sm text-qventis-gray-700 leading-relaxed">
                          {reply.content}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Load More Comments */}
          {comments.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="ghost"
                className="border border-qventis-gray-300 hover:border-qventis-coral"
              >
                Charger plus de commentaires
              </Button>
            </motion.div>
          )}

          {/* No Comments State */}
          {comments.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <ChatBubbleLeftIcon className="w-16 h-16 text-qventis-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-qventis-gray-900 mb-2">
                Aucun commentaire pour le moment
              </h3>
              <p className="text-qventis-gray-600">
                Soyez le premier à partager votre avis sur cet article !
              </p>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
