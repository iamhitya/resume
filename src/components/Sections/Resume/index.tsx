import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Skills">
          <p className="pb-8">My software and application expertise is very diverse and includes <b>.NET Framework, .NET Core, C#, MVC, Web API, MS SQL Server, MongoDB, PostgreSQL, Entity Framework, LINQ, Angular, Vue.js, <a href='https://www.credly.com/users/iamhitya/badges' target='_blank' className="text-blue-600">Azure</a>, HTML5, JavaScript, JQuery, CSS,</b> and <b><a href='https://www.nopcommerce.com/en/hiteshkumar-vaghasiya' target='_blank' className="text-blue-600">nopCommerce</a></b>.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
          <p className="pt-8">Some tools and concepts that I have used and worked with like <b>Microservices, SOA, DDD, REST, SOAP, SOLID, Inversion of Control (IoC), Dependency Injection (DI), Design Patterns, TDD, Git, TFS, SVN, Agile, and Continuous Integration\Deployment (CI\CD)</b>, etc.</p>
        </ResumeSection>
        <ResumeSection title="Work Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
