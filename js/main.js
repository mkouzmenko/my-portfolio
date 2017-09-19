import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Sears Holdings Corporation",
    'href': "https://www.sears.com",
    'desc': "\
•	ClearCase/ClearQuest administration. \
•	Designed and implemented RequisitePro repository based on MSSQL 2005 \
•	Create Configuration Management Plans for software development projects. \
•	IBM Rational ClearCase/Multisite installation process. \
•	Design and rollout of integrated ClearQuest/ClearCase environment for change management. \
•	Design, realization and support of Multisite replicated structure. \
•	Provided SCM policy based on triggers pocket (Perl). \
•	Migration from Windows NT domain to Active directory domain \
•	MultiSite ClearCase UCM pilot repository implementation for distributed project’s development teams in India, Chicago and Hoffman Estate. \
•	Improved the efficiency of CCRC by improving of ClearCase triggers pocket (Perl).\
•	Migrated teams from SSV,CVS and PVCS Version control systems to ClearCase.\
•	ClearQuest schema Improvement.\
•	ClearCase LDAP configurations for AIX 3.5 OS. \
•	SAMBA configurations for AIX 3.5 and SunOS 10. \
•	Develop scripts for: \
•	build process automation. \
•	deploy process automation, during ClearCase rebase. \
•	backup automation  process for NATAPP . \
•	garbage cleaner scripts for ClearCase repository. \
•	SCM builds and metrics. \
•	Build process adaptation from <Apache-maven-2.0.8 ,CrueseControl 1.7.0,SVN> to <Apache-maven-2.0.8, CrueseControl 1.7.0,ClearCase> for RAD 7.0 \
•	Extensively used Shell and Perl scripts for automatic build and release process and Project Console report system. \
•	Created and maintained IBM Rational release areas and install scripts. \
•	Installed and configured IBM Rational servers and clients. \
• Provided ongoing support and administration of all IBM Rational tools.",
        'image': {
          'desc': "example screenshot of a project involving code",
          'src': "images/example2.png",
          'comment': ""
        }
  },
  {
    'title': "Pitney Bowes",
    'href': "http://www.pitneybowes.com",
    'desc': "\
•	ClearCase/ClearQuest/BuildForge administration.\
•	Setup build environment based on VmWare 1.0.7 under SUSE 10.1.\
•	Develop scripts for automation of build process using of portable Qt 4.4.3 preprocessor.\
•	Write adapters under BuildForge 7.0.2 for statistic collection.\
•	Configure DoxyGen project1.5.7.1\
•	Integration with BuildForge 7.0.2 using Perl scripting.\
•	MultiSite Base ClearCase repository implementation for distributed projects development teams in Shelton, Prodidact, Minn.\
•	Develop policy and scripts for automation of build based on perl, ant, VisBuildPro under BuildForge.\
•	Clearcase Integration with BuildForge.\
•	Extensively used Shell and Perl scripts for automatic build and release process.\
•	Worked with development groups to resolve tool problems and issues.\
•	Installed and configured IBM Rational servers and clients.\
•	Report System designed and implemented based on Build Forge build and materials (build forge adapters)\
•	Source code documentation based on DoxyGen\
•	Develop policy and scripts for automation of deployment based on Install Anywhere \
•	Provided ongoing support and administration of all IBM Rational tools.\
•	Software includes Base ClearCase , ClearCaseWeb, CCRC, ClearQuest, ClearQuest Web, Visual Studio 2008, SUSE 10.1 Linux, Qt 4.4.3, BuildForge 7.0.2, DoxyGen 1.5.7.1, CppUnit 1.12.1, VisBuildPro 6, Qt;\
",
    'image': {
        'desc': "Serverless Portfolio",
        'src': "images/example2.png",
        'comment': ""
      }

  },
  {
    'title': "Department of Treasury – FMS",
    'href': "https://example.com",
    'desc': "\
•	ClearCase/ClearQuest administration.\
•	WAS 7.0 maintain and administration.\
•	Distributed version control system designed and implemented based on IBM Clearcase MultiSite + Message Broker 7.0+MQSeries7.0 instead of Clearcase shipping server for extra security reason (documentation/training).\
•	Configuration Management System designed and implemented for manage configuration items (Hardware, Software, Applications, Services, Customers) based on IBM ClearQuest.\
•	Pilot project for migration from Rational Suite 7.0.1 to IBM Rational Team Concert 3.0.\
•	Automation building for J2EE applications under Hudson 2.1.1 + plug-ins (Hudson ClearCase Plug-in v1.3.5,  Deploy to WebSphere container Plug-in v 1.0). Distributed build for multiple platforms based on ANT/MAVEN build scripts.\
•	Quality metrics designed and implemented  in Report System (E2EE) based on Crystal Report under RAD 7.5+ WAS 7.0,  BIRT 2.6, Web Focus 7.6.11, XAMPP (Apache + MySQL + PHP + Perl). UI presentation level development, based on PHP for Apache. Data Warehouse design and implementation, using Web Focus ETL functionality (source: MSSQL, target: MySql).\
•	Activity (transformations) diagrams designed and implemented for trace modifications in ClearQuest schemas. Diagrams describe all transitions between states, actions and granted roles (permissions) in one place.\
•	Regression test designed and implemented for ClearQuest user databases (32 user dbs) based on IBM Functional Tester/ CQTM.\
•	Pilot project for migration from Rational TeamTest 7.0.1 to IBM Rational Quality Manager 3.0.1\
•	Worked with development groups to resolve tool problems and issues.\
",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example2.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "Department of Treasury – IRS",
    'href': "https://example.com",
    'desc': "\
•	Rollout of Rational Team Concert 4.0 ( LDAP, WAS 8.0, Windows 7 )\
•	Improvement of ETL engine for upload the date from ClearQuest, ClearCase, RTC \
 to IBM Insight 1.0.1 for cross project reports.\
•	Rollout of Rational Quality Manager 4.0\
•	Integration of RQM and IBM Functional Tester.\
",
        'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example2.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },
  {
    'title': "Health Care Service Corporation ( HCSC )",
    'href': "http://www.hcsc.com/",
    'desc': "\
•	Design and implement adjusted SDLC to IBM RTC based on existing SDLC.\
o	Adjust existing RTC Scram template to customer (HCSC) needs.\
o	Adjust workflow/attributes/presentations based on existing workflow from ClearQuest.\
o	Created master/slave project architecture structure for centralize control and simplify maintenance.\
o	Adjust permissions.\
o	Adjust version control component structure based on existing component structure.\
•	Migration from ClearQuest 7.0.1 for RTC 3.0.1.3 (>100 projects in the list)\
•	Development RTC triggers (Dojo script)\
•	Development of Adviser/Participant plugins (RTC SDK 3.0.1.3, java based).\
•	Integration of HP Quality Center and IBM RTC (TaskTop Sync).\
•	Integration Jenkins and IBM RTC\
•	Integration IBM Build Forge and IBM RTC\
    ",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example2.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "CMS Centers for Medicare & Medicaid Services",
    'href': "https://www.cms.gov/",
    'desc': "\
•	ClearCase/ClearQuest administration.\
•	Maintenance and enhancement of CM build and deployment to Oracle EBS r11.5, based on IBM tool set.\
ClearCase 8.0/ ClearQuest 8.0(UCM),  BuildForge 7.1,  Ant/Perl/Shell scripts.\
•	Maintenance and enhancement of build and deployment to IBM Message Broker 7  (BuildForge, Ant, perl, shell).\
•	Maintenance and enhancement of build and deployment to OBIEE 11G  ( BuildForge, perl/shell) \
•	Design and implement Git repository for Oracle WebCenter development. Import source code from Git to ClearCase.\
•	Pilot project for migration CM support system, based on legacy toolset to IBM RTC4.0.1.\
•	Pilot project for prove of conception using Sonatype Nexus as artifacts repository manager.\
",
  'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example2.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "University of California, Office of the President (UCOP)",
    'href': "http://www.ucop.edu/",
    'desc': "\
•	Migrate RTC 3.0.1.2 from production to QA environment, upgrade RTC QA to 4.0.7 and rename URI.\
•	Maintain build, promote, deploy for zOS with ISPF client.\
•	Maintain multi branches of Puppet repository with GIT.\
•	Incorporation of IBM UrbanCode Deploy/Release  6.0.1  (POC)\
",
        'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example2.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "Deloitte Consulting",
    'href': "https://deloitte.com",
    'desc': "\
•	Migration CLM to new Data Center with URI renaming procedure and users accounts migration to new LDAP.\
•	Design and implementation of component structure, stream strategy, requirement and change management disciplines,\
 testing and promotion procedure based on IBM CML 5.0.\
•	CI/CD based on IBM RTC 5.0 (ANT/MAVEN) and IBM UrbanCode Deploy 6.1.1.5 integration.\
•	Design and implementation of deployment process to multiple environments (16 env, 84 servers), based \
on IBM UrbanCode Deploy 6.1.1.5.\
o	 UCD Server with IBM license server installation and configuration, based on MySql as a backend. \
o	Unix/Windows(WinRS) agent installation and configuration. \
o	Relay configuration with tunnel between networks.\
o	UrbanCode Deployment Semaphore, based on component properties and UCD API for protect \
deployment and BATCH process goes simultaneously.\
•	Design a implementation of report system based on IBM RRDI 5.0.\
•	Design and implementation of release management process based on IBM UrbanCode Release 6.1.1.3 \
integrated with IBM UrbanCode Deploy. (3 feature dependent projects in the release )\
•	QA automation based on integration of RQM/RTF and UrbanCode Deployment with RQM Plugin.\
•	DB deployment automation based on integration of IBM DaticalDB and IBM UrbanCode Deployment with DaticalDB Plugin.\
•	RTC&Remedy integration with Rational Lifecycle Integration Adapters Tasktop Edition 1.2 (TaskTop)\
",
        'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example2.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
