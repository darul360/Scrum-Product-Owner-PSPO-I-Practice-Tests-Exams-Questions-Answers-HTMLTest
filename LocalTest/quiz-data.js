const quizData = [
  {
    "question": "A Scrum Team has been working on a product for 9 Sprints. A new Product Owner who is new to Scrum joins the team and understands she is accountable for the Product Backlog. However, she is unsure about the purpose of the Product Backlog. She has read that the Product Backlog should be a list of all user features for the product. She goes to the Scrum Master asking where to put the other types of requirements that are going to be taken into account. Are all of the following types of requirements acceptable on a Product Backlog? Stability requirements. Performance requirements. Product Functionality. Documentation. Fixes. (choose the best answer)",
    "options": [
      {
        "text": "Yes, they all belong on the Product Backlog. Product Backlog is supposed to be the Single Source of Truth for all the work for the product.",
        "correct": true
      },
      {
        "text": "No, Product Backlog is a tool for the Product Owner. The Product Owner represents the users and stakeholders. Other types of requirements should be managed separately by the Developers. They are not the Product Owner's concern.",
        "correct": false
      }
    ]
  },
  {
    "question": "What variables should a Product Owner consider when ordering the Product Backlog? (choose the best answer)",
    "options": [
      {
        "text": "Development cohesion as indicated by the Developers.",
        "correct": false
      },
      {
        "text": "The availability of resources and skills for implementation.",
        "correct": false
      },
      {
        "text": "Lowest development cost in order to maximize Return on Investment (ROI).",
        "correct": false
      },
      {
        "text": "Effort first, then value.",
        "correct": false
      },
      {
        "text": "Anything that informs them to achieve the product's goals and to optimize the value delivered.",
        "correct": true
      }
    ]
  },
  {
    "question": "It is mandatory for the Product Owner to monitor and share progress of the Product Backlog by using which method? (choose the best answer)",
    "options": [
      {
        "text": "A Product or Release burn-down chart.",
        "correct": false
      },
      {
        "text": "A Value burn-up chart.",
        "correct": false
      },
      {
        "text": "A Gantt Chart.",
        "correct": false
      },
      {
        "text": "Any practice based on trends of work completed and upcoming work.",
        "correct": true
      },
      {
        "text": "A Sprint Review acceptance report.",
        "correct": false
      }
    ]
  },
  {
    "question": "The Product Owner manages the Product Backlog. Who is accountable for estimating the effort to complete the Product Backlog Items? (choose the best answer)",
    "options": [
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The PMO.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Sprint Review is the only time at which stakeholder feedback is taken into account.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "How do timeboxes help the Product Owner and the other members of the Scrum Team validate assumptions, adapt, and maximize the value of their product? (choose the best answer)",
    "options": [
      {
        "text": "Timeboxes help by making sure a Sprint does not stop until all testing is done, and the work is verified by the Product Owner.",
        "correct": false
      },
      {
        "text": "Timeboxes assure the Product Owner that the Developers will finish all work on the Sprint Backlog by the end of the Sprint.",
        "correct": false
      },
      {
        "text": "Timeboxes help minimize risk by creating the opportunity to validate assumptions using feedback from users and the market; allowing Scrum Teams to inspect progress toward the Product Goal and decide whether to pivot or persevere.",
        "correct": true
      },
      {
        "text": "At the end of each Sprint when the timebox expires a detailed report with all test cases and test results is available.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The value delivered by a product can only be determined by revenue.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "How important is it for a Product Owner to order Product Backlog Items by using value points? (choose the best answer)",
    "options": [
      {
        "text": "Calculating value points is a predictive approach that conflicts with the empiricism of Scrum, and is therefore not acceptable.",
        "correct": false
      },
      {
        "text": "Using value points is the ultimate way for a Product Owner to predict the value that the product will provide.",
        "correct": false
      },
      {
        "text": "The Product Owner may order the Product Backlog by using value points or select another technique, the decision is up to them.",
        "correct": true
      }
    ]
  },
  {
    "question": "When can the Product Backlog be updated? (choose the best answer)",
    "options": [
      {
        "text": "Never, unless agreed to by the change request.",
        "correct": false
      },
      {
        "text": "At any time when done by the Product Owner or a delegate.",
        "correct": true
      },
      {
        "text": "Only after a Sprint Review if agreed to by the stakeholders.",
        "correct": false
      },
      {
        "text": "Only during Product Backlog Refinement sessions if the Product Owner is present.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Product Owner should have the entire Product Backlog documented in detail before the first Sprint can start?",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Sprint Backlog is a result of Sprint Planning, and it includes the Sprint Goal.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who is accountable for creating a valuable and usable Increment each Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The CEO.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": false
      },
      {
        "text": "The Scrum Team.",
        "correct": true
      },
      {
        "text": "The Product Owner.",
        "correct": false
      }
    ]
  },
  {
    "question": "What are two effective ways for the Scrum Team to make non-functional requirements visible? (choose the best two answers)",
    "options": [
      {
        "text": "Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.",
        "correct": false
      },
      {
        "text": "Add them to the Product Backlog to ensure transparency.",
        "correct": true
      },
      {
        "text": "Put them on a separate list on the Scrum board, available for all to see.",
        "correct": false
      },
      {
        "text": "Add them to the Definition of Done so the work is taken care of every Sprint.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Cone of Uncertainty can be used to do what? (choose the best answer)",
    "options": [
      {
        "text": "Determine the length of the next Sprint.",
        "correct": false
      },
      {
        "text": "Determine the cost of a project before it begins.",
        "correct": false
      },
      {
        "text": "Determine whether to cut quality, similar to the Iron Triangle of project management.",
        "correct": false
      },
      {
        "text": "Illustrate that as a project forecast lengthens, it is increasingly less certain.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which is NOT a valid consideration when ordering a Product Backlog? (choose the best answer)",
    "options": [
      {
        "text": "Risk.",
        "correct": false
      },
      {
        "text": "Tools and techniques.",
        "correct": true
      },
      {
        "text": "Importance to customers.",
        "correct": false
      },
      {
        "text": "Alignment with business strategy and goals.",
        "correct": false
      },
      {
        "text": "Dependencies on other Product Backlog Items.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Product Owner must write all of the Product Backlog Items (e.g. user stories, requirements, etc.) on the Product Backlog before handing them over to the Scrum Team.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following are criteria to order Product Backlog Items? (choose all that apply)",
    "options": [
      {
        "text": "Value of Product Backlog Items.",
        "correct": true
      },
      {
        "text": "Dependencies between Product Backlog Items.",
        "correct": true
      },
      {
        "text": "Dependencies to other products.",
        "correct": true
      },
      {
        "text": "The availability of the Scrum Master.",
        "correct": false
      },
      {
        "text": "All of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "All Scrum artifacts must be transparent to ensure sufficient accuracy of inspection. Which two measures ensure that the Product Backlog is transparent? (choose the best two answers)",
    "options": [
      {
        "text": "The Product Backlog is managed using a web-based tool.",
        "correct": false
      },
      {
        "text": "The Product Backlog is available to all stakeholders.",
        "correct": true
      },
      {
        "text": "The Product Backlog is ordered.",
        "correct": true
      },
      {
        "text": "Each Product Backlog Item has a MoSCoW priority.",
        "correct": false
      },
      {
        "text": "The Product Backlog only has work for the next 2 Sprints.",
        "correct": false
      }
    ]
  },
  {
    "question": "Why is it important that there is only one Product Owner per product? (choose the best three answers)",
    "options": [
      {
        "text": "The Scrum Team always knows who determines the order of the Product Backlog.",
        "correct": false
      },
      {
        "text": "The Scrum Master knows who acts as their backup while on vacation.",
        "correct": false
      },
      {
        "text": "It is clear who is accountable for the ultimate value of the product.",
        "correct": true
      },
      {
        "text": "It would confuse the stakeholders if they had to work with more than one person.",
        "correct": true
      },
      {
        "text": "It helps avoid barriers to effective communication and rapid decision-making.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following practices might help the Product Owner minimize waste in developing and sustaining the Product Backlog? (choose the best two answers)",
    "options": [
      {
        "text": "Avoid distracting the Scrum Team by maintaining newly gathered Product Backlog items in a separate Product Backlog until they are fully understood.",
        "correct": false
      },
      {
        "text": "Only fully describe Product Backlog items when it seems likely they will be implemented.",
        "correct": true
      },
      {
        "text": "Hand off ownership of the Product Backlog to someone else.",
        "correct": false
      },
      {
        "text": "Remove items from the Product Backlog that have not been addressed in a long time.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: Product Owners must create clear and unambiguous acceptance criteria for each Product Backlog Item before it may be selected in Sprint Planning.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "What three things might a Scrum Product Owner focus on to ensure the product delivers value? (choose the best three answers)",
    "options": [
      {
        "text": "Minimizing changes to project scope.",
        "correct": false
      },
      {
        "text": "How much of the functionality of the product is being used.",
        "correct": true
      },
      {
        "text": "How quickly or easily the product can be absorbed and used by its customers.",
        "correct": true
      },
      {
        "text": "Direct customer feedback.",
        "correct": true
      },
      {
        "text": "Velocity is increasing over time.",
        "correct": false
      }
    ]
  },
  {
    "question": "How often should customer satisfaction be measured? (choose the best answer)",
    "options": [
      {
        "text": "Quarterly.",
        "correct": false
      },
      {
        "text": "Annually.",
        "correct": false
      },
      {
        "text": "Daily.",
        "correct": false
      },
      {
        "text": "Frequently.",
        "correct": true
      }
    ]
  },
  {
    "question": "Why would you expect a Product Owner to care that the Scrum Team adheres to its Definition of Done? (choose the best two answers)",
    "options": [
      {
        "text": "To be able to punish the team when they do not meet their velocity goal for the Sprint.",
        "correct": false
      },
      {
        "text": "The Product Owner should not care about the Definition of Done, it is the Scrum Team's responsibility.",
        "correct": false
      },
      {
        "text": "The Definition of Done can affect the product's total cost of ownership.",
        "correct": true
      },
      {
        "text": "To have complete transparency into what has been done at the end of each Sprint.",
        "correct": true
      },
      {
        "text": "To forecast the team's productivity over time.",
        "correct": false
      }
    ]
  },
  {
    "question": "A product's success is measured by: (choose the best three answers)",
    "options": [
      {
        "text": "The impact on customer satisfaction.",
        "correct": true
      },
      {
        "text": "The impact on cost.",
        "correct": true
      },
      {
        "text": "The impact on my boss's mood.",
        "correct": false
      },
      {
        "text": "The delivery of upfront defend scope compared to the upfront planned time.",
        "correct": false
      },
      {
        "text": "The impact on my performance rating.",
        "correct": false
      },
      {
        "text": "The impact on revenue.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: Dependencies could influence how the Product Owner orders Product Backlog Items.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "Scrum is based on empiricism. All of its artifacts must be transparent to ensure sufficient accuracy of inspection. How can the Scrum Team maintain the Product Backlog to maximize its transparency? (choose the best answer)",
    "options": [
      {
        "text": "The Product Backlog is only updated at a release planning meeting with the stakeholders and the change control board present.",
        "correct": false
      },
      {
        "text": "Product Backlog Items must be sized such that the highest ordered items are no bigger than a Sprint.",
        "correct": false
      },
      {
        "text": "The Product Backlog is only updated at the Sprint Review, when both the Scrum Team and the stakeholders are available.",
        "correct": false
      },
      {
        "text": "Product Backlog Items should hold no more than 8 points of work, which is the average in the range of acceptable sizes of 1, 2, 3, 5, 8, and 13.",
        "correct": false
      },
      {
        "text": "The Product Backlog is continually kept up to date with the most recent insights.",
        "correct": true
      }
    ]
  },
  {
    "question": "What is the responsibility of the Product Owner in crafting the Sprint Goal? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner has no responsibility in it. This is the Developers responsibility.",
        "correct": false
      },
      {
        "text": "The Product Owner defines the scope for a Sprint and therefore also the Sprint Goal.",
        "correct": false
      },
      {
        "text": "The Product Owner should not come to the Sprint Planning without a clearly defined Sprint Goal.",
        "correct": false
      },
      {
        "text": "The Product Owner should come to the Sprint Planning with a business objective in mind and work with the Developers to craft the Sprint Goal.",
        "correct": true
      },
      {
        "text": "The Product Owner must work with stakeholders to set each Sprint's Goal.",
        "correct": false
      }
    ]
  },
  {
    "question": "When should the Product Owner update the project plan? (choose the best answer)",
    "options": [
      {
        "text": "The Product Backlog is the plan in Scrum. It is updated as new information and insights emerge.",
        "correct": true
      },
      {
        "text": "The project plan must be updated prior to the Sprint Retrospective.",
        "correct": false
      },
      {
        "text": "Before the Sprint Planning to know how much work will have to be done in the Sprint.",
        "correct": false
      },
      {
        "text": "After the Daily Scrum to ensure an accurate daily overview of project progress.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Product Backlog is: (choose the best three answers)",
    "options": [
      {
        "text": "Managed by the Product Owner.",
        "correct": true
      },
      {
        "text": "Only visible to the Product Owner and stakeholders.",
        "correct": false
      },
      {
        "text": "An exhaustive list of upfront approved requirements to be implemented.",
        "correct": false
      },
      {
        "text": "Ordered based on priority, value, dependencies, and risk.",
        "correct": true
      },
      {
        "text": "An inventory of things to be done for the Product.",
        "correct": true
      }
    ]
  },
  {
    "question": "How much time must a Product Owner spend with the Developers? (choose the best answer)",
    "options": [
      {
        "text": "As much time as the Developers ask the Product Owner to be present.",
        "correct": false
      },
      {
        "text": "100%.",
        "correct": false
      },
      {
        "text": "Enough so that the Product Owner is confident, the Increment will meet the intended value.",
        "correct": true
      },
      {
        "text": "40%, or more if the stakeholders agree.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which metrics will help a Product Owner determine if a product delivering value? (choose the best two answers)",
    "options": [
      {
        "text": "Velocity.",
        "correct": false
      },
      {
        "text": "Productivity.",
        "correct": false
      },
      {
        "text": "Time to market.",
        "correct": true
      },
      {
        "text": "Customer satisfaction.",
        "correct": true
      },
      {
        "text": "Percentage of scope implemented.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: All planned work for the Product done by the Scrum Team must originate from the Product Backlog.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "What typically happens if the Product Backlog is not sufficiently clear at Sprint Planning? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner should select the Sprint Goal for the Scrum Team so that work can begin.",
        "correct": false
      },
      {
        "text": "The Developers will find it difficult to create a Sprint forecast they are confident they can meet.",
        "correct": true
      },
      {
        "text": "Nothing in particular.",
        "correct": false
      },
      {
        "text": "The Scrum Master should not allow this to happen. Look for a new Scrum Master and restart the Sprint.",
        "correct": false
      },
      {
        "text": "Sprint Planning is cancelled so refinement can be done first.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: During the Sprint Review the stakeholder's role is to reorder the Product Backlog.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: A Product Owner can measure success by an increase in the team's velocity.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "What might indicate to a Product Owner that she needs to work more with the Scrum Team? (choose the best answer)",
    "options": [
      {
        "text": "People leave the Scrum Team.",
        "correct": false
      },
      {
        "text": "She is not working fulltime with the Scrum Team.",
        "correct": false
      },
      {
        "text": "The acceptance criteria do not appear to be complete.",
        "correct": false
      },
      {
        "text": "The Increment presented at the Sprint Review does not reflect what she thought she had asked for.",
        "correct": true
      }
    ]
  },
  {
    "question": "What are two effective ways for a Scrum Team to ensure security concerns are satisfied? (choose the best two answers)",
    "options": [
      {
        "text": "Delegate the work to the security department.",
        "correct": false
      },
      {
        "text": "Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog Items.",
        "correct": false
      },
      {
        "text": "Add security concerns to the Definition of Done.",
        "correct": true
      },
      {
        "text": "Add a Sprint to specifically resolve all security concerns.",
        "correct": false
      },
      {
        "text": "Have the Scrum Team create Product Backlog Items for each concern.",
        "correct": true
      }
    ]
  },
  {
    "question": "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a specialist who is external to the teams. What should the Scrum Master consider in this situation? (choose the best two answers)",
    "options": [
      {
        "text": "The need to have enough work to keep all Developers busy.",
        "correct": false
      },
      {
        "text": "The ability of the Scrum Teams to produce integrated Increments.",
        "correct": true
      },
      {
        "text": "The desire to maintain a stable velocity.",
        "correct": false
      },
      {
        "text": "The benefit of Developers figuring out a solution for themselves.",
        "correct": true
      }
    ]
  },
  {
    "question": "In order to maximize the value of the product, a Product Owner needs awareness of the following: (choose the best answer)",
    "options": [
      {
        "text": "Competitive reasearch.",
        "correct": false
      },
      {
        "text": "Customer feedback.",
        "correct": false
      },
      {
        "text": "Product vision.",
        "correct": false
      },
      {
        "text": "Forecasting & feasibility",
        "correct": false
      },
      {
        "text": "All of the above.",
        "correct": true
      },
      {
        "text": "None of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "The Developers ask their Product Owner to re-order the Product Backlog. The team is waiting for an external supplier to deliver a component. Without that component there will not be enough work in the next Sprint to occupy the full team. As the Scrum Master, what advice would you give the Product Owner? (choose the best answer)",
    "options": [
      {
        "text": "Tell the Product Owner that the Product Backog should be ordered to maximize utilization of the Developers.",
        "correct": false
      },
      {
        "text": "Tell the Product Owner to re-order the Product Backlog so the work involving the external component can be planned in a separate Sprint.",
        "correct": false
      },
      {
        "text": "Remind the Product Owner that their primary concern is the flow of value reflected in the ordering of the Product Backlog.",
        "correct": true
      }
    ]
  },
  {
    "question": "A Project Manager working with your Scrum Team has raised concerns about progress and money spent. What are the two best responses? (choose the best two answers)",
    "options": [
      {
        "text": "Show the Earned Value Analysis (EVA) report.",
        "correct": false
      },
      {
        "text": "Scrum does not have Project Managers so disregard their concerns.",
        "correct": false
      },
      {
        "text": "Promote transparency by sharing the Product Backlog and ensuring the Project Manager has access.",
        "correct": true
      },
      {
        "text": "Share the last stakeholder briefing document prepared by the Product Owner.",
        "correct": false
      },
      {
        "text": "Have a discussion with the Project Manager, share the current impediments and forecast for the Sprint.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Product Owner is the person who will be held accountable if a product does not achieve its goals or deliver value. Does this mean that the Product Owner has final say over the Definition of Done? (choose the best answer)",
    "options": [
      {
        "text": "Yes, the Product Owner decides the Definition of Done. The Developers may be consulted.",
        "correct": false
      },
      {
        "text": "No, the Scrum Team decides the Definition of Done. The Product Owner is just one member of the Scrum Team.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statement best describes Scrum? (choose the best answer)",
    "options": [
      {
        "text": "A defined and predictive process that conforms to the principles of Scientific Management.",
        "correct": false
      },
      {
        "text": "A framework to generate value through adaptive solutions for complex problems.",
        "correct": true
      },
      {
        "text": "A cookbook that defines best practices for software development.",
        "correct": false
      },
      {
        "text": "A complete methodology that defines how to develop software.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is a Product Owner typically responsible for during a Sprint? (choose the best two answers)",
    "options": [
      {
        "text": "Nothing.",
        "correct": false
      },
      {
        "text": "Working with the Scrum Team on Product Backlog Refinement.",
        "correct": true
      },
      {
        "text": "Attending every Daily Scrum to answer questions about the Sprint Backlog items.",
        "correct": false
      },
      {
        "text": "Updating the work plan for the Developers on a daily basis.",
        "correct": false
      },
      {
        "text": "Collaborating with stakeholders, users and customers.",
        "correct": true
      },
      {
        "text": "Creating financial reporting upon the spent hours reported by the Developers.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Product Owners must specify complete acceptance criteria for a Product Backlog Item before the Developers can select the item in Sprint Planning.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Who is accountable for tracking the remaining work toward the Sprint Goal? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The Project Manager.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": false
      }
    ]
  },
  {
    "question": "The Scrum Team should have all the skills needed to: (choose the best answer)",
    "options": [
      {
        "text": "Complete the project within the date and cost as calculated by the Product Owner.",
        "correct": false
      },
      {
        "text": "Turn Product Backlog Items into a valuable, useful Increment.",
        "correct": true
      },
      {
        "text": "Do all of the development work, except for specialized testing that requires additional tools and environments.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which three of the following are timeboxed events in Scrum? (choose the best three answers)",
    "options": [
      {
        "text": "Sprint 0.",
        "correct": false
      },
      {
        "text": "Release Retrospective.",
        "correct": false
      },
      {
        "text": "Sprint Retrospective.",
        "correct": true
      },
      {
        "text": "Daily Scrum.",
        "correct": true
      },
      {
        "text": "Sprint Planning.",
        "correct": true
      },
      {
        "text": "Release Planning.",
        "correct": false
      },
      {
        "text": "Sprint Testing.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who starts the Daily Scrum? (choose the best answer)",
    "options": [
      {
        "text": "The person who has the token.",
        "correct": false
      },
      {
        "text": "Whoever the Developers decide should start.",
        "correct": true
      },
      {
        "text": "The person coming in last. This encourages people to be on time and helps to stay within the timebox.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Scrum Master. This ensures that the Developers have the event, and it stays within the timebox.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum? (choose the best answer)",
    "options": [
      {
        "text": "Lead the discussions.",
        "correct": false
      },
      {
        "text": "Make sure that all 3 questions have been answered by each member of the team.",
        "correct": false
      },
      {
        "text": "Keep track of whether each Developer has a chance to speak.",
        "correct": false
      },
      {
        "text": "Teach the Developers to keep the Daily Scrum within 15 minutes.",
        "correct": true
      },
      {
        "text": "All of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Sprint Reviews are an opportunity to collect stakeholder feedback.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who is on the Scrum Team? (choose all that apply)",
    "options": [
      {
        "text": "Scrum Master.",
        "correct": true
      },
      {
        "text": "Product Owner.",
        "correct": true
      },
      {
        "text": "Developers.",
        "correct": true
      },
      {
        "text": "Project Manager.",
        "correct": false
      },
      {
        "text": "None of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "What tactic should a Scrum Master use to divide a group of 100 people into multiple Scrum Teams? (choose the best answer)",
    "options": [
      {
        "text": "Ask the people to divide themselves into teams.",
        "correct": true
      },
      {
        "text": "Create teams based on their skills across multiple layers (such as database, UI, etc.).",
        "correct": false
      },
      {
        "text": "Ask the Product Owner to assign the people to teams.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following are true about the length of the Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The length of the Sprint should be proportional to the work that is done in between Sprints.",
        "correct": false
      },
      {
        "text": "Sprint length is determined during Sprint Planning, and should hold the time it will take to code the planned features in the upcoming Sprint, but does not include time for any testing.",
        "correct": false
      },
      {
        "text": "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Scrum Team can deliver what is to be accomplished in the upcoming Sprint.",
        "correct": false
      },
      {
        "text": "All Sprints must be one month or less.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which are appropriate topics for discussion in a Sprint Retrospective? (choose the best three answers)",
    "options": [
      {
        "text": "Definition of Done.",
        "correct": true
      },
      {
        "text": "Arranging the Sprint Backlog for the next Sprint.",
        "correct": false
      },
      {
        "text": "How the Scrum Team does its work.",
        "correct": true
      },
      {
        "text": "Team relations.",
        "correct": true
      },
      {
        "text": "The value of work currently represented in the Product Backlog.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Product Owner makes sure the correct stakeholders are invited to the Sprint Retrospective. They might have important instructions for team improvements.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Who has the final decision about the order of items in the Product Backlog? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum Team.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": true
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Stakeholders.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": false
      }
    ]
  },
  {
    "question": "What are the two primary ways a Scrum Master helps a Scrum Team work at its highest level of productivity? (choose the best two answers)",
    "options": [
      {
        "text": "By ensuring the meetings start and end at the proper time.",
        "correct": false
      },
      {
        "text": "By facilitating Scrum Team decisions.",
        "correct": true
      },
      {
        "text": "By keeping high value features high in the Product Backlog.",
        "correct": false
      },
      {
        "text": "By removing impediments that hinder the Scrum Team.",
        "correct": true
      }
    ]
  },
  {
    "question": "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog? (choose the best answer)",
    "options": [
      {
        "text": "When the Product Owner identifies new work.",
        "correct": false
      },
      {
        "text": "When the Scrum Master has time to enter it.",
        "correct": false
      },
      {
        "text": "As soon as possible after it is identified.",
        "correct": true
      },
      {
        "text": "During the Daily Scrum after the Developers approve it.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: A high-performance Scrum Team ensures that each Increment is complete by running a Release Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Developers select a set of Product Backlog Items for a Sprint Backlog with the intent to get the selected items done by the end of the Sprint. Which three phrases best describe the purpose of a Definition of Done? (choose the best three answers)",
    "options": [
      {
        "text": "It tracks the percentage complete of a Product Backlog Item.",
        "correct": false
      },
      {
        "text": "It defines what it takes for an Increment to be ready for release.",
        "correct": true
      },
      {
        "text": "It creates transparency over the work inspected at the Sprint Review.",
        "correct": true
      },
      {
        "text": "It guides the Developers in creating a forecast at the Sprint Planning.",
        "correct": true
      },
      {
        "text": "It provides a template for elements that need to be included in the documentation.",
        "correct": false
      },
      {
        "text": "It controls whether the Developers have performed their tasks.",
        "correct": false
      }
    ]
  },
  {
    "question": "What are three benefits of self-management? (choose the best three answers)",
    "options": [
      {
        "text": "Increased self-accountability.",
        "correct": true
      },
      {
        "text": "Increased rule compliance.",
        "correct": false
      },
      {
        "text": "Increased creativity.",
        "correct": true
      },
      {
        "text": "Increased commitment.",
        "correct": true
      },
      {
        "text": "Increased accuracy of estimates.",
        "correct": false
      }
    ]
  },
  {
    "question": "A new Developer is having continuing conflicts with existing members of the Scrum Team, which is impacting the delivery of the Increment. If necessary, who is responsible for removing the Developer from the Scrum Team? (choose the best answer)",
    "options": [
      {
        "text": "The hiring manager is responsible, they hired the Developer.",
        "correct": false
      },
      {
        "text": "The Product Owner is responsible, they control the return on investment (ROI).",
        "correct": false
      },
      {
        "text": "The Scrum Team is responsible.",
        "correct": true
      },
      {
        "text": "The Scrum Master is responsible, they remove impediments.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Product Owner is accountable for maximizing the value of the product that is the result of the work of the Scrum Team. Which of the following can be delegated to others, while the Product Owner remains accountable for the work? (choose the best two answers)",
    "options": [
      {
        "text": "Attending the Sprint Review.",
        "correct": false
      },
      {
        "text": "Ordering Product Backlog Items.",
        "correct": true
      },
      {
        "text": "Developing and communicating the Product Goal.",
        "correct": true
      },
      {
        "text": "Attending the Sprint Retrospective.",
        "correct": false
      }
    ]
  },
  {
    "question": "During a Sprint Retrospective, the Developers propose moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master to recommend? (choose the best two answers)",
    "options": [
      {
        "text": "Consider the request and decide on which days the Daily Scrum should occur.",
        "correct": false
      },
      {
        "text": "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.",
        "correct": true
      },
      {
        "text": "Acknowledge and support the self-managing team's decision.",
        "correct": false
      },
      {
        "text": "Have the Developers vote.",
        "correct": false
      },
      {
        "text": "Learn why the Developers want this and work with them to improve the outcome of the Daily Scrum.",
        "correct": true
      }
    ]
  },
  {
    "question": "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum Team may add the items to the Sprint Backlog for the next Sprint.",
        "correct": true
      },
      {
        "text": "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog.",
        "correct": false
      },
      {
        "text": "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly.",
        "correct": false
      },
      {
        "text": "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog.",
        "correct": false
      }
    ]
  },
  {
    "question": "How is management that is external to the Scrum Team involved in the Daily Scrum? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner represents their opinions.",
        "correct": false
      },
      {
        "text": "Managers are not required at the Daily Scrum.",
        "correct": true
      },
      {
        "text": "The Scrum Master speaks on their behalf.",
        "correct": false
      },
      {
        "text": "Management gives an update at the start of each Daily Scrum.",
        "correct": false
      }
    ]
  },
  {
    "question": "How much time is required after a Sprint to prepare for the next Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The break between Sprints is timeboxed to one-week for a one-month Sprint, and usually less for shorter Sprints.",
        "correct": false
      },
      {
        "text": "Enough time for the requirements for the next Sprint to be determined and documented.",
        "correct": false
      },
      {
        "text": "Enough time for the Developers to finish the testing from the last Sprint.",
        "correct": false
      },
      {
        "text": "None. A new Sprint starts immediately following the end of the previous Sprint.",
        "correct": true
      },
      {
        "text": "All of the above are allowed depending on the situation.",
        "correct": false
      }
    ]
  },
  {
    "question": "How much work is required of the Developers to complete a Product Backlog Item selected during the Sprint Planning? (choose the best answer)",
    "options": [
      {
        "text": "As much as they can fit into the Sprint, with remaining work deferred to the next Sprint.",
        "correct": false
      },
      {
        "text": "As much as is required to meet the Scrum Team's Definition of Done.",
        "correct": true
      },
      {
        "text": "All development work and at least some testing.",
        "correct": false
      },
      {
        "text": "A proportional amount of time on analysis, design, development, and testing.",
        "correct": false
      }
    ]
  },
  {
    "question": "How often should Scrum Team membership change? (choose the best answer)",
    "options": [
      {
        "text": "Every Sprint to promote shared learning.",
        "correct": false
      },
      {
        "text": "As needed, with no special allowance for changes in productivity.",
        "correct": false
      },
      {
        "text": "Never, it reduces productivity.",
        "correct": false
      },
      {
        "text": "As needed, while taking into account a short-term reduction in productivity.",
        "correct": true
      }
    ]
  },
  {
    "question": "If Product Backlog Refinement is needed, when is the ideal time for refinement to take place and who should participate? (choose the best two answers)",
    "options": [
      {
        "text": "Business analysts in the organization should do this work for the Scrum Team 1-2 Sprints ahead of the development Sprints.",
        "correct": false
      },
      {
        "text": "The Product Owner must do this as essential work in Sprint 0.",
        "correct": false
      },
      {
        "text": "The Scrum Team on an ongoing basis, defining Product Backlog Items into smaller more precise items that are ready for selection.",
        "correct": true
      },
      {
        "text": "The Scrum Team during the current Sprint, if they have been unable during preceding Sprints to define Product Backlog Items with enough precision to begin work.",
        "correct": true
      },
      {
        "text": "The Product Owner takes the time between the end of one Sprint and the start of the next Sprint to complete refinement.",
        "correct": false
      }
    ]
  },
  {
    "question": "Scrum requires that the Product Owner must use which of the following items? (choose all that apply)",
    "options": [
      {
        "text": "Burndown chart.",
        "correct": false
      },
      {
        "text": "Feature burn-up.",
        "correct": false
      },
      {
        "text": "Critical Path Analysis.",
        "correct": false
      },
      {
        "text": "Project Gantt Chart.",
        "correct": false
      },
      {
        "text": "None of the above.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: A Product Owner with multiple teams working on one product should maintain separate Product Backlogs for each team.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Scrum Team is accountable for releasing the most valuable product.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "What are three advantages of a Product Owner sharing a clearly defined Product Goal with the Scrum Team? (choose the best three answers)",
    "options": [
      {
        "text": "It helps the Scrum Team keep focus and they can weigh any decision against the Product Goal.",
        "correct": true
      },
      {
        "text": "It helps the Developers estimate the date that the Product Backlog will be complete.",
        "correct": false
      },
      {
        "text": "It is easier to inspect Incremental progress at the Sprint Review.",
        "correct": true
      },
      {
        "text": "It is not mandatory in Scrum. There is no real advantage.",
        "correct": false
      },
      {
        "text": "It provides a good overall direction so Sprints will feel less like isolated pieces of work.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which approach is best for Scrum Teams in order to produce valuable Increments? (choose the best answer)",
    "options": [
      {
        "text": "Each Developer works on the component where they feel that they can contribute.",
        "correct": false
      },
      {
        "text": "Each Scrum Team is accountable for developing functionality from beginning to end.",
        "correct": true
      },
      {
        "text": "Each Scrum Team works on an independent set of components.",
        "correct": false
      },
      {
        "text": "Each Scrum Member works only as an independent layer of the system.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who is accountable for managing the progress of work during a Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The most junior member of the team.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who is part of the discussion about which Product Backlog Items are selected for a Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Scrum Team.",
        "correct": true
      },
      {
        "text": "The Developers.",
        "correct": false
      }
    ]
  },
  {
    "question": "Why does the Product Owner want the Developers to adhere to its Definition of Done? (choose the best answer)",
    "options": [
      {
        "text": "To predict the teams productivity over time.",
        "correct": false
      },
      {
        "text": "To have complete transparency into what has been done at the end of each Sprint.",
        "correct": true
      },
      {
        "text": "To know what the team will deliver over the next three Sprints.",
        "correct": false
      },
      {
        "text": "To be able to reprimand the team when they do not meet their velocity goal for the Sprint.",
        "correct": false
      }
    ]
  },
  {
    "question": "Your management has asked you to take the lead in the development of a new product. Six teams new to Scrum will build this product. You have gathered a number of requirements and ideas into an early form of a Product Backlog. How would you minimize dependencies between the Scrum Teams? (choose the best answer)",
    "options": [
      {
        "text": "You work with the Developers on how to best analyze and break apart the work.",
        "correct": true
      },
      {
        "text": "You divide Product Backlog Items among the six Product Owners.",
        "correct": false
      },
      {
        "text": "You create an independent Product Backlog per Scrum Team.",
        "correct": false
      },
      {
        "text": "You identify the dependencies and re-order the Product Backlog for the other five Product Owners.",
        "correct": false
      },
      {
        "text": "You raise this as an impediment with the Scrum Master.",
        "correct": false
      }
    ]
  },
  {
    "question": "What does it mean to say that an event has a timebox? (choose the best answer)",
    "options": [
      {
        "text": "The event must take at least a minimum amount of time.",
        "correct": false
      },
      {
        "text": "The event must happen at a set time.",
        "correct": false
      },
      {
        "text": "The event can take no more than a maximum amount of time.",
        "correct": true
      },
      {
        "text": "The event must happen by a given time.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: A Scrum Master fulfills the same role as a traditional Project Manager.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "When is it most appropriate for a Scrum Team to change the Definition of Done? (choose the best answer)",
    "options": [
      {
        "text": "Prior to starting a new project.",
        "correct": false
      },
      {
        "text": "During the Sprint Retrospective.",
        "correct": true
      },
      {
        "text": "During Product Backlog Refinement.",
        "correct": false
      },
      {
        "text": "During Sprint Planning.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: A Product Owner should measure product value by the increase in the team's velocity.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Why do the Developers need a Sprint Goal? (choose the best answer)",
    "options": [
      {
        "text": "The Developers are more focused with a common yet specific goal.",
        "correct": true
      },
      {
        "text": "Sprint Goals are not valuable. Everything is known from the Product Backlog.",
        "correct": false
      },
      {
        "text": "A Sprint Goal only gives purpose to Sprint 0.",
        "correct": false
      },
      {
        "text": "Sprint Goal ensures that all of the Product Backlog Items selected for the Sprint are implemented.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who creates a Product Backlog Item's estimate? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Product Owner with input from the Developers.",
        "correct": false
      },
      {
        "text": "The Developers after clarifying requirements with the Product Owner.",
        "correct": true
      },
      {
        "text": "The most senior people in the organization, including architects and subject matter experts.",
        "correct": false
      },
      {
        "text": "The Developers, alone.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Every Scrum Team must have a Product Owner and a Scrum Master.",
    "options": [
      {
        "text": "False, a Scrum Master is only required when asked for by the Developers.",
        "correct": false
      },
      {
        "text": "True, outcomes are affected by their participation and availability.",
        "correct": true
      },
      {
        "text": "True, each must be 100% dedicated to their Scrum Team.",
        "correct": false
      },
      {
        "text": "False, a Product Owner can be replaced by a Business Analyst among Developer.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which topics should be discussed in the Sprint Review? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum process, and how it was used during the Sprint.",
        "correct": false
      },
      {
        "text": "Coding and engineering practices.",
        "correct": false
      },
      {
        "text": "The product Increment.",
        "correct": true
      },
      {
        "text": "All of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Scrum Master who will coordinate the work with the other teams. What should the Scrum Master do? (choose the best answer)",
    "options": [
      {
        "text": "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.",
        "correct": false
      },
      {
        "text": "Teach them that it is their responsibility to work with the other teams to create an Increment that is inclusive of all five team's work.",
        "correct": true
      },
      {
        "text": "Teach the Product Owner to work with the Lead Developer on ordering Product Backlog in a way to avoid too much overlap during a Sprint.",
        "correct": false
      },
      {
        "text": "Visit the five teams each day to inspect that their Sprint Backlogs are aligned.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Cross-functional teams are optimized to work on one component or layer of a system only.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "What are two responsibilities of Testers in a Scrum Team? (choose the best two answers)",
    "options": [
      {
        "text": "Tracking quality metrics.",
        "correct": false
      },
      {
        "text": "Scrum has no \"Tester\" role.",
        "correct": true
      },
      {
        "text": "Verifying the work of programmers.",
        "correct": false
      },
      {
        "text": "The Developers are responsible for quality.",
        "correct": true
      },
      {
        "text": "Finding bugs.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which two ways of creating Scrum Teams are consistent with Scrum's values? (choose the best two answers)",
    "options": [
      {
        "text": "Existing teams propose how they would like to go about organizing into the new structure.",
        "correct": true
      },
      {
        "text": "Bring all people together and let them organize into Scrum Teams.",
        "correct": true
      },
      {
        "text": "Managers personally re-assign current subordinates to new teams.",
        "correct": false
      },
      {
        "text": "The chief Product Owner determines the new team structure and assignments.",
        "correct": false
      },
      {
        "text": "Managers collaborate to assign individuals into specific teams.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Scrum Team is accountable for creating a valuable Increment every Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "When does the next Sprint begin? (choose the best answer)",
    "options": [
      {
        "text": "The Monday following the Sprint Review.",
        "correct": false
      },
      {
        "text": "Immediately after the conclusion of the previous Sprint.",
        "correct": true
      },
      {
        "text": "Immediately following the next Sprint Planning.",
        "correct": false
      },
      {
        "text": "When the Product Owner is ready.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: An Increment must be released to customers or users at the end of each Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "What is the accountability of the Product Owner during Sprint 0? (choose the best answer)",
    "options": [
      {
        "text": "There is no such thing as Sprint 0.",
        "correct": true
      },
      {
        "text": "Create the overall release plan to ensure that organizational goals are met.",
        "correct": false
      },
      {
        "text": "Determine the composition of the Scrum Team to meet the release plan.",
        "correct": false
      },
      {
        "text": "Gathering, eliciting and analyzing the requirements to build the Product Backlog.",
        "correct": false
      },
      {
        "text": "Make sure enough Product backlog items are refined to fill the first 3 Sprints.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: When there are multiple teams working on one product, each Scrum Team should have a separate Product Owner.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which answer best describes the topics covered in Sprint Planning? (choose the best answer)",
    "options": [
      {
        "text": "Who is the team and what team member roles will be.",
        "correct": false
      },
      {
        "text": "What to do and who will do it.",
        "correct": false
      },
      {
        "text": "What can be done, how to do it, and why to do it.",
        "correct": true
      },
      {
        "text": "What went wrong in the last Sprint and what to do differently this Sprint.",
        "correct": false
      },
      {
        "text": "How conditions have changed and how the Product Backlog should evolve.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following might the Scrum Team discuss during a Sprint Retrospective? (choose the best answer)",
    "options": [
      {
        "text": "Methods of communication.",
        "correct": false
      },
      {
        "text": "The way the Scrum Team does Sprint Planning.",
        "correct": false
      },
      {
        "text": "Skills needed to improve the Scrum Teams ability to deliver.",
        "correct": false
      },
      {
        "text": "The Definition of Done.",
        "correct": false
      },
      {
        "text": "All of the above.",
        "correct": true
      }
    ]
  },
  {
    "question": "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done? (choose the best answer)",
    "options": [
      {
        "text": "Without a new vocabulary as a reminder of the change, very little change may actually happen.",
        "correct": false
      },
      {
        "text": "The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost.",
        "correct": false
      },
      {
        "text": "Management may feel less anxious.",
        "correct": false
      },
      {
        "text": "All of the above.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which three of the following are feedback loops in Scrum? (choose the best three answers)",
    "options": [
      {
        "text": "Release Planning.",
        "correct": false
      },
      {
        "text": "Refinement Meeting.",
        "correct": false
      },
      {
        "text": "Sprint Retrospective.",
        "correct": true
      },
      {
        "text": "Sprint Review.",
        "correct": true
      },
      {
        "text": "Daily Scrum.",
        "correct": true
      }
    ]
  },
  {
    "question": "The IT manager asks the Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team ask the Scrum Master for advice. The Scrum Master should: (choose the best answer)",
    "options": [
      {
        "text": "Create and deliver the report to the manager herself.",
        "correct": false
      },
      {
        "text": "Tell the Developers to figure it out themselves.",
        "correct": false
      },
      {
        "text": "Tell the Developers to fit the report into the Sprint Backlog.",
        "correct": false
      },
      {
        "text": "Talk to the IT manager and explain that the progress in Scrum comes from inspecting an Increment at the Sprint Review.",
        "correct": true
      },
      {
        "text": "Ask the Product Owner to send the manager the report.",
        "correct": false
      }
    ]
  },
  {
    "question": "What happens if the Scrum Team cannot complete its work by the end of the Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The Sprint length is unchanged and the Scrum Team continuously learns and adapts.",
        "correct": true
      },
      {
        "text": "The Sprint is extended temporarily. Lessons are taken to ensure it does not happen again.",
        "correct": false
      },
      {
        "text": "The Sprint is extended and future Sprints use this new duration.",
        "correct": false
      }
    ]
  },
  {
    "question": "User documentation is part of your Definition of Done. However, there are not enough Technical Writers for all teams. Your Scrum Team does not have a Technical Writer. What should the Scrum Team do? (choose the best answer)",
    "options": [
      {
        "text": "Wait until you have a Technical Writer on your Scrum Team to take care of this.",
        "correct": false
      },
      {
        "text": "Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available Technical Writers.",
        "correct": false
      },
      {
        "text": "The Developers on the Scrum Team should write the user documentation.",
        "correct": true
      },
      {
        "text": "Form a separate team of Technical Writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out.",
        "correct": false
      }
    ]
  },
  {
    "question": "The Scrum Master observes the Product Owner is struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take? (choose the best answer)",
    "options": [
      {
        "text": "Present the Product Owner with an ordered Product Backlog to use.",
        "correct": false
      },
      {
        "text": "Suggest that the Developers order the Product Backlog to be sure that it is a feasible ordering of work.",
        "correct": false
      },
      {
        "text": "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.",
        "correct": true
      },
      {
        "text": "Encourage the Product Owner to work with the Developers to see which items technically are fastest to implement.",
        "correct": false
      },
      {
        "text": "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog.",
        "correct": false
      }
    ]
  },
  {
    "question": "When must the Product Owner be present at the Daily Scrum? (choose the best answer)",
    "options": [
      {
        "text": "When they need to represent the stakeholders' point of view.",
        "correct": false
      },
      {
        "text": "When the Scrum Master asks them to attend.",
        "correct": false
      },
      {
        "text": "When there are impediments to discuss.",
        "correct": false
      },
      {
        "text": "When the Product Owner is actively working on items from the Sprint Backlog.",
        "correct": true
      }
    ]
  },
  {
    "question": "How much of the Sprint Backlog must be defined during the Sprint Planning event? (choose the best answer)",
    "options": [
      {
        "text": "Just enough to understand design and architectural implications.",
        "correct": false
      },
      {
        "text": "Just enough tasks for the Scrum Master to be confident in the Developers' understanding of the Sprint.",
        "correct": false
      },
      {
        "text": "The entire Sprint Backlog must be identified and estimated by the end of Sprint Planning.",
        "correct": false
      },
      {
        "text": "Enough so the Developers can create their forecast of what work they can do.",
        "correct": true
      }
    ]
  },
  {
    "question": "You are the Scrum Master of a new, to be developed Product. Development is going to require 45 people. What is a good first question for you to suggest the group thinks about when forming into teams? (choose the best answer)",
    "options": [
      {
        "text": "What is the right mixture of senior and junior people on each team?",
        "correct": false
      },
      {
        "text": "How will we make sure all teams have the right amount of expertise?",
        "correct": true
      },
      {
        "text": "Who are the subject matter experts on each team?",
        "correct": false
      },
      {
        "text": "Who are going to be the team leads?",
        "correct": false
      }
    ]
  },
  {
    "question": "What activities would a Product Owner typically undertake in the period between the end of the current Sprint and the start of the next Sprint? (choose the best answer)",
    "options": [
      {
        "text": "There are no such activities, the next Sprint starts immediately after the current Sprint.",
        "correct": true
      },
      {
        "text": "Update the project plan with stakeholders.",
        "correct": false
      },
      {
        "text": "Work with the Quality Assurance departments on the Increment of the current Sprint.",
        "correct": false
      },
      {
        "text": "Refine the Product Backlog.",
        "correct": false
      }
    ]
  },
  {
    "question": "Several Sprints into a project, the Product Owner tells the Scrum Master that a key stakeholder just started using the product. The stakeholder is unhappy with the quality of the product. What are two good options for the Scrum Master? (choose the best two answers)",
    "options": [
      {
        "text": "Explain to the Product Owner that it is up to the Developers to decide on acceptable quality standards.",
        "correct": false
      },
      {
        "text": "Encourage the Product Owner to put quality specifications on the Product Backlog and express the stakeholder's concern to the Developers.",
        "correct": true
      },
      {
        "text": "Coach the Product Owner on how to talk with the Developers about this concern.",
        "correct": true
      },
      {
        "text": "Bring the concern to the Testers to improve how the Product is verified.",
        "correct": false
      },
      {
        "text": "Wait to bring this up until the Sprint Retrospective.",
        "correct": false
      }
    ]
  },
  {
    "question": "As the Developers start work during the Sprint, they realize they have selected too much work to finish the Sprint. What should they do? (choose the best answer)",
    "options": [
      {
        "text": "Inform the Product Owner at the Sprint review, but prior to the demonstration.",
        "correct": false
      },
      {
        "text": "Find another Scrum Team to give the excess work to.",
        "correct": false
      },
      {
        "text": "Reduce the Definition of Done and get all of the Product Backlog Items done by the new definition.",
        "correct": false
      },
      {
        "text": "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog Items.",
        "correct": true
      }
    ]
  },
  {
    "question": "Who does the work to make sure Product Backlog Items conform to the Definition of Done? (choose the best answer)",
    "options": [
      {
        "text": "The Quality Assurance Team.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The Scrum Team.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which two things are appropriate for a Scrum Master to do if the Scrum Team does not have the tools and environment to completely finish each selected Product Backlog Item? (choose the best two answers)",
    "options": [
      {
        "text": "Encourage the Product Owner to accept partially done Increments until the situation improves.",
        "correct": false
      },
      {
        "text": "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances.",
        "correct": true
      },
      {
        "text": "Declare the Scrum Team not ready for Scrum.",
        "correct": false
      },
      {
        "text": "Refocus the current Sprint on establishing the Scrum Team's environment instead of delivering an Increment.",
        "correct": false
      },
      {
        "text": "Coach the Scrum Team to improve its skills: tools and environment over time and adjust the Definition of Done accordingly.",
        "correct": true
      }
    ]
  },
  {
    "question": "For the purpose of transparency, when does Scrum say a valuable and useful Increment must be available? (choose the best answer)",
    "options": [
      {
        "text": "Every 3 Sprints.",
        "correct": false
      },
      {
        "text": "When the Product Owner asks to create one.",
        "correct": false
      },
      {
        "text": "After the Acceptance Testing phase.",
        "correct": false
      },
      {
        "text": "At the end of every Sprint.",
        "correct": true
      },
      {
        "text": "Before the Release Sprint.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who is accountable for clearly expressing Product Backlog Items? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner.",
        "correct": true
      },
      {
        "text": "The Business Analyst who represents the Product Owner.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Scrum Master, or the Scrum Master may have the Developers do it.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which statement best describes the Sprint Review? (choose the best answer)",
    "options": [
      {
        "text": "It is a mechanism to control the Developers activities during a Sprint.",
        "correct": false
      },
      {
        "text": "It is used to congratulate the Developers if they complete their forecast or to punish the Developers if they fail to meet their forecast.",
        "correct": false
      },
      {
        "text": "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next.",
        "correct": true
      },
      {
        "text": "It is a demo at the end of the Sprint for everyone in the organization to check on the work done",
        "correct": false
      }
    ]
  },
  {
    "question": "Which three of the following are true about Scrum? (choose the best three answers)",
    "options": [
      {
        "text": "Scrum is a framework for developing and sustaining complex products.",
        "correct": true
      },
      {
        "text": "Scrum is a methodology where you can pick and choose which parts of Scrum you think will work for your environment.",
        "correct": false
      },
      {
        "text": "Scrum implements self-management by replacing Project Managers with Scrum Masters.",
        "correct": false
      },
      {
        "text": "Each component of Scrum serves a specific purpose and is essential to Scrum's success and your usage of Scrum to develop complex products.",
        "correct": true
      },
      {
        "text": "Scrum is based on empiricism and lean thinking.",
        "correct": true
      }
    ]
  },
  {
    "question": "As the Sprint Planning progresses, the Developers realize that the workload may be greater than their capacity to complete the work. Which two are valid actions? (choose the best two answers)",
    "options": [
      {
        "text": "Recruit additional Developers before the work can begin.",
        "correct": false
      },
      {
        "text": "The Developers ensure that the Scrum Team is aware, start the Sprint, and monitor progress.",
        "correct": true
      },
      {
        "text": "The Developers work overtime during this Sprint.",
        "correct": false
      },
      {
        "text": "Cancel the Sprint.",
        "correct": false
      },
      {
        "text": "Remove or change selected Product Backlog Items.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Product Owner makes sure the Developers select enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Daily Scrum is an event that happens every day. What would be three key concerns if the frequency were to be lowered to every two or three days? (choose the best three answers)",
    "options": [
      {
        "text": "The Scrum Master loses the ability to update the Gantt Chart properly.",
        "correct": false
      },
      {
        "text": "Too much work is spent updating the Scrum board before the meeting.",
        "correct": false
      },
      {
        "text": "Opportunities to inspect and adapt the Sprint Backlog are lost.",
        "correct": true
      },
      {
        "text": "The Product Owner cannot accurately report progress to the stakeholders.",
        "correct": false
      },
      {
        "text": "Impediments are raised and resolved more slowly.",
        "correct": true
      },
      {
        "text": "The Sprint Backlog may become inaccurate.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, Developers to implement those ideas, and a Scrum Master to help guide the process.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "How should a Scrum Team deal with non-functional requirements? (choose the best answer)",
    "options": [
      {
        "text": "Make sure the release department understands these requirements, but it's not the Scrum Team's responsibility.",
        "correct": false
      },
      {
        "text": "Manage them during the Integration Sprint prior to the Release Sprint.",
        "correct": false
      },
      {
        "text": "Assign them to the Lead Developers on the team.",
        "correct": false
      },
      {
        "text": "Ensure every Increment meets them.",
        "correct": true
      }
    ]
  },
  {
    "question": "At the end of a Sprint, a Product Backlog Item worked on during the Sprint does not meet the Definition of Done. What two things should happen with the undone Product Backlog Item? (choose the best two answers)",
    "options": [
      {
        "text": "Do not include the item in the Increment this Sprint.",
        "correct": true
      },
      {
        "text": "Put it on the Product Backlog for the Product Owner to decide what to do with it.",
        "correct": true
      },
      {
        "text": "If the stakeholders agree, the Product Owner can accept it and release it to the users.",
        "correct": false
      },
      {
        "text": "Review the item, add the done part of the estimate to the velocity and create a Story for the remaining work.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who should make sure everyone on the Scrum Team does their tasks for the Sprint? (choose the best answer)",
    "options": [
      {
        "text": "The Project Manager.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Scrum Team.",
        "correct": true
      },
      {
        "text": "All of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "To create focus which of the following are most important to have ready when Sprint Planning begins? (choose the best two answers)",
    "options": [
      {
        "text": "A fully refined Product Backlog.",
        "correct": false
      },
      {
        "text": "A clear cadence of when the Daily Scrum will take place.",
        "correct": false
      },
      {
        "text": "A Product Backlog with the most important items ready for discussion.",
        "correct": true
      },
      {
        "text": "Formal budget approval to conduct another Sprint.",
        "correct": false
      },
      {
        "text": "A Product Goal communicated by the Product Owner.",
        "correct": true
      },
      {
        "text": "A clear and non-negotiable Sprint Goal.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: A Product Owner is essentially the same thing as a traditional Project Manager?",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two statements explain why the Definition of Done is important to the Product Owner?",
    "options": [
      {
        "text": "It identifies undone work that can be addressed in a separate Sprint.",
        "correct": false
      },
      {
        "text": "It establishes the expected quality of the Increment reviewed at the Sprint Review.",
        "correct": true
      },
      {
        "text": "It creates transparency regarding progress within the Scrum Team.",
        "correct": true
      },
      {
        "text": "It helps the Product Owner track the open work during a Sprint.",
        "correct": false
      }
    ]
  },
  {
    "question": "When does a Developer become accountable for the value of a Product Backlog Item selected for the Sprint? (choose the best answer)",
    "options": [
      {
        "text": "Whenever a team member can accomodate more work.",
        "correct": false
      },
      {
        "text": "At the Sprint Planning Event.",
        "correct": false
      },
      {
        "text": "Never. The entire Scrum Team is accountable for creating value every Sprint.",
        "correct": true
      },
      {
        "text": "During the Daily Scrum.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: A first Sprint can start before the Product Owner has a complete and exhaustive Product Backlog in place.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the Product Owner accountable for in Scrum?",
    "options": [
      {
        "text": "Refining the top level Product Backlog Items until they are ready to be handed over to the Scrum Team.",
        "correct": false
      },
      {
        "text": "Describing an Increment at Sprint Planning and making sure that the Developers deliver it by the end of the Sprint.",
        "correct": false
      },
      {
        "text": "Writing the User Stories so they are comprehensive enough for the stakeholders.",
        "correct": false
      },
      {
        "text": "Maximizing the value of the product resulting from the work of the Scrum Team.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Product Owner's authority to change and update the Product Backlog is unlimited, except for:",
    "options": [
      {
        "text": "High impact changes that have not been approved by the change request board.",
        "correct": false
      },
      {
        "text": "Decisions by the chief program manager.",
        "correct": false
      },
      {
        "text": "Decisions by the CFO, the CEO or the board of directors.",
        "correct": false
      },
      {
        "text": "Technical and architectural work that needs to be done first, as indicated by the chief enterprise architect.",
        "correct": false
      },
      {
        "text": "Items the Scrum Master has identified as impediments.",
        "correct": false
      },
      {
        "text": "There are no exceptions, the entire organization must respect a Product Owner's decisions.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Developers find out during the Sprint that they are not likely to build everything they forecast. What would you expect a Product Owner to do?",
    "options": [
      {
        "text": "Cancel the Sprint.",
        "correct": false
      },
      {
        "text": "Skip Product Backlog Refinement activities.",
        "correct": false
      },
      {
        "text": "Change the Sprint Goal.",
        "correct": false
      },
      {
        "text": "Re-negotiate the selected Product Backlog Items with the Developers.",
        "correct": true
      },
      {
        "text": "Inform management that more resources are needed.",
        "correct": false
      }
    ]
  },
  {
    "question": "What should Developers do if the Product Owner is unavailable?",
    "options": [
      {
        "text": "Wait until the Product Owner is available again.",
        "correct": false
      },
      {
        "text": "Management should assign a substitue Product Owner to fill in where the Product Owner cannot be there.",
        "correct": false
      },
      {
        "text": "Ask the Product Owner's manager to decide in the Product Owner's absence.",
        "correct": false
      },
      {
        "text": "Within the Sprint, the Developers make the best decisions posssible to assure progress towards the Sprint Goal, re-aligning with the Product Owner once they are available again.",
        "correct": true
      }
    ]
  },
  {
    "question": "What phrases best describe the relationship of the Product Owner and the Developers?",
    "options": [
      {
        "text": "They should work apart as much as posssible in order to keep the concerns of business and technology separated.",
        "correct": false
      },
      {
        "text": "They collaborate often so the Developers build Increments keeping end-user and stakeholder concerns in mind.",
        "correct": true
      },
      {
        "text": "They collaborate often so the Product Owner can make informed decisions in balancing effort and value of Product Backlog Items.",
        "correct": true
      },
      {
        "text": "They should share no more than the Sprint Planning and the Sprint Review meeting.",
        "correct": false
      },
      {
        "text": "The Product Owner should be with the Developers full-time to grow a deep understanding of the technology being used.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the principal value of releasing an Increment?",
    "options": [
      {
        "text": "To learn about the Scrum Team's productivity.",
        "correct": false
      },
      {
        "text": "To validate assumptions made when developing the product.",
        "correct": true
      },
      {
        "text": "To learn about the forecast of functionality that was developed.",
        "correct": false
      }
    ]
  },
  {
    "question": "What best describes the relationship of the Product Owner and the stakeholders?",
    "options": [
      {
        "text": "The Product Owner provides the stakeholders with acceptance forms at the Sprint Review to record their formal agreement over the delivered software.",
        "correct": false
      },
      {
        "text": "The Product Owner actively asks for stakeholder input and expectations to incorporate into the Product Backlog.",
        "correct": true
      },
      {
        "text": "The Product Owner has the final call over the requirements and should involve the stakeholders as little as possible.",
        "correct": false
      },
      {
        "text": "The Product Owner rates the User Stories as provided by the stakeholders.",
        "correct": false
      }
    ]
  },
  {
    "question": "What are typical activities for a Product Owner in a Sprint?",
    "options": [
      {
        "text": "Update the work plan for the Developers on a daily basis.",
        "correct": false
      },
      {
        "text": "Create financial reporting upon the spent hours reported by the Scrum Team.",
        "correct": false
      },
      {
        "text": "Work with the Developers on Product Backlog Refinement.",
        "correct": true
      },
      {
        "text": "Attend every Daily Scrum to answer functional questions on the discussed Sprint Backlog items.",
        "correct": false
      },
      {
        "text": "Collaborate with stakeholders, user communities, and subject matter experts.",
        "correct": true
      }
    ]
  },
  {
    "question": "Is the Product Owner required to be present at the Sprint Retrospective?",
    "options": [
      {
        "text": "They are not allowed. The Sprint Retrosspective is an opportunity for the Developerss to improve.",
        "correct": false
      },
      {
        "text": "They are optional. Attendance is only required when the Product Owner gets invited by the Scrum Master.",
        "correct": false
      },
      {
        "text": "Their attendance is mandatory. The Sprint Retrospective is an opportunity for the Scrum Team to assess and improve itself.",
        "correct": true
      }
    ]
  },
  {
    "question": "Adaptation requires regular inspection. In what ways does the Product Owner contribute to the results achieved by inspection?",
    "options": [
      {
        "text": "The Product Owner invites stakeholders to the Sprint Review to learn how the current state of the marketplace influences what is the most valuable thing to do next.",
        "correct": true
      },
      {
        "text": "The Product Owner verifies the Sprint Backlog for completeness at the end of Sprint Planning in order to allow the Sprint to start.",
        "correct": false
      },
      {
        "text": "The Product Owner inspects the Sprint burn-down at the Daily Scrum for progress towards a complete Increment and re-planning the team's work.",
        "correct": false
      },
      {
        "text": "The Product Owner shares the current state of Product Backlog at the Sprint Review, which, combined with the inspection of the Increment, leads to an updated Product Backlog.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which description best fits the role of the Product Owner?",
    "options": [
      {
        "text": "Chief Business Analyst.",
        "correct": false
      },
      {
        "text": "Requirements Collector.",
        "correct": false
      },
      {
        "text": "Project Manager 2.0.",
        "correct": false
      },
      {
        "text": "Scope Protector.",
        "correct": false
      },
      {
        "text": "Value Maximizer.",
        "correct": true
      }
    ]
  },
  {
    "question": "Who creates the Definition of Done?",
    "options": [
      {
        "text": "The Scrum Master as they are responsible for the Scrum Team's productivity.",
        "correct": false
      },
      {
        "text": "The organization (or the Scrum Team if none is available from the organization).",
        "correct": true
      },
      {
        "text": "The Product Owner as they are responsible for the product's success.",
        "correct": false
      },
      {
        "text": "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definitions.",
        "correct": false
      }
    ]
  },
  {
    "question": "In order to make investment decisions, the Product Owner is likely to look at the Total Cost of Ownership (TCO) of the product being built. What costs will a Product Owner take into account?",
    "options": [
      {
        "text": "The accumulated cost over the earned value of the product.",
        "correct": false
      },
      {
        "text": "The money spent on development and delivery of the product.",
        "correct": false
      },
      {
        "text": "All investments required to conceive, develop, operate and maintain the product.",
        "correct": true
      }
    ]
  },
  {
    "question": "A Product Owner is entitled to postpone the start of a new Sprint after the conclusion of a previous Sprint for the following reason:",
    "options": [
      {
        "text": "The Quality Assurance department needs more time to make the previous Increment complete.",
        "correct": false
      },
      {
        "text": "The stakeholders are not happy with the value produced in the previous Sprint.",
        "correct": false
      },
      {
        "text": "There is no acceptable reason. A new Sprint starts immediately after the conclusion of the previous Sprint.",
        "correct": true
      },
      {
        "text": "The Product Owner has not identified a Sprint Goal.",
        "correct": false
      },
      {
        "text": "Not enough Product Backlog Items are ready.",
        "correct": false
      }
    ]
  },
  {
    "question": "What two things best help the Product Owner manage the value of a product?",
    "options": [
      {
        "text": "Devising a formula for a neutral calculation of value.",
        "correct": false
      },
      {
        "text": "Setting value on individual Product Backlog Items using Value Poker.",
        "correct": false
      },
      {
        "text": "The order of the Product Backlog.",
        "correct": true
      },
      {
        "text": "Validating assumptions of value through frequent releases.",
        "correct": true
      }
    ]
  },
  {
    "question": "What is a Product Backlog?",
    "options": [
      {
        "text": "It is a detailed lists of functionalities from which the Developers draw items, to be complemented by a separate Technology Backlog managed by the Developers.",
        "correct": false
      },
      {
        "text": "The Product Backlog is an emergent, ordered list of what is needed to improve the product.",
        "correct": true
      },
      {
        "text": "It is a list of references to Use Case documents that are stored in a central repository. The references should be visible and clickable by anybody to enhance transparency.",
        "correct": false
      },
      {
        "text": "It is a formally approved list of requirements to be implemented over a set period.",
        "correct": false
      }
    ]
  },
  {
    "question": "To what extent does technical debt limit the value a Product Owner can get from a product?",
    "options": [
      {
        "text": "Technical debt does not influence the delivery of value.",
        "correct": false
      },
      {
        "text": "The velocity at which new functionality can be created is reduced when you have technical debt.",
        "correct": true
      },
      {
        "text": "Technical debt causes a greater percentage of the product's budget to be spent on maintenance of the product.",
        "correct": true
      },
      {
        "text": "Technical debt is not a Product Owner concern, technical debt is only an issue for the Developers.",
        "correct": false
      }
    ]
  },
  {
    "question": "How does an organization know that a product built using Scrum is successful?",
    "options": [
      {
        "text": "By the Product Owner and stakeholders accepting the Increment at the Sprint Review.",
        "correct": false
      },
      {
        "text": "By releasing frequently, and measuring the value customers/users experience.",
        "correct": true
      },
      {
        "text": "By measuring the actual time spent on development versus the time estimated for development.",
        "correct": false
      },
      {
        "text": "By measuring the velocity has increased since the last release.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the main reason for the Product Owner to be part of the Daily Scrum?",
    "options": [
      {
        "text": "It is not required for the Product Owner to participate.",
        "correct": true
      },
      {
        "text": "To assign the Developers the daily tasks.",
        "correct": false
      },
      {
        "text": "To track the progress of the Project.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Definition of Done increases the transparency and is used by the Developers to forecast how many items can be picked from the Product Backlog.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Product Owner is the Scrum accountability that is responsible for engaging the product stakeholders.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following topics can be part of the Sprint Retrospective?",
    "options": [
      {
        "text": "Plan the next Sprint.",
        "correct": false
      },
      {
        "text": "Discuss the way the Team has communicated in the last Sprint.",
        "correct": true
      },
      {
        "text": "Discuss the way the Developers have collaborated with the Product Owner.",
        "correct": true
      },
      {
        "text": "Refine Product Backlog Items.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which two statements are correct when four teams are working on one single product?",
    "options": [
      {
        "text": "There can be only one Product Owner.",
        "correct": true
      },
      {
        "text": "There can be only one Product Backlog.",
        "correct": true
      },
      {
        "text": "There can be 4 Product Owners.",
        "correct": false
      },
      {
        "text": "There can be 4 Product Backlogs.",
        "correct": false
      }
    ]
  },
  {
    "question": "Who is the owner of the Product Backlog?",
    "options": [
      {
        "text": "The Project Manager.",
        "correct": false
      },
      {
        "text": "The whole Scrum Team.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following are required by Scrum?",
    "options": [
      {
        "text": "Hardening Sprints.",
        "correct": false
      },
      {
        "text": "Story Points.",
        "correct": false
      },
      {
        "text": "Time boxed events.",
        "correct": true
      },
      {
        "text": "Sprint Planning meetings.",
        "correct": true
      },
      {
        "text": "A Sprint 0.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Definition of Ready is defined by the Product Owner.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Sprint Review is considered as a \"formal meeting\".",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Please select the answer representing a responsibility of a Product Owner.",
    "options": [
      {
        "text": "Ordering the items in the Product Backlog to best achieve goals and missions.",
        "correct": true
      },
      {
        "text": "Defining the Definition of Done.",
        "correct": false
      },
      {
        "text": "Defining the Definition of Ready.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following should not be changed during a Sprint?",
    "options": [
      {
        "text": "Product Backlog.",
        "correct": false
      },
      {
        "text": "Definition of Done.",
        "correct": true
      },
      {
        "text": "The Sprint Backlog.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following is a Scrum Value?",
    "options": [
      {
        "text": "Creativity.",
        "correct": false
      },
      {
        "text": "Inspection.",
        "correct": false
      },
      {
        "text": "Adaption.",
        "correct": false
      },
      {
        "text": "Focus.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statement is not correct about the Scrum Daily?",
    "options": [
      {
        "text": "It is moderated by the Product Owner.",
        "correct": true
      },
      {
        "text": "The Developers have to participate in the meeting.",
        "correct": false
      },
      {
        "text": "It is a time boxed event (15 min).",
        "correct": false
      },
      {
        "text": "It should be held at the same time and place.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which questions does the Sprint Planning answer?",
    "options": [
      {
        "text": "What can be delivered in the Increment resulting from the upcoming Sprint?",
        "correct": true
      },
      {
        "text": "Who will do which Sprint Backlog item?",
        "correct": false
      },
      {
        "text": "How will the work needed to deliver the Increment be achieved?",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: More Velocity means more Value!",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two of the following are not correct about non-functional requirements?",
    "options": [
      {
        "text": "The Project Manager takes care of non-functional requirements.",
        "correct": true
      },
      {
        "text": "Non-functional requirements can be added to the Product Backlog.",
        "correct": false
      },
      {
        "text": "Non-functional requirements are reflected in the Sprint Goal.",
        "correct": true
      },
      {
        "text": "Non-functional requirements can be added to the Definition of Done.",
        "correct": false
      }
    ]
  },
  {
    "question": "What should the Product Owner do when the Developers are ready to start the first Sprint, but the Product Backlog is not ready yet?",
    "options": [
      {
        "text": "The Product Owner should ask the Scrum Master to remove this impediment.",
        "correct": false
      },
      {
        "text": "The Product Owner should let the team start the Sprint and continue refining the Product Backlog.",
        "correct": true
      },
      {
        "text": "The Product Owner should not allow the team to Start the Sprint.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Definition of Done shouldn't be changed in the middle of the Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the perfect number of hours a Developer should work in a week?",
    "options": [
      {
        "text": "As long as it is needed.",
        "correct": false
      },
      {
        "text": "A maximum of 40 hours per week.",
        "correct": false
      },
      {
        "text": "It is required to work at a constant pace.",
        "correct": true
      },
      {
        "text": "Between 40 and 60 hours per week.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following answers can be reasons for the Scrum Master to attend the Daily Scrum?",
    "options": [
      {
        "text": "To be able to track the Sprint progress.",
        "correct": false
      },
      {
        "text": "It is not necessary for the Scrum Master to attend the meeting.",
        "correct": true
      },
      {
        "text": "To support the Product Owner.",
        "correct": false
      },
      {
        "text": "The Developers have asked the Scrum Master to facilitate the Daily Scrum.",
        "correct": true
      }
    ]
  },
  {
    "question": "What is the main role of a QA in Scrum?",
    "options": [
      {
        "text": "Support to have less technical debt.",
        "correct": false
      },
      {
        "text": "Support the Testers in the process.",
        "correct": false
      },
      {
        "text": "There are no QA's in Scrum.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Sprint Backlog content is emerging during the Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "How many Developers are in a Scrum Team?",
    "options": [
      {
        "text": "3 to 10.",
        "correct": false
      },
      {
        "text": "1 to 9.",
        "correct": false
      },
      {
        "text": "3 to 9.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: When n Scrum teams are working on a product, there should always be only 1 Product Owner but 1-n Scrum Masters.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the main accountability of a Project Manager in Scrum?",
    "options": [
      {
        "text": "Supporting the Product Owner.",
        "correct": false
      },
      {
        "text": "Tracking the progress of a Release.",
        "correct": false
      },
      {
        "text": "There are no Project Managers in Scrum.",
        "correct": true
      },
      {
        "text": "Managing Risks.",
        "correct": false
      }
    ]
  },
  {
    "question": "What does a burn-down chart measure in a project?",
    "options": [
      {
        "text": "Work remaining across time.",
        "correct": true
      },
      {
        "text": "Business value delivered by the team.",
        "correct": false
      },
      {
        "text": "Budget remaining across time.",
        "correct": false
      }
    ]
  },
  {
    "question": "What may happen if the Scrum Teams composition changes during the project?",
    "options": [
      {
        "text": "The productivity will increase due to new ideas.",
        "correct": false
      },
      {
        "text": "The roles are clearly defined \u2013 nothing will happen.",
        "correct": false
      },
      {
        "text": "Often a short-term reduction in productivity can be seen.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statement explain when a Product Backlog Item is considered \"Done\"?",
    "options": [
      {
        "text": "When the Product Owner declares it to be \"Done\".",
        "correct": false
      },
      {
        "text": "When the Developers agrees that it is \"Done\".",
        "correct": false
      },
      {
        "text": "When it is potentially releasable.",
        "correct": true
      }
    ]
  },
  {
    "question": "How should the Developers react, when they realize that they have overcommitted themselves in a Sprint?",
    "options": [
      {
        "text": "They should collaborate with the Product Owner and decide together how to adjust the Sprint Backlog.",
        "correct": true
      },
      {
        "text": "They should ask the Scrum Master to cancel the Sprint.",
        "correct": false
      },
      {
        "text": "They should keep this information to themselves until the next Sprint Review.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which statements about the Product Backlog are correct?",
    "options": [
      {
        "text": "The Product Backlog contains only items that are completely refined.",
        "correct": false
      },
      {
        "text": "In the Product Backlog, Items at the top are usually smaller than on the bottom.",
        "correct": true
      },
      {
        "text": "The Product Backlog is never baselined.",
        "correct": true
      },
      {
        "text": "The Product Owner is accountable for the Product Backlog.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following statements are correct about \"technical debt\"?",
    "options": [
      {
        "text": "If you have a high level of \"technical debt\", it could lead to false assumptions about the current state of the system.",
        "correct": true
      },
      {
        "text": "If you have \"technical debt\", no further features should be developed until the \"technical debt\" is fixed.",
        "correct": false
      },
      {
        "text": "It creates uncertainty, because when you add more and more features more and more problems will occur.",
        "correct": true
      },
      {
        "text": "It is the task of the Product Owner to take it into account during the release planning.",
        "correct": false
      }
    ]
  },
  {
    "question": "The Developers have some trouble to understand a Sprint Backlog item \u2013 what should they do?",
    "options": [
      {
        "text": "Ask the Scrum Master to explain it to them.",
        "correct": false
      },
      {
        "text": "Don't touch the item until the Sprint Review to discuss it with the Product Owner again.",
        "correct": false
      },
      {
        "text": "Collaborate with the Product Owner immediately to receive a better understanding.",
        "correct": true
      }
    ]
  },
  {
    "question": "What kind of testing should be done during the Sprint?",
    "options": [
      {
        "text": "Test Driven Development.",
        "correct": false
      },
      {
        "text": "Acceptance Tests.",
        "correct": false
      },
      {
        "text": "Unit Tests.",
        "correct": false
      },
      {
        "text": "All kind of test required to create a working Increment.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two statements about the Developers are correct?",
    "options": [
      {
        "text": "The Developers are self-managing.",
        "correct": true
      },
      {
        "text": "The Developers are not allowed to help the Product Owner managing the Product Backlog.",
        "correct": false
      },
      {
        "text": "The Developers decide when to do the next release.",
        "correct": false
      },
      {
        "text": "The Developers own the Definition of Done.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which Scrum accountability is responsible to do all the work required to turn Product Backlog in potentially releasable items?",
    "options": [
      {
        "text": "The Business Analyst.",
        "correct": false
      },
      {
        "text": "The Project Manager.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The Stakeholders.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Product Owner has to maximize the value \u2013 more features always bring more value. Therefore, the Product Owner has to maximize the number of features in a Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Yes or No: The Product Owner can ask a developer to order the Product Backlog Items instead of him/her \u2013 is that okay?",
    "options": [
      {
        "text": "Yes.",
        "correct": true
      },
      {
        "text": "No.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which accountability in Scrum is responsible for explaining the items of the Product Backlog?",
    "options": [
      {
        "text": "The Developer.",
        "correct": false
      },
      {
        "text": "The Requirements Engineer.",
        "correct": false
      },
      {
        "text": "The Project Manager.",
        "correct": false
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Product Owner.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two of the following services are expected from a Scrum Master to a Product Owner?",
    "options": [
      {
        "text": "The Scrum Master should help the Product Owner to find techniques for managing the Product Backlog.",
        "correct": true
      },
      {
        "text": "The Scrum Master should help the Product Owner to do the documentation.",
        "correct": false
      },
      {
        "text": "The Scrum Master should remove impediments for the Scrum Team (incl. Product Owner).",
        "correct": true
      },
      {
        "text": "The Scrum Master should act as a \"middleman\" between the Product Owner and the Developers.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Only the Developers are influencing the Definition of Done, no one else.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following are benefits of self-managing teams?",
    "options": [
      {
        "text": "Increase of predictability.",
        "correct": false
      },
      {
        "text": "Increase of respect.",
        "correct": false
      },
      {
        "text": "Increase of individual buy-in.",
        "correct": true
      },
      {
        "text": "Increase of creativity.",
        "correct": true
      }
    ]
  },
  {
    "question": "When can a Sprint be cancelled?",
    "options": [
      {
        "text": "When the Sprint Goal becomes obsolete.",
        "correct": true
      },
      {
        "text": "When the Developers are asking the Product Owner to do it.",
        "correct": false
      },
      {
        "text": "When the Business Analyst is asking the Product Owner to do it.",
        "correct": false
      },
      {
        "text": "When the Sprint Goal becomes obsolete and no items are \"Done\" yet.",
        "correct": false
      }
    ]
  },
  {
    "question": "If the Product Owner has concerns about the Definition of Done (DoD) \u2013 what should the Product Owner do?",
    "options": [
      {
        "text": "The Product Owner should discuss the Definition of Done with the Developers.",
        "correct": true
      },
      {
        "text": "The Product Owner should change the Definition of Done.",
        "correct": false
      },
      {
        "text": "The Product Owner should ask the Scrum Master to change the Definition of Done.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following are not required by Scrum?",
    "options": [
      {
        "text": "Using User Stories.",
        "correct": true
      },
      {
        "text": "Have a Product Owner.",
        "correct": false
      },
      {
        "text": "Answering the \"three questions\" in the Daily Scrums.",
        "correct": true
      },
      {
        "text": "Having time boxed Scrum Events.",
        "correct": false
      },
      {
        "text": "Have a Sprint Backlog.",
        "correct": false
      },
      {
        "text": "Using the concept of Story Points.",
        "correct": true
      }
    ]
  },
  {
    "question": "What does it mean for a team to be a \"cross-functional\" Team?",
    "options": [
      {
        "text": "The team should be able to collaborate with different departments.",
        "correct": false
      },
      {
        "text": "Each of the team members should be a developer, Tester and architect.",
        "correct": false
      },
      {
        "text": "The team has all the expertise (not each person) required to transform a Product Backlog Item in a potentially releasable Increment.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two of the following answers are not correct about the Product Owner accountability?",
    "options": [
      {
        "text": "The Product Owner decides which developer does what.",
        "correct": true
      },
      {
        "text": "The Product Owner has to participate in the Daily Scrum.",
        "correct": true
      },
      {
        "text": "The Product Owner measures the progress of a release.",
        "correct": false
      },
      {
        "text": "The Product Owner is responsible for maximizing the value.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Scrum can only be used to develop products, not to maintain/sustain existing ones.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "What can be done to reduce technical debt?",
    "options": [
      {
        "text": "Improve the Definition of Done.",
        "correct": true
      },
      {
        "text": "Include external QA.",
        "correct": false
      },
      {
        "text": "Have hardening Sprints.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Scrum Master can decide which Scrum Events are required in the Scrum project.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following is not a feedback loop in Scrum?",
    "options": [
      {
        "text": "The Sprint Review.",
        "correct": false
      },
      {
        "text": "The Sprint Planning.",
        "correct": false
      },
      {
        "text": "The Product Backlog Grooming.",
        "correct": true
      },
      {
        "text": "The Daily Scrum.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: When n Scrum teams are working on a product, there are n Sprint Backlogs but only 1 Product Backlog.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Sprint Review is not a formal meeting.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "When is it allowed for a Scrum Master to cancel a Sprint?",
    "options": [
      {
        "text": "When the Sprint Goal is obsolete.",
        "correct": false
      },
      {
        "text": "When the Developers ask the Scrum Master to do so.",
        "correct": false
      },
      {
        "text": "The Scrum Master does not have the authority to do this.",
        "correct": true
      }
    ]
  },
  {
    "question": "What happens usually between a Sprint Retrospective and the next Sprint Planning?",
    "options": [
      {
        "text": "User Story \"grooming\".",
        "correct": false
      },
      {
        "text": "Nothing!",
        "correct": true
      },
      {
        "text": "Product Backlog Refinement.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: When 3 products are developed using Scrum, there can be only a single Product Owner for all products.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following is correct about the Product Vision?",
    "options": [
      {
        "text": "It is an old concept and overall not recommended.",
        "correct": false
      },
      {
        "text": "It helps the Product Owner to decide when the product is releasable.",
        "correct": false
      },
      {
        "text": "It gives an overall direction to all Sprints, makes it easier to prioritize Product Backlog Items and helps the team to stay focused.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statement describes best how the Product Backlog is impacted by changes in the product environment?",
    "options": [
      {
        "text": "The Product Backlog should always follow the Product Owners plan and should not reflect the changes at all.",
        "correct": false
      },
      {
        "text": "The Product Backlog should be very high level and therefore tolerate such changes.",
        "correct": false
      },
      {
        "text": "The Product Backlog should evolve and reflect the environment changes.",
        "correct": true
      }
    ]
  },
  {
    "question": "What does a Product Owner do in the Scrum Event Sprint Retrospective?",
    "options": [
      {
        "text": "Answering the questions of the Developers and Scrum Master.",
        "correct": false
      },
      {
        "text": "The Product Owner does not have the permission to attend the meeting.",
        "correct": false
      },
      {
        "text": "Participate as a Scrum Team member.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following are not allowed in Scrum?",
    "options": [
      {
        "text": "Using User Stories.",
        "correct": false
      },
      {
        "text": "Having two Product Owners in a Scrum Team.",
        "correct": true
      },
      {
        "text": "A Sprint 0.",
        "correct": true
      },
      {
        "text": "A Release Sprint.",
        "correct": true
      },
      {
        "text": "Using Story Points.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: When two Scrum Teams are working on the same product you should normalize their estimations to be able to compare their performance.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statement about the Product Backlog is correct?",
    "options": [
      {
        "text": "The Product Backlog must only contain small, detailed and clearly described items.",
        "correct": false
      },
      {
        "text": "The Scrum Master is responsible for managing the Product Backlog.",
        "correct": false
      },
      {
        "text": "The Product Owner is responsible for managing the Product Backlog.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Product Owner can nominate a \"Lead Developer\" as a single point of contact.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which 3 of the following are time boxed Scrum events?",
    "options": [
      {
        "text": "Sprint Planning.",
        "correct": true
      },
      {
        "text": "Sprint Refinement.",
        "correct": false
      },
      {
        "text": "Sprint Review.",
        "correct": true
      },
      {
        "text": "Daily Scrum.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following answers is correct about the Product Owner accountability?",
    "options": [
      {
        "text": "The Product Owner is not part of the Scrum Team.",
        "correct": false
      },
      {
        "text": "The Product Owner creates all items in the Product Backlog on his own.",
        "correct": false
      },
      {
        "text": "The Product Owner is responsible to explain Product Backlog Items and to answer questions.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statement is correct about the Sprint Backlog?",
    "options": [
      {
        "text": "It doesn't need to have detail.",
        "correct": false
      },
      {
        "text": "It has just enough detail.",
        "correct": true
      },
      {
        "text": "It has all the details.",
        "correct": false
      }
    ]
  },
  {
    "question": "How much of the overall working time should the Product Owner spend with the Developers?",
    "options": [
      {
        "text": "At least 15% of the time.",
        "correct": false
      },
      {
        "text": "As much as required.",
        "correct": true
      },
      {
        "text": "Min. 50% of the time.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Two Scrum Teams are working on the same product. Do they have to share the same Definition of Ready?",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Based on which criteria should the Product Owner order the Product Backlog Items?",
    "options": [
      {
        "text": "Based on size.",
        "correct": false
      },
      {
        "text": "Based on value.",
        "correct": true
      },
      {
        "text": "Based on risk.",
        "correct": false
      }
    ]
  },
  {
    "question": "The satisfaction of which stakeholder is the most important?",
    "options": [
      {
        "text": "The CEO.",
        "correct": false
      },
      {
        "text": "The higher management.",
        "correct": false
      },
      {
        "text": "The End-user.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: It is not allowed that the Product Owner is a Developer (part of the \"Developers\") at the same time.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which 2 of the following are an indication for an item to be ready for development?",
    "options": [
      {
        "text": "The item is refined and small enough to fit in one Sprint.",
        "correct": true
      },
      {
        "text": "All stakeholder have agreed to prioritize it.",
        "correct": false
      },
      {
        "text": "The item is estimated (e.g. in Story Points).",
        "correct": true
      },
      {
        "text": "The item is smaller than 15 Story Points.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: To be self-management means, that it is okay for the Developers to don't do the Daily Scrum.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "The Product Owner is not available and cannot answer the developers questions before the Sprint Planning. Therefore, the developers feel a high level of uncertainty to make a reliable forecast. What should the team do?",
    "options": [
      {
        "text": "Extend the duration of the current Sprint and try to answer all questions.",
        "correct": false
      },
      {
        "text": "The Sprint Planning meeting should be cancelled or postponed.",
        "correct": false
      },
      {
        "text": "The upcoming Sprint should be cancelled.",
        "correct": false
      },
      {
        "text": "The developers should make a best guess and should not worry too much.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following should a Scrum Master do to start a project?",
    "options": [
      {
        "text": "Ask the Lead Developer to explain the IT architecture.",
        "correct": false
      },
      {
        "text": "Ask the Developers to introduce themselves to each other and tell about their skills and background.",
        "correct": true
      },
      {
        "text": "Ensure, that all team members have a first ticket assigned to them.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: All items in the Product Backlog have usually the same size.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two of the following are typical Daily Scrum outcomes?",
    "options": [
      {
        "text": "The team is clear on the next steps toward the Sprint Goal.",
        "correct": true
      },
      {
        "text": "The tasks are assigned to the developer.",
        "correct": false
      },
      {
        "text": "Impediments identified by the Scrum Master.",
        "correct": true
      },
      {
        "text": "A refined Daily Backlog.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: Does a Product Backlog Item have an item \"Owner\".",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Product Owner is not part of the Scrum Team.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which statements describe best what happens in an organization if Scrum is introduced but the Scrum terminology is tailored to fit into the organizations environment?",
    "options": [
      {
        "text": "The change might be not obvious to everyone and therefore little change will happen.",
        "correct": true
      },
      {
        "text": "The organization will adapt the Scrum concepts faster due to the tailored approach.",
        "correct": false
      },
      {
        "text": "The management may feel less enthusiastic about the new approach.",
        "correct": true
      },
      {
        "text": "The change might not be obvious to every employee and some employees will not recognize it at all.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which Scrum accountabilities have to attend the Daily Scrum?",
    "options": [
      {
        "text": "The Scrum Master.",
        "correct": false
      },
      {
        "text": "The Project Manager.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Business Analyst.",
        "correct": false
      }
    ]
  },
  {
    "question": "The Developers have an internal conflict with one of the team members. What should the Product Owner do?",
    "options": [
      {
        "text": "Remove the Developer from the team?",
        "correct": false
      },
      {
        "text": "Ask the Scrum Master to remove the Developer from the Team?",
        "correct": false
      },
      {
        "text": "Let the team handle the conflict internally \u2013 they are self-managing!",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following describes best the Sprint Review?",
    "options": [
      {
        "text": "It is a meeting for the inspection of the Increment and to collect feedback.",
        "correct": true
      },
      {
        "text": "It is a meeting to do the controlling and evaluation in regards to the developers work.",
        "correct": false
      },
      {
        "text": "It is a formal meeting to receive the approval for the work that was done.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: In each Sprint Backlog at least one high priority process improvement items is existing.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Definition of Ready shows the team when Product Backlog Items are ready to be selected for the Sprint Backlog.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which two of the following contribute the most to the Scrum Value \"Focus\"?",
    "options": [
      {
        "text": "Having a Burn-Down-Chart.",
        "correct": false
      },
      {
        "text": "Having a Sprint Goal.",
        "correct": true
      },
      {
        "text": "Using Story Points.",
        "correct": false
      },
      {
        "text": "Having time boxed events.",
        "correct": true
      }
    ]
  },
  {
    "question": "Who is required to attend the Daily Scrum?",
    "options": [
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Project Lead.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The Scrum Master",
        "correct": false
      }
    ]
  },
  {
    "question": "How much time is needed between a Sprint Retrospective and the next Sprint Planning to prepare the Product Backlog?",
    "options": [
      {
        "text": "As much as defined by the Scrum Master.",
        "correct": false
      },
      {
        "text": "As much as it is needed.",
        "correct": false
      },
      {
        "text": "None.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following best describes the Scrum Pillar \"Transparency\"?",
    "options": [
      {
        "text": "The whole process should be visible to everyone.",
        "correct": false
      },
      {
        "text": "The process should be visible to the key stakeholders.",
        "correct": false
      },
      {
        "text": "Significant aspect of the process must be visible to those responsible for the outcome.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: The Product Backlog is baselined before the Sprint 0.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following are Scrum Values?",
    "options": [
      {
        "text": "Respect.",
        "correct": true
      },
      {
        "text": "Focus.",
        "correct": true
      },
      {
        "text": "Inspection.",
        "correct": false
      },
      {
        "text": "Collaboration.",
        "correct": false
      },
      {
        "text": "Commitment.",
        "correct": true
      },
      {
        "text": "Maximize Value.",
        "correct": false
      },
      {
        "text": "Courage.",
        "correct": true
      },
      {
        "text": "Openness.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: Self-management means, that the team can decide which Scrum events are needed.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "True or False: Following Scrum, there can be a maximum of one release per Sprint.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which Scrum accountability is owning the Sprint Backlog?",
    "options": [
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Scrum Master",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      }
    ]
  },
  {
    "question": "Which of the following are mandatory in Scrum?",
    "options": [
      {
        "text": "Do Sprint Plannings.",
        "correct": true
      },
      {
        "text": "Do Daily Scrums.",
        "correct": true
      },
      {
        "text": "Have a Product Owner.",
        "correct": true
      },
      {
        "text": "Use Story Points.",
        "correct": false
      },
      {
        "text": "Use User Stories.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Scrum Master can decide which Scrum Artifacts are required in the Scrum project.",
    "options": [
      {
        "text": "True.",
        "correct": false
      },
      {
        "text": "False.",
        "correct": true
      }
    ]
  },
  {
    "question": "How is budgeting done in a Scrum Project?",
    "options": [
      {
        "text": "Ideally budgeting is done every Sprint.",
        "correct": true
      },
      {
        "text": "Scrum doesn't need the team to care about budget.",
        "correct": false
      },
      {
        "text": "Budgeting is done based on the Product Backlog as a baseline.",
        "correct": false
      }
    ]
  },
  {
    "question": "The collaboration between the Developers and the Product Owner is very important for the product. Which of the following is the least productive way for the Scrum Master to improve this collaboration?",
    "options": [
      {
        "text": "The Scrum Master should act as a go-between for them.",
        "correct": true
      },
      {
        "text": "The Scrum Master should teach them techniques to improve it.",
        "correct": false
      },
      {
        "text": "The Scrum Master should suggest new collaboration tools.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which Scrum Event can be compared to the use of a \"lessons learned meeting\"?",
    "options": [
      {
        "text": "The Sprint Review.",
        "correct": false
      },
      {
        "text": "The Daily Scrum.",
        "correct": false
      },
      {
        "text": "The Sprint Retrospective.",
        "correct": true
      },
      {
        "text": "The Sprint Planning.",
        "correct": false
      }
    ]
  },
  {
    "question": "True or False: The Product Backlog should have just enough detail.",
    "options": [
      {
        "text": "True.",
        "correct": true
      },
      {
        "text": "False.",
        "correct": false
      }
    ]
  },
  {
    "question": "In the middle of the Sprint, the customer decides that there are two new features she wants. The Product Owner could: (choose the best two answers)",
    "options": [
      {
        "text": "Ask the Developers to consider whether they can add these features to the current Sprint without endangering the Sprint Goal.",
        "correct": true
      },
      {
        "text": "Introduce these features at the next Daily Scrum.",
        "correct": false
      },
      {
        "text": "Have the Scrum Master add these features to the current Sprint.",
        "correct": false
      },
      {
        "text": "Add these features to the Product Backlog.",
        "correct": true
      }
    ]
  },
  {
    "question": "Developers are self-managing, which of the following do they manage? (choose the best answer)",
    "options": [
      {
        "text": "Product Backlog ordering.",
        "correct": false
      },
      {
        "text": "When to release, based on its progress.",
        "correct": false
      },
      {
        "text": "Sprint Backlog.",
        "correct": true
      },
      {
        "text": "Stakeholders for the Sprint Review.",
        "correct": false
      },
      {
        "text": "Sprint length.",
        "correct": false
      }
    ]
  },
  {
    "question": "When the Developers determine that they will not be able to finish the complete forecast, who needs to be present when reviewing and adjusting the Sprint work selected? (choose the best answer)",
    "options": [
      {
        "text": "The Scrum Master and the Developers.",
        "correct": false
      },
      {
        "text": "The Product Owner and all stakeholders.",
        "correct": false
      },
      {
        "text": "The Product Owner and the Developers.",
        "correct": true
      },
      {
        "text": "The Scrum Master project manager and the Developers.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Scrum Team is a cohesive unit of professionals that consists of which of the following? (choose all that apply)",
    "options": [
      {
        "text": "Developers.",
        "correct": true
      },
      {
        "text": "One Product Owner.",
        "correct": true
      },
      {
        "text": "Users.",
        "correct": false
      },
      {
        "text": "One Scrum Master.",
        "correct": true
      },
      {
        "text": "Customers.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following is required by Scrum? (choose the best answer)",
    "options": [
      {
        "text": "Sprint Retrospective.",
        "correct": true
      },
      {
        "text": "Developers must stand up at the Daily Scrum.",
        "correct": false
      },
      {
        "text": "Sprint Burndown Chart.",
        "correct": false
      },
      {
        "text": "Release Planning.",
        "correct": false
      },
      {
        "text": "All of the above.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Scrum Master is working with a Scrum Team that has Developers in different physical locations. The Developers meet in a variety of meeting rooms and have much to do logistically (for example: reserve meeting rooms and set up conference calls) before the Daily Scrum. What action should the Scrum Master take? (choose the best answer)",
    "options": [
      {
        "text": "Set up the meeting and tell the Scrum Team that is how it will be done.",
        "correct": false
      },
      {
        "text": "Allow the Developers to self-manage and determine for themselves what to do.",
        "correct": true
      },
      {
        "text": "Inform management and ask them to solve it.",
        "correct": false
      },
      {
        "text": "Ask the Developers to alternate who is responsible for meeting setup.",
        "correct": false
      }
    ]
  },
  {
    "question": "What does it mean for a Scrum Team to be cross-functional? (choose the best answer)",
    "options": [
      {
        "text": "Developers on the Scrum Team work closely with business analysts, architects, developers, and testers who are not on the team.",
        "correct": false
      },
      {
        "text": "The Scrum Team includes skilled individuals who together have all the skills necessary to create value each Sprint.",
        "correct": true
      },
      {
        "text": "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, developers, and testers.",
        "correct": false
      },
      {
        "text": "The Scrum Team includes not only developers but also business analysts, architects, and testers.",
        "correct": false
      }
    ]
  },
  {
    "question": "The job of a Product Owner focuses on the following: (choose the best two answers)",
    "options": [
      {
        "text": "Clearly communicating project or release status and strategies to customers and stakeholders.",
        "correct": true
      },
      {
        "text": "Working with customers and stakeholders to identify the most valuable product requirements.",
        "correct": true
      },
      {
        "text": "Being with the Scrum Team all the time, just in case they need me to clarify a requirement.",
        "correct": false
      },
      {
        "text": "Writing clear, transparent User Stories.",
        "correct": false
      }
    ]
  },
  {
    "question": "When multiple Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint? (choose the best answer)",
    "options": [
      {
        "text": "Yes, but only for Scrum Teams whose work has dependencies.",
        "correct": false
      },
      {
        "text": "Yes, in order to accurately inspect what is done.",
        "correct": true
      },
      {
        "text": "No, that's far too hard and must be done in a hardening Sprint.",
        "correct": false
      },
      {
        "text": "No, each Scrum Team stands alone.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which statement best describes a Product Owner's responsibility? (choose the best answer)",
    "options": [
      {
        "text": "Optimizing the value of the work the Scrum Team does.",
        "correct": true
      },
      {
        "text": "Keep stakeholders from distracting the Developers.",
        "correct": false
      },
      {
        "text": "Directing the Developers.",
        "correct": false
      },
      {
        "text": "Ensuring that the work meets the commitments to the stakeholders.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which two things should the Scrum Team do during the first Sprint? (choose the best two answers)",
    "options": [
      {
        "text": "Make up a plan for the rest of the project.",
        "correct": false
      },
      {
        "text": "Create at least one valuable, useful Increment.",
        "correct": true
      },
      {
        "text": "Build at least one piece of valuable functionality.",
        "correct": true
      },
      {
        "text": "Define the major product features and a release plan architecture.",
        "correct": false
      },
      {
        "text": "Analyze, describe, and document the requirements for the subsequent Sprints.",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the timebox for the Sprint Planning event? (choose the best answer)",
    "options": [
      {
        "text": "Whenever it is done.",
        "correct": false
      },
      {
        "text": "Monthly.",
        "correct": false
      },
      {
        "text": "4 hours for a one-month Sprint.",
        "correct": false
      },
      {
        "text": "8 hours for a one-month Sprint.",
        "correct": true
      }
    ]
  },
  {
    "question": "Who owns the Sprint Backlog? (choose the best answer)",
    "options": [
      {
        "text": "The Product Owner.",
        "correct": false
      },
      {
        "text": "The Scrum Team.",
        "correct": false
      },
      {
        "text": "The Developers.",
        "correct": true
      },
      {
        "text": "The Scrum Master.",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following are appropriate topics for discussion during a Sprint Retrospective? (choose the best two answers)",
    "options": [
      {
        "text": "Documenting acceptance criteria for items in the next Sprint.",
        "correct": false
      },
      {
        "text": "The order of items in the Product Backlog.",
        "correct": false
      },
      {
        "text": "Identifying high priority process improvements for the next Sprint.",
        "correct": true
      },
      {
        "text": "How the team collaborates.",
        "correct": true
      }
    ]
  },
  {
    "question": "What is the Product Owner responsible for during the Sprint Retrospective? (choose the best answer)",
    "options": [
      {
        "text": "Participating as a Scrum Team member.",
        "correct": true
      },
      {
        "text": "The Product Owner should not take part in Sprint Retrospective.",
        "correct": false
      },
      {
        "text": "Capturing requirements for the Product Backlog.",
        "correct": false
      },
      {
        "text": "Summarizing and reporting the discussions to the stakeholders that they represent in the Scrum Team.",
        "correct": false
      }
    ]
  }
];
