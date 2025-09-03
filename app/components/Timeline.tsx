'use client';

import { motion } from 'framer-motion';

interface Client {
  clientName: string;
  accomplishments: string[];
}

interface TimelineItemProps {
  company: string;
  description: string;
  accomplishments?: string[];
  clients?: Client[];
  period: string;
}


const TimelineItem = ({ company, description, accomplishments, clients, period }: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-[140px_1px_1fr] gap-8 mb-12">
      {/* Date Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg py-1 px-4 h-fit w-40 mx-auto"
      >
        <span className="text-purple-500 font-bold text-sm whitespace-nowrap">{period}</span>
      </motion.div>

      {/* Timeline Line */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-full w-1 mx-auto rounded-full" />

      {/* Content Section */}
      <div>
        {/* Company */}
        <motion.h3
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white mb-2"
        >
          {company}
        </motion.h3>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 leading-relaxed"
        >
          <p>{description}</p>
          <br />
          {accomplishments && (
            <>
              <b>Accomplishments:</b>
              <ul className='pl-4'>
                {accomplishments.map((item, index) => (
                  <li key={index} className="list-disc list-outside mt-1">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          {clients && clients.length > 0 && (
            <>
              <div className='font-bold mb-1'>Clients:</div>
              {clients.map((client, idx) => (
                <div key={idx} className="mb-5">
                  <p className="italic font-semibold">{client.clientName}</p>
                  <ul className='pl-4'>
                    {client.accomplishments.map((acc, i) => (
                      <li key={i} className="list-disc list-outside mt-1">
                        {acc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = ({ projects }: { projects: TimelineItemProps[] }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Projects */}
      <div>
        {projects.map((project, index) => (
          <TimelineItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
