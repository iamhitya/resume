import {FC, memo} from 'react';

import {experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import ResumeSection from './Resume/ResumeSection';
import TimelineItem from './Resume/TimelineItem';

const Experience: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 !py-8 md:!py-16" sectionId={SectionId.Experience}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Work Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Experience.displayName = 'Experience';
export default Experience;
