import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';
import ResumeSection from './Resume/ResumeSection';
import {SkillGroup} from './Resume/Skills';

const Skills: FC = memo(() => {
  return (
    <Section className="bg-neutral-100 !py-8 md:!py-16" sectionId={SectionId.Skills}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Skills">
          <p className="pb-8">My software and application expertise is very diverse and includes <b>.NET Framework, .NET Core, C#, MVC, Web API, Microsoft SQL Server, MongoDB, PostgreSQL, Entity Framework, LINQ, Angular, Vue.js, <a href='https://www.credly.com/users/iamhitya/badges' target='_blank' className="text-blue-600">Azure</a>, HTML5, JavaScript, JQuery, CSS3,</b> and <b><a href='https://www.nopcommerce.com/en/hiteshkumar-vaghasiya' target='_blank' className="text-blue-600">nopCommerce</a></b>.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
          <p className="pt-8">Some tools and concepts that I have used and worked with like <b>Microservices, SOA, DDD, REST, SOAP, SOLID, Inversion of Control (IoC), Dependency Injection (DI), Design Patterns, TDD, Git, TFS, SVN, Agile, and Continuous Integration\Deployment (CI\CD)</b>, etc.</p>
        </ResumeSection>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
