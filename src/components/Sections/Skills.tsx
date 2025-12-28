import {FC,memo} from 'react';

import {SectionId,skills} from '../../data/data';
import Section from '../Layout/Section';
import ResumeSection from './Resume/ResumeSection';

const Skills: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 !py-8 md:!py-16" sectionId={SectionId.Skills}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Skills">
          <div className="space-y-6">
            <p className="pb-2">Core skill areas and tooling I work with across AI, backend, frontend, databases, cloud, DevOps, testing and project management.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map(group => (
                <div key={group.name}>
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">{group.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(s => (
                      <span key={s.name} className="px-3 py-1 bg-neutral-200 text-sm rounded-full">{s.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
