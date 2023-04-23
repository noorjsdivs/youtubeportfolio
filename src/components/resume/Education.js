import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PhD (CSIR-SRF)"
            subTitle="CSIR-Indian Institute of Integrative Medicine http://www.iiim.res.in/ , Jammu, enrolled in AcSIR (Academy of Scientific and Innovative Research, http://acsir.res.in/ ). Under Supervision of Dr. Ram A. Vishwakarma(2011-2015)"
            result="India"
            des="Title- Isolation, Synthetic Modifications and Biological Evaluaton of Compounds from Dysoxylum binectariferum, Bergenia ciliata and Mallotus philippensis, Submitted on 11 February 2015, Awarded on Sept 3, 2015."
          />
          <ResumeCard
            title="M.S.(Pharm)"
            subTitle="From Natural Product Chemistry Department, NIPER-Mohali http://www.niper.ac.in/ , Under Supervision of Dr. IP Singh(2005-2007)"
            result="India"
            des="Title- Synthesis and antileishmanial activity of piperine - amino acid conjugates
CGPA: 8.64/10"
          />
          <ResumeCard
            title="B.Pharmacy"
            subTitle="Lachoo Memorial College of Science & Technology- http:// www.lachoomemorial.org/ Jodhpur (affiliated to University of Rajasthan, Jaipur, 2001-2004) with 70 %."
            result="India (Rajasthan)"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="12th RBSE Ajmer"
            // subTitle="Lachoo Memorial College of Science & Technology- http:// www.lachoomemorial.org/ Jodhpur (affiliated to University of Rajasthan, Jaipur, 2001-2004) with 70 %."
            result="India (Rajasthan)"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="10th RBSE-Ajmer"
            // subTitle="Lachoo Memorial College of Science & Technology- http:// www.lachoomemorial.org/ Jodhpur (affiliated to University of Rajasthan, Jaipur, 2001-2004) with 70 %."
            result="India (Rajasthan)"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Assistant Professor"
            subTitle="IIT BHU VARANASI - (2018 - Present)"
            result="India"
            // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Post-Doctoral Research Associate"
            subTitle="Georgetown university Washington DC- (2016 - 2018)"
            result="USA"
            // des="LCMS based Metabolomics and Proteomics"
          />
          <ResumeCard
            title="Post-Doctoral Research Associate (CSIR-RA)"
            subTitle="CSIR-Indian Institute of Integrative Medicine http://www.iiim.res.in/ , Jammu - (2015 - 2016)"
            result="India"
            // des="enrolled in AcSIR (Academy of Scientific and Innovative Research, http://acsir.res.in/ ). Under Supervision of Dr. Ram A. Vishwakarma"
          />
          <ResumeCard
            title="Research Assistant"
            subTitle="CSIR-Indian Institute of Integrative Medicine http://www.iiim.res.in/ , Jammu - (2010 - 2011)"
            result="India"
            // des="enrolled in AcSIR (Academy of Scientific and Innovative Research, http://acsir.res.in/ ). Under Supervision of Dr. Ram A. Vishwakarma"
          />
          <ResumeCard
            title="Research Assistant (Industrial R & D)"
            subTitle="CSIR-Indian Institute of Integrative Medicine http://www.iiim.res.in/ , Jammu - (2010 - 2011)"
            result="India"
            // des="enrolled in AcSIR (Academy of Scientific and Innovative Research, http://acsir.res.in/ ). Under Supervision of Dr. Ram A. Vishwakarma"
          />
          <ResumeCard
            title="Research Associate"
            subTitle="<ResumeCard"
            title="Research Assistant"
            subTitle="CSIR-Indian Institute of Integrative Medicine (2007-2010)"
            result="India"
            // des="In Natural Product Chemistry lab (Medicinal Chemistry division) New Chemical Entities"
          />
            result="India"
            des="enrolled in AcSIR (Academy of Scientific and Innovative Research, http://acsir.res.in/ ). Under Supervision of Dr. Ram A. Vishwakarma"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education