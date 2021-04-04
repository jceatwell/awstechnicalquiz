const questions = Object.freeze([
    {
        question: "Which best describes Amazon Elastic Cloud Compute (Amazon EC2) \"Compute Optimized\" instances types?",
        choices: [
            "Ideal for compute bound applications that benefit from high performance processors",
            "Provide a balance of compute, memory and networking resources and can be used for a variety of diverse workloads",
            "Designed to deliver fast performing workloads that process target data sets in memory",
            "Designed for workloads that require hight sequential read and write access to very large data sets on local storage"
        ],
        correctAnswer: 0
    },
    {
        question: "Which statement best describes APN Partner Central?",
        choices: [
            "It is a resource to help you design solutions following AWS best practices.",
            "It is a resource to help fine tune and accelerate a design solution.",
            "It is a resource for finding use cases to help inspire solution design and build confidence with customers.",
            "It is a resource providing APN Partners with the tools and content they need to grow their business on AWS."
        ],
        correctAnswer: 3
    },
    {
        question: "Which statement best describes Amazon Elastic Block Store (Amazon EBS)?",
        choices: [
            "Amazon EBS is a file storage service for Amazon EC2 instances.",
            "Amazon EBS is an object service that can be used to store and retrieve any amount of data, at any time, from anywhere on the web.",
            "Amazon EBS is service connecting an on premise software applicnce with cloud bacsed storage.",
            "Amazon EBS is provides persistent block level storage volumes for use with Amazon EC2 instances."
        ],
        correctAnswer: 3
    },
    {
        question: "Which statement best describes Amazon Elastic Cloud Compute (Amazon EC2) \"General Purpose\" instances?",
        choices: [
            "Designed for workflows that require high, sequential read and write access to very large data sets on local storage",
            "Designed to deliver fast performance for workloads that process large data sets in memory",
            "Ideal for compute bound application that benefit from hight performance processors",
            "Provides a balance of compute, memory and networking resources and can be user for a variety of diverse workloads"
        ],
        correctAnswer: 3
    },
    {
        question: "At what level do Security Groups provide protection?",
        choices: [
            "Virtual Private Cloud (VPC)",
            "Host operating system",
            "Subnet",
            "Instance"
        ],
        correctAnswer: 3
    },
    {
        question: "Which migration sttrategy consists of re-architecting an apllication, typically using cloud native features?",
        choices: [
            "Rehost: lift and shift",
            "Retain: keep applications on premises",
            "Replatform: lift, tinker and shift",
            "Refactor: modernize"
        ],
        correctAnswer: 3
    },
    {
        question: "Which Statement is true regarding AWS Parter Network (APN) Consulting Partners?",
        choices: [
            "APN Consulting Partners include Managed Service Providers (MSP).",
            "APN Consulting Partners provide hardware, connectivity services, and software solutionsthat are hosted on or integrated with the AWS Cloud",
            "APN Consulting Partners can achieve one of three performance tiers: Registered, Select and Advanced",
            "APN Consulting Partners include independent Software Vendors (ISVs)"
        ],
        correctAnswer: 0
    },
    {
        question: "Which Statement is true regarding AWS Parter Network (APN) Consulting Partners?",
        choices: [
            "APN Consulting Partners provide hardware, connectivity services, and software solutionsthat are hosted on or integrated with the AWS Cloud",
            "APN Consulting Partners can achieve one of three performance tiers: Registered, Select and Advanced",
            "APN Consulting Partners help customers design, architect, build, migrate and manage their workloads and applications",
            "APN Consulting Partners include independent Software Vendors (ISVs)"
        ],
        correctAnswer: 2
    },
    {
        question: "Which statement best describes the AWS Customer Success site?",
        choices: [
            "It is a resource to help you design solutions following AWS best practice.",
            "It is a resource providing APN partners with the tools and content they need to grow their business on AZS",
            "It is a resource to help fine tune and accelerate a designed solution.",
            "It is a resource for finding user cases to help inspire solution design and build confidence with customers."
        ],
        correctAnswer: 3
    },
    {
        question: "Which statement best describes Amanzon Provate Cloud (Amazon VPC)?",
        choices: [
            "Amazon VPC acts as a virtual network within which customers can launch AWS resources",
            "Amazon VPC acts as a virtual firewall controlling the traffix at the istance level",
            "Amazon VPC acts as a virtual firewall controlling the traffix at the subnet level",
            "Amazon VPC is a resource connecting AWS Cloud resources to a customer's Virtual PRivate Network (VPN)"
        ],
        correctAnswer: 0
    },
    {
        question: "Which statement accurately replects the principles of the Shared Responsibility Model?",
        choices: [
            "Customers are responsible for securing the physical network infrastructure of AWS",
            "AWS is responsible for implementing security controls on customer data.",
            "AWS is responsible for securing the physical network infrastructure.",
            "AWS is responsible for securing host credentials"
        ],
        correctAnswer: 2
    },
    {
        question: "Which statement accurately replects the principles of the Shared Responsibility Model?",
        choices: [
            "Customers are responsible for securing the physical network infrastructure of AWS",
            "AWS is responsible for implementing security controls on customer data.",
            "Customers are responsible for securing their application and data.",
            "AWS is responsible for securing host credentials"
        ],
        correctAnswer: 2
    },
    {
        question: "Which statement best describe Amazon Simple Storage Service Glacier (Amazone S3 Glacier)?",
        choices: [
            "Amazon S3 Glacier provides persistent block level storage volumes for use with Amazon EC2 instances",
            "Amazon S3 Glacier is a low-cost storage service designed for data archiving",
            "Amazon S3 Glacier is a general purpose block level storage service",
            "Amazon S3 Glacier is a general purpose object storage service."
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following best describes Serverless Architectures?",
        choices: [
            "Serverless architectures package application's code, configurations and dependencies into a single object",
            "Serverless architectures run applications without provisioning, maintaining and administering servers.",
            "Serverless architectures help customers gain business insights from their data.",
            "Serverless architectures optimize operations by making it easy to read data."
        ],
        correctAnswer: 1
    },
    {
        question: "When meeting with a customer to present a solution, what would be constidered best practices?",
        choices: [
            "Prepare thoroughly.",
            "Stand in front of your drawing.",
            "Allow objections ot stop the converstation",
            "Avoid using case studies to strengthen your position."
        ],
        correctAnswer: 0
    },
    {
        question: "When meeting with a customer to present a solution, what would be constidered best practices?",
        choices: [
            "Stand in front of your drawing.",
            "Allow objections ot stop the converstation",
            "Bring Markers.",
            "Avoid using case studies to strengthen your position."
        ],
        correctAnswer: 2
    },    
    {
        question: "Which definition best describes AWS Availability Zones?",
        choices: [
            "A single data center within a geographic area.",
            "Locations designed to deliver content to end users.",
            "AWS converage within a geographical area",
            "Isolated locations within a geographical region, containing one or more data centers"
        ],
        correctAnswer: 3
    },
    {
        question: "When meeting with a customer to gather information about their business challenges, what would be considered best practices?",
        choices: [
            "Ask yes/no questions.",
            "Asks the five when's",
            "Ask open-ended questions.",
            "Focus on perenting."
        ],
        correctAnswer: 2
    },
    {
        question: "When meeting with a customer to gather information about their business challenges, what would be considered best practices?",
        choices: [
            "Focus on listening.",
            "Ask yes/no questions.",
            "Asks the five when's",
            "Focus on perenting."
        ],
        correctAnswer: 0
    },    
    {
        question: "Which of the following best descries the functionality of Containers?",
        choices: [
            "Containers package application's code, configurations and dependencies into a single object",
            "Containers run applications without provisioning, maintaining and administering servers.",
            "Containers optimize operations by making it easy to read data.",
            "Containers help customers gain business insights from their data."
        ],
        correctAnswer: 0
    },
    {
        question: "A customer wushes to increase the availability of thier AWS cloud-hosted application. Which approach will help them achieve their goal?",
        choices: [
            "Host application instances on the same availability zone.",
            "Host application instances on multiple availability zones.",
            "Condense a multi-tiered application into a single=tier",
            "Use mutiple Edge Locations"
        ],
        correctAnswer: 1
    },
    {
        question: "A customer wushes to increase the availability of thier AWS cloud-hosted application. Which approach will help them achieve their goal?",
        choices: [
            "Host application instances on the same availability zone.",
            "Condense a multi-tiered application into a single=tier",
            "Use mutiple Edge Locations",
            "User multiple instances instead of just one"
        ],
        correctAnswer: 3
    },    
    {
        question: "Which of the following statements best describes a Proof Of Concept (POC)?",
        choices: [
            "A POC can be built without an AWS account",
            "A POC requires no particular skills or training to create",
            "A POC runs in place of the customers's production environment",
            "A POC is a small scales, practical example of the proposed solution"
        ],
        correctAnswer: 3
    },
    {
        question: "Which migration strategy constinst of a simple transfer of application resources from an on-premise data center to the AWS cloud?",
        choices: [
            "Retain: keep applications on premises",
            "Replatform: lift, tinker and shift",
            "Rehost: lift and shift",
            "Refactor: modernize"
        ],
        correctAnswer: 2
    },
    {
        question: "Which Statement is true regarding AWS Parter Network (APN) Technology Partners?",
        choices: [
            "APN Technology Partners provide hardware, connectivity services, and software solutionsthat are hosted on or integrated with the AWS Cloud",
            "APN Technology Partners include Managed Service Providers (MSP).",
            "APN Technology Partners deliver professional services",
            "APN Technology Partners help customers design, architect, build, migrate and manage their workloads and applications",
        ],
        correctAnswer: 0
    },    
    {
        question: "Which Statement is true regarding AWS Parter Network (APN) Technology Partners?",
        choices: [
            "APN Technology Partners include Managed Service Providers (MSP).",
            "APN Technology Partners deliver professional services",
            "APN Technology Partners include independent Software Vendors (ISVs)",
            "APN Technology Partners help customers design, architect, build, migrate and manage their workloads and applications",
        ],
        correctAnswer: 2
    },    
    {
        question: "Which of the following AWS services could serve as a migration target of an on-premises MySQL database?",
        choices: [
            "Amazon Simple Storage Servuce (Amazon S3)",
            "Amazon DynamoDB",
            "Amazon Relational Database Service (Amazon RDS)",
            "AWS Lambda"
        ],
        correctAnswer: 2
    },
    {
        question: "Which statement best describes Amazon Elastic Cloud Compute (Amazon EC2) \"Memory Optimized\" instances?",
        choices: [
            "Ideal for compute bound applications that benefit from hight performance processors",
            "Provides a balance of compute, memory and networking resources and can be user for a variety of diverse workloads",
            "Designed for workflows that require high, sequential read and write access to very large data sets on local storage",
            "Designed to deliver fast performance for workloads that process large data sets in memory",
        ],
        correctAnswer: 3
    },    
    {
        question: "Which of the following statements are true regarding a Well-Architected review?",
        choices: [
            "It compares a customer's workload to the latest AWS architectural bes practices.",
            "It should be run before a solution has been implemented",
            "It is a manual process requiring access to the AWS well-architecture web site",
            "It compares a customer's workload to their former on-premise workload."
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following statements are true regarding a Well-Architected review?",
        choices: [
            "It uses the AWS Well-Architected Tool in the console",
            "It should be run before a solution has been implemented",
            "It is a manual process requiring access to the AWS well-architecture web site",
            "It compares a customer's workload to their former on-premise workload."
        ],
        correctAnswer: 0
    },
    {
        question: "Which definition best describes AWS edge locations?",
        choices: [
            "Separate, isoalated geographic areas that contain availability zones",
            "Isolated locations within a geographical region, containing one or more data centers",
            "Locations designed to deliver content to end users.",
            "Unique data centers within a geographic area."
        ],
        correctAnswer: 2
    },   
    {
        question: "Which  statement best describes the AWS Well-Architected Framework?",
        choices: [
            "It is a resouce to help accelerate a designed solution, providing preconfigured templates",
            "It is a resource specifically for APN Partners, providing the tools and content they need to grow their busineses on AWS.",
            "It is a resource to help you design solutions following AWS best practices",
            "It is a resource for finding use cases to help inspire confidence with customers."
        ],
        correctAnswer: 2
    },   
    {
        question: "Which of the following are advantages of cloud computing?",
        choices: [
            "Higher latency for global consumers",
            "Increase focus on data centers",
            "Benefit from massive economies of scale",
            "Manual scaling to increase capacity"
        ],
        correctAnswer: 2
    },   
    {
        question: "Which of the following are advantages of cloud computing?",
        choices: [
            "Higher latency for global consumers",
            "Increase focus on data centers",
            "Manual scaling to increase capacity",
            "Increase speed an agility"
        ],
        correctAnswer: 3
    },    
    {
        question: "Which statement best describes Amazon Simple Storage Service?",
        choices: [
            "Amazon S3 is a file storage service for Amazon EC2 Instances.",
            "Amazon S3 is an object storage service that can be used to store and retrive any amount of data, at any time, from anywhere on the web.",
            "Amazon S3 proveides persistent block level storage volumes for use with Amazon EC2 instances.",
            "Amazon S3 is a service connecting an on premises softeware applinace with cloud storage."
        ],
        correctAnswer: 1
    },
    {
        question: "Which definition best describes AWS regions?",
        choices: [
            "Seperage, isolated geographic areas that contain availability zones",
            "Isolated locations within a geographical region, containing one or more data centers",
            "Unique data centers withing a geographical area",
            "Locations designed to deliver content to end users"
        ],
        correctAnswer: 0
    },   
    {
        question: "At what level do Network Access Control Lists (NACLs) provide protection?",
        choices: [
            "Host operating system",
            "Instance",
            "Subnet",
            "Virtual Provate Cloud (VPC)"
        ],
        correctAnswer: 2
    },
    // {
    //     question: "?",
    //     choices: [
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     correctAnswer: 0
    // },
]);