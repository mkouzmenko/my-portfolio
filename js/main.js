import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Sears Holdings Corporation",
    'href': "https://www.sears.com",
    'desc': "\
•	Configuration Management Plans for software development projects#\
•	IBM Rational ClearCase/ClearQuest/Multisite installation#\
•	Design and implementation of integrated ClearQuest/ClearCase environment for change management#\
•	Design, implementation and support of Multisite replicated structure#\
•	Designe and implementation of RequisitePro repository based on MSSQL 2005#\
•	Design, implementation of SCM policy based on CC triggers (Perl)#\
•	Migration from Windows NT domain to Active directory domain#\
•	ClearCase/MultiSite UCM repository implementation for distributed project’s development teams in India, Chicago and Hoffman Estate#\
•	Improve the efficiency of CCRC with ClearCase triggers (Perl)#\
•	Migration from SSV,CVS and PVCS Version control systems to ClearCase#\
•	ClearCase/ClearQuest administration#\
•	ClearQuest schema Improvement#\
•	ClearCase LDAP configurations for AIX 3.5 OS#\
•	SAMBA configurations for AIX 3.5 and SunOS 10#\
•	Develop scripts for:#\
~ build process automation#\
~ deploy process automation, triggered on ClearCase rebase#\
~ backup automation process for NATAPP#\
~ garbage cleaner scripts for ClearCase repository (Perl)#\
• Migration the build migration from <Apache-maven-2.0.8 ,CrueseControl 1.7.0, SVN> to <Apache-maven-2.0.8, CrueseControl 1.7.0, ClearCase> for RAD 7.0#\
•	Extensively used Shell and Perl scripts for automatic build and release process and Project Console report system#\
•	Ongoing support and administration for IBM Rational tools",
        'image': {
          'desc': "Sears Holdings Corporation",
          'src': "images/sears.png",
          'comment': "Sears Holdings Corporation"
        }
  },
  {
    'title': "Pitney Bowes",
    'href': "http://www.pitneybowes.com",
    'desc': "\
•	ClearCase/ClearQuest/BuildForge administration#\
•	Setup build environment based on VmWare 1.0.7 under SUSE 10.1#\
•	Scripts development for build process automation, based on portable Qt 4.4.3 preprocessor#\
•	BuildForge Adapter's development#\
•	DoxyGen project1.5.7.1 integration with BuildForge#\
•	Clearcase Integration with BuildForge 7.0.2 using Perl scripting#\
•	MultiSite Base ClearCase repository implementation for distributed projects development teams in Shelton, Prodidact, Minn#\
•	Build automation scripts development based on Perl, Ant, VisBuildPro under BuildForge#\
•	Extensively used Shell and Perl scripts for build automatiion and release process#\
•	Report System designed and implemented based on Build Forge build and materials (build forge adapters)#\
•	Develop policy and scripts for automation deployment based on Install Anywhere#\
•	Provided ongoing support and administration of IBM Rational ClearCase/ClearQuest/BuildForge tools#",
    'image': {
        'desc': "Serverless Portfolio",
        'src': "images/pitney.png",
        'comment': "Pitney Bowes"
      }

  },
  {
    'title': "Department of Treasury – FMS",
    'href': "https://example.com",
    'desc': "\
•	ClearCase/ClearQuest installation and administration#\
•	WAS 7.0 administration and maintainance #\
•	Distributed version control system designed and implemented based on IBM Clearcase MultiSite + Message Broker 7.0+MQSeries7.0 instead of Clearcase shipping server for extra security reason (documentation/training)#\
•	Configuraton Management System (CMDB) design, implementation and configuration for track configuration items (Hardware, Software, Applications, Services, Customers) based on IBM ClearQuest#\
•	Project for migration from Rational Suite 7.0.1 to IBM Rational Team Concert 3.0#\
•	J2EE application`s automation build process under Hudson 2.1.1 + plug-ins (Hudson ClearCase Plug-in v1.3.5,  Deploy to WebSphere container Plug-in v 1.0). Distributed build for multiple platforms based on ANT/MAVEN build scripts.\
•	Quality metrics design and implemention with Report System (E2EE) based on Crystal Report plugin under RAD 7.5+ WAS 7.0,  BIRT 2.6, Web Focus 7.6.11, XAMPP (Apache + MySQL + PHP + Perl)\
UI presentation level development, based on PHP for Apache. Data Warehouse design and implementation, using Web Focus ETL functionality (source: MSSQL, target: MySql)#\
•	Activity (transformations) diagrams design and implementation for trace modifications in ClearQuest schemas. Diagrams describe all transitions between states, actions and granted roles (permissions) in one place#\
•	Regression test, design and implementation for ClearQuest user databases (32 user dbs) based on IBM Functional Tester/ CQTM#\
•	Pilot project for migration from Rational TeamTest 7.0.1 to IBM Rational Quality Manager 3.0.1#\
•	Worked with development groups to resolve tool problems and issues#\
",
    'image': {
        'desc': "Department of Treasury – FMS",
        'src': "images/fms.png",
        'comment': "Department of Treasury – FMS"
            }
  },

  {
    'title': "Department of Treasury – IRS",
    'href': "https://www.irs.gov/businesses/small-businesses-self-employed/maryland-1",
    'desc': "\
•	Rollout of Rational Team Concert 4.0 ( LDAP, WAS 8.0, Windows 7 )#\
•	ETL engine improvementation for upload the date from ClearQuest, ClearCase, RTC\
 to IBM Insight 1.0.1 for cross project reports#\
•	Rollout of Rational Quality Manager 4.0#\
•	Integration of RQM and IBM Functional Tester#\
",
        'image': {
        'desc': "Department of Treasury – IRS",
        'src': "images/irs.png",
        'comment': "Department of Treasury – IRS"
    }
  },

  {
    'title': "Health Care Service Corporation ( HCSC )",
    'href': "http://www.hcsc.com/",
    'desc': "\
•	Adjusted existing SDLC and implement on IBM RTC#\
•	Adjust existing RTC Scram template to customer (HCSC) needs#\
•	Adjust workflow/attributes/presentations based on existing workflow from ClearQuest#\
•	Created master/slave project architecture structure for centralize the control and simplify maintenance#\
•	Migration from ClearQuest 7.0.1 for RTC 3.0.1.3 (>100 projects in the list)#\
•	RTC triggers development (Dojo script)#\
•	Adviser/Participant plugins development (RTC SDK 3.0.1.3, java based)#\
•	HP Quality Center and IBM RTC integration (TaskTop Sync)#\
•	Jenkins and IBM RTC Integration #\
•	IBM Build Forge and IBM RTC Integration #\
•	WAS 7.0 administration and maintainance #\
    ",
    'image': {
        'desc': "Health Care Service Corporation ( HCSC )",
        'src': "images/hscs.png",
        'comment': "Health Care Service Corporation ( HCSC )"
    }
  },

  {
    'title': "CMS Centers for Medicare & Medicaid Services",
    'href': "https://www.cms.gov/",
    'desc': "\
•	ClearCase/ClearQuest administration#\
•	Maintenance and enhancement of CM build and deployment to Oracle EBS r11.5, based on IBM tool set:\
ClearCase 8.0/ ClearQuest 8.0(UCM),  BuildForge 7.1,  Ant/Perl/Shell scripts#\
•	Enhancement and Maintenance for build and deployment to IBM Message Broker 7  (BuildForge, Ant, perl, shell)#\
•	Enhancement and Maintenance for build and deployment to OBIEE 11G  ( BuildForge, perl/shell)#\
•	Design and implement Git repository for Oracle WebCenter development.#\
•	Pilot project for migration CM support system, based on legacy toolset to IBM RTC4.0.1#\
•	Pilot project for prove of conception using Sonatype Nexus as artifacts repository manager\
",
  'image': {
        'desc': "CMS Centers for Medicare & Medicaid Services",
        'src': "images/cms.png",
        'comment': "CMS Centers for Medicare & Medicaid Services"
    }
  },

  {
    'title': "University of California, Office of the President (UCOP)",
    'href': "http://www.ucop.edu/",
    'desc': "\
•	Migrate RTC 3.0.1.2 from production to QA environment#\
• Upgrade RTC to 4.0.7 and rename URI#\
•	Maintain build, promote, deploy for zOS with ISPF client#\
•	Maintain multi branches of Puppet repository with GIT#\
•	IBM UrbanCode Deploy/Release 6.0.1 incorporation \
",
        'image': {
        'desc': "University of California, Office of the President (UCOP)",
        'src': "images/ucop.png",
        'comment': "University of California, Office of the President (UCOP)"
    }
  },

  {
    'title': "Deloitte Consulting",
    'href': "https://www2.deloitte.com",
    'desc': "\
•	Migration CLM to new Data Center with URI renaming procedure and users accounts migration to the new Active Directory#\
•	Design and implementation of component structure, stream strategy, requirement and change management disciplines,\
 testing and promotion procedure based on IBM CML 5.0#\
•	CI/CD based on IBM RTC 5.0 (ANT/MAVEN) and IBM UrbanCode Deploy 6.1.1.5 integration#\
•	Design and implementation of deployment process to multiple environments (16 env, 84 servers), based \
on IBM UrbanCode Deploy 6.1.1.5#\
o	 UCD Server with IBM license server installation and configuration with MySql as a backend#\
o	Unix/Windows(WinRS) agent installation and configuration#\
o	Relay configuration with tunnel between networks#\
o	UrbanCode Deployment Semaphore, based on component properties and UCD API for protect \
deployment and BATCH process goes simultaneously#\
•	Design a implementation of report system based on IBM RRDI 5.0#\
•	Design and implementation of release management process based on IBM UrbanCode Release 6.1.1.3 \
integrated with IBM UrbanCode Deploy. (3 feature dependent projects in the release )#\
•	QA automation based on integration of RQM/RTF and UrbanCode Deployment with RQM Plugin#\
•	DB deployment automation based on integration of IBM DaticalDB and IBM UrbanCode Deployment with DaticalDB Plugin#\
•	RTC&Remedy integration with Rational Lifecycle Integration Adapters Tasktop Edition 1.2 (TaskTop)\
•	WAS 8.5.5 administration and maintainance #\
",
        'image': {
        'desc': "Deloitte Consulting",
        'src': "images/deloitte.png",
        'comment': "Deloitte Consulting"
    }
  },

  {
    'title': "District of Columbia Courts",
    'href': "https://www.dccourts.gov/",
    'desc': "\
• IBM CLM 6.0.5 installation and configuration (Enterprise topology, Oracle 12R2, WebSphere 9.0)#\
• Migration of IBM RequisitePro 7.1.3.6 to IBM DOORS Next Generation 6.0.5 (22 projects migrated)#\
•	Migration of IBM ClearCase/ClearQuest:#\
~	> from version 8.0.0.6 to version 9.0.0.5#\
~	> from Stand along Windows 2008 to VM Windows 2012#\
~	> from Oracle 11g to Oracle 12c#\
~	> 56 vobs and 15 schemas was migrated #\
•	IBM Functional Tester 8.1 installation and configuration#\
•	WAS 9.0.0.5 administration and maintainance #\
",
        'image': {
        'desc': "District of Columbia Courts",
        'src': "images/district.png",
        'comment': "District of Columbia Courts"
    }
  }

]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
