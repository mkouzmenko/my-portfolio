import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Sears Holdings Corporation",
    'href': "https://www.sears.com",
    'desc': "List of services: \
    \
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
          'src': "images/example1.png",
          'comment': ""
        }
  },
  {
    'title': "Pitney Bowes",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "Serverless Portfolio",
        'src': "images/example2.png",
        'comment': ""
      }

  },
  {
    'title': "Department of Treasury – FMS",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "Department of Treasury – IRS",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },
  {
    'title': "Health Care Service Corporation ( HCSC )",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "CMS Centers for Medicare & Medicaid Services",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "University of California, Office of the President (UCOP)",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "Deloitte Consulting",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "example screenshot of a project involving cats",
        'src': "images/example3.png",
        'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
