import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';

const MediaPage: React.FC = () => {
  const articles = [
    {
      source: 'Sinar Daily',
      sourceBg: 'bg-black/60',
      href: 'https://www.sinardaily.my/article/216843/focus/national/younger-people-at-risk-of-losing-close-up-vision-due-to-gadget-use---doctor',
      img: 'https://picsum.photos/seed/tech/600/400',
      label: 'In The News',
      title: 'Younger people at risk of losing close-up vision due to gadget use',
      excerpt: '"Prolonged use of electronic devices is causing premature presbyopia symptoms in younger generations." — Dr. Helen Tan discusses digital eye strain and the growing epidemic of early-onset presbyopia among smartphone users in Malaysia.',
      date: '2024',
    },
    {
      source: 'Bernama',
      sourceBg: 'bg-blue-600/90',
      href: 'https://www.bernama.com/bm/news.php?id=2284065',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
      label: 'Berita Terkini',
      title: 'Rawatan Mata Moden & Penjagaan Kesihatan',
      excerpt: 'Ketahui lebih lanjut mengenai perkembangan terkini dalam bidang oftalmologi dan rawatan mata di Malaysia. Dr. Helen Tan berkongsi pandangan tentang kemajuan teknologi pembedahan mata.',
      date: '2024',
    },
  ];

  return (
    <div className="pt-24 bg-eye-dark min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-4 block">
            Press & Publications
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Media <span className="italic">& Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            News coverage, interviews, and articles featuring Dr. Helen Tan's expertise in
            ophthalmology and public eye health education.
          </p>
        </motion.div>
      </div>

      {/* Articles */}
      <section className="py-20 bg-eye-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group block"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-eye-cyan/30 transition-colors">
                  <span className={`absolute top-3 left-3 z-20 ${item.sourceBg} backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-widest font-bold`}>
                    {item.source}
                  </span>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1 text-eye-cyan text-xs font-bold">
                      Read <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
                <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">{item.label}</span>
                <h3 className="text-xl font-serif mt-2 mb-3 group-hover:text-eye-cyan transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.excerpt}</p>
                <div className="mt-4 text-xs text-gray-600">{item.date}</div>
              </motion.a>
            ))}

            {/* Interview card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-eye-cyan/30 transition-colors">
                <img
                  src="https://picsum.photos/600/401"
                  alt="CNA interview thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
              <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">Interview</span>
              <h3 className="text-xl font-serif mt-2 group-hover:text-eye-cyan transition-colors">
                Dr. Helen Tan on CNA
              </h3>
              <p className="text-sm text-gray-500 mt-2">Video interview — link to be added.</p>
            </motion.div>

            {/* PLACEHOLDER card for future media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center min-h-[220px]"
            >
              <div className="text-gray-600 text-sm mb-2">More articles coming soon</div>
              <div className="text-xs text-gray-700">
                {/* PLACEHOLDER — Add additional media appearances here */}
                New media appearances will be added here.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press enquiries */}
      <section className="py-12 bg-eye-mid border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-white mb-3">Press Enquiries</h2>
          <p className="text-gray-400 text-sm mb-5">
            For interview requests, expert commentary, or media enquiries regarding eye health topics:
          </p>
          <a
            href="mailto:helentanservices@gmail.com"
            className="text-eye-cyan hover:text-white transition-colors text-sm"
          >
            helentanservices@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
