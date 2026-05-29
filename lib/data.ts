export const personalInfo = {
  name: "Thura Zaw",
  title: "Robotic & AI Engineer",
  subtitle: "PCB Designer · Embedded Systems · Computer Vision",
  email: "trz412002@gmail.com",
  phone: "+66 92 754 1710",
  location: "Bangkok, Thailand",
  github: "https://github.com/thura-robotics",
  linkedin: "https://www.linkedin.com/in/thura-robotics/",
  bio: `I am a Robotics and Artificial Intelligence Engineering student at KMITL, Bangkok, graduating April 2026 with a GPA of 3.7/4.0 and First Class Honours. My work spans the full stack of robotics — from designing custom PCBs and embedded firmware to training AI vision models and deploying sim-to-real systems in NVIDIA Isaac Sim.

I thrive at the intersection of hardware and software: building bipedal robot legs with CAN Bus communication, autonomous UAV-UGV inspection platforms, and real-time control systems. I am passionate about creating robots that work reliably in the real world, not just in simulation.`,
};

export const education = [
  {
    degree: "Bachelor of Engineering — Robotics and Artificial Intelligence",
    institution: "King Mongkut's Institute of Technology Lad Krabang (KMITL)",
    location: "Bangkok, Thailand",
    period: "Aug 2022 – Apr 2026",
    gpa: "3.7 / 4.0 · First Class Honours",
    courses: [
      "Mobile Robots",
      "Feedback Control",
      "Kinematics & Dynamics",
      "Computer Vision",
      "Artificial Intelligence Technology",
      "Microprocessor & Interface",
      "Reinforcement Learning",
      "SLAM",
      "Introduction to Algorithms",
      "Probability & Statistics",
    ],
  },
  {
    degree: "Electronic Engineering",
    institution: "Yangon Technological University",
    location: "Yangon, Myanmar",
    period: "Dec 2018 – Mar 2020",
    gpa: "",
    courses: [],
  },
];

export const theses = [
  {
    type: "Bachelor's Final Year Project",
    title: "Transformable Hybrid UAV-UGV System for Visual Inspection in Unstructured Environments",
    institution: "King Mongkut's Institute of Technology Lad Krabang (KMITL)",
    year: "2025 – 2026",
    description:
      "This capstone project presents a multi-modal robotic platform capable of transforming between aerial (UAV) and ground vehicle (UGV) configurations to support post-earthquake search and rescue missions. The system integrates a state-of-the-art computer vision pipeline using Roboflow and a custom-trained AI model for survivor and hazard detection in unstructured, GPS-denied environments. The ROS2-based architecture manages mode transitions, sensor fusion, and real-time mission control.",
    tags: ["ROS2", "UAV", "UGV", "Roboflow", "Computer Vision", "Search & Rescue", "Sensor Fusion"],
    link: "/portfolio/uav-ugv-system",
  },
];

export const experience = [
  {
    role: "Robotic Engineer",
    company: "General Magic (Thailand) Co., Ltd",
    location: "Bangkok, Thailand",
    period: "Jun 2025 – Mar 2026",
    description:
      "General Magic Industries builds AI products, workflow automation, and blockchain-enabled intelligence for enterprise teams.",
    bullets: [
      "Designed and implemented the electrical system for a bipedal humanoid robot leg, enabling low-latency communication across 12 actuator joints using CAN Bus protocol and SocketCAN on ROS2 Control",
      "Developed custom PCBs and embedded firmware for actuator control using KiCAD, LTSpice, STM32 Cube IDE, and STM32 Cube MX",
      "Collaborated within a team of 4 to achieve sim-to-sim and sim-to-real prototyping in NVIDIA Isaac Sim with commercial Cubemars actuators and 1 Mbps ISO CAN standard",
      "Coordinated university capstone requirements with company product goals in a joint academic-industry robotics initiative",
    ],
    tags: ["ROS2", "CAN Bus", "STM32", "KiCAD", "NVIDIA Isaac Sim", "PCB Design"],
  },
  {
    role: "Robotics System Engineer Intern",
    company: "National Institute of Technology (Sendai College)",
    location: "Sendai, Japan",
    period: "May 2025 – Jun 2025",
    description:
      "Engineering-focused technical college in Sendai, Japan, specialising in practical education and applied research.",
    bullets: [
      "Created an attention robot prototype using C++, Arduino, servo control, and OLED display, enabling real-time danger alerts for technicians through expressive actions and sound",
    ],
    tags: ["C++", "Arduino", "Servo Control", "OLED", "Embedded Systems"],
  },
  {
    role: "Teaching Assistant — General Physics Laboratory",
    company: "King Mongkut's Institute of Technology Lad Krabang (KMITL)",
    location: "Bangkok, Thailand",
    period: "Jul 2024 – Mar 2025",
    description: "",
    bullets: [
      "Assisted in designing and constructing laboratory experiments to enhance student understanding of complex physics concepts",
      "Provided technical assistance and troubleshooting support during lab sessions, ensuring safe use of electrical equipment",
    ],
    tags: ["Teaching", "Lab Design", "Technical Support"],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "C", "MATLAB", "C#"],
  },
  {
    category: "Robotics & Autonomy",
    items: [
      "ROS / ROS2",
      "Robot Kinematics",
      "Feedback Control",
      "PID Control",
      "Path Planning",
      "Odometry",
      "Dead Reckoning",
      "Ackermann Steering",
      "Omnidirectional Drive",
    ],
  },
  {
    category: "State Estimation & SLAM",
    items: [
      "Sensor Fusion",
      "Extended Kalman Filter (EKF)",
      "SLAM",
      "Simultaneous Localisation and Mapping",
      "LiDAR Processing",
      "IMU Integration",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Reinforcement Learning",
      "DDPG",
      "TinyML",
      "Machine Learning",
      "LLM (basic)",
    ],
  },
  {
    category: "Computer Vision",
    items: [
      "OpenCV",
      "Object Detection",
      "Image Segmentation",
      "Roboflow",
      "Custom Model Training",
      "Visual Inspection",
      "Mediapipe",
    ],
  },
  {
    category: "Embedded Systems",
    items: [
      "STM32",
      "Arduino",
      "ESP32 / ESP8266",
      "CAN Bus / SocketCAN",
      "Embedded Firmware",
      "Servo Control",
      "OLED / Display Drivers",
    ],
  },
  {
    category: "PCB & Hardware Design",
    items: [
      "KiCAD",
      "Altium Designer",
      "LTSpice",
      "Schematic Design",
      "PCB Layout",
      "Power Electronics",
      "Boost Converter Design",
    ],
  },
  {
    category: "Simulation & CAD",
    items: [
      "NVIDIA Isaac Sim",
      "NVIDIA Isaac Lab",
      "SOLIDWORKS",
      "Fusion 360",
      "Sim-to-Real Transfer",
    ],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Linux", "Docker (basic)", "STM32 Cube IDE", "Visual Studio Code", "Roboflow"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  technicalDetails: { heading: string; body: string }[];
  tags: string[];
  portfolioCategory: "Robotics & Embedded" | "AI & Computer Vision";
  homepageFeatured: boolean;
  github: string;
  period: string;
};

export const projects: Project[] = [
  {
    slug: "uav-ugv-system",
    title: "Transformable Hybrid UAV-UGV System",
    subtitle: "Capstone / Final Year Project",
    shortDescription:
      "Multi-modal robotic platform capable of switching between aerial and ground modes for post-earthquake search and rescue, powered by ROS2 and a custom-trained AI vision model.",
    fullDescription:
      "This capstone project addresses the critical challenge of navigating post-disaster environments where conventional robots fail. The platform features a transformable chassis that transitions from a multi-rotor UAV for aerial scouting to a wheeled UGV for confined ground traversal. A custom-trained object detection model, developed with Roboflow and SOTA architectures, identifies survivors and structural hazards in real time. The ROS2 middleware manages sensor fusion from onboard cameras, IMU, and proximity sensors, feeding a mission-level state machine that orchestrates mode transitions and goal-directed navigation. Field trials in simulated rubble environments demonstrated reliable detection at ranges of up to 8 m with sub-second inference latency.",
    technicalDetails: [
      {
        heading: "System Architecture",
        body: "The platform runs a ROS2 Humble stack on an onboard NVIDIA Jetson-class SBC. A behaviour-tree-based mission manager governs high-level decisions including mode switching, waypoint following, and emergency return-to-home. Each mode (UAV / UGV) exposes a standardised control interface to higher-level planners.",
      },
      {
        heading: "Vision Pipeline",
        body: "A custom object detection model was trained and annotated using Roboflow with a dataset of 2,400+ images captured in earthquake-simulated rubble. The model runs on-device using TensorRT optimisation, achieving 28 FPS on the embedded compute module. Detections are projected to a 3D occupancy map via depth-camera point clouds.",
      },
      {
        heading: "Mechanical Transformation",
        body: "The transformation mechanism relies on a servo-actuated multi-joint linkage that reconfigures the landing gear struts into a wheeled ground platform within 4 seconds. Weight distribution analysis was performed in SOLIDWORKS to ensure stable flight and ground CoG positions.",
      },
    ],
    tags: ["ROS2", "Computer Vision", "Roboflow", "UAV", "UGV", "NVIDIA Jetson", "Search & Rescue", "Sensor Fusion"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: true,
    github: "https://github.com/thura-robotics",
    period: "2025 – 2026",
  },
  {
    slug: "bipedal-humanoid-leg",
    title: "Bipedal Humanoid Robot Leg",
    subtitle: "General Magic (Thailand) Co., Ltd",
    shortDescription:
      "Full electrical system design for a 12-DOF humanoid robot leg using CAN Bus, SocketCAN, ROS2 Control, and custom STM32 firmware, with sim-to-real validation in NVIDIA Isaac Sim.",
    fullDescription:
      "Developed as part of a joint academic-industry initiative at General Magic Thailand, this project involved designing the complete electrical and firmware architecture for one leg of a bipedal humanoid robot. The leg contains 12 actuator joints driven by Cubemars series brushless motors, all communicating over a 1 Mbps ISO CAN Bus using the SocketCAN Linux interface. Custom PCBs handle power distribution, motor driver interfacing, and sensor aggregation, while STM32 microcontrollers execute low-level torque and position control loops at 1 kHz. The high-level control is managed by ROS2 Control with a hardware abstraction layer that enables seamless transition between simulation in NVIDIA Isaac Sim and real hardware.",
    technicalDetails: [
      {
        heading: "CAN Bus Communication",
        body: "All 12 joints communicate over a single 1 Mbps ISO CAN Bus network using the SocketCAN kernel module on a Linux-based host SBC. Custom CAN frames were designed for position, velocity, and torque commands with sub-millisecond round-trip latency. A heartbeat monitoring system detects and flags joint dropout in real time.",
      },
      {
        heading: "PCB Design",
        body: "Three custom PCBs were designed in KiCAD: a power distribution board (PDB) managing 48 V to 5/3.3 V conversion, a CAN hub board with daisy-chained transceivers, and a sensor aggregation board consolidating encoder and IMU data. Thermal analysis was performed in LTSpice to validate power stage designs under peak load conditions.",
      },
      {
        heading: "Sim-to-Real Workflow",
        body: "The URDF model of the leg was imported into NVIDIA Isaac Sim with articulation physics matching the real Cubemars actuator parameters. Control policies developed in simulation were transferred directly to hardware via the ROS2 Control hardware interface, significantly reducing physical tuning iterations.",
      },
    ],
    tags: ["CAN Bus", "SocketCAN", "ROS2 Control", "STM32", "KiCAD", "LTSpice", "NVIDIA Isaac Sim", "Cubemars"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: true,
    github: "https://github.com/thura-robotics",
    period: "Jun 2025 – Mar 2026",
  },
  {
    slug: "leaf-collector-robot",
    title: "Autonomous Leaf Collecting Robot",
    subtitle: "Adaptive Feedback Control Loop",
    shortDescription:
      "Outdoor autonomous robot with Ackermann steering, custom ROS1-to-ATMega328P bridging PCB, Extended Kalman Filter, and dead reckoning for reliable navigation in unstructured garden environments.",
    fullDescription:
      "Designed as a practical application of mobile robotics principles, this outdoor robot autonomously collects fallen leaves from garden surfaces. The vehicle adopts an Ackermann steering geometry suited for smooth outdoor terrain. A custom-designed PCB acts as the hardware bridge between a high-level ROS1 Noetic stack running on a Raspberry Pi and the low-level ATMega328P microcontroller responsible for motor driver PWM, encoder reading, and servo actuation. An Extended Kalman Filter fuses wheel odometry with IMU measurements for reliable pose estimation without GPS. A reactive obstacle avoidance layer built on ultrasonic sensor feedback prevents collisions with garden furniture and irregular terrain features.",
    technicalDetails: [
      {
        heading: "Custom PCB Bridge",
        body: "The PCB was designed in KiCAD and fabricated with a 2-layer layout. It houses a TTL-to-USB serial bridge, motor driver MOSFETs, an I2C bus for IMU communication, and a dedicated 5 V regulator for logic-level isolation. The design ensures electrical noise from the motor drivers does not corrupt serial communication with the ROS host.",
      },
      {
        heading: "Extended Kalman Filter",
        body: "An EKF was implemented in C++ to fuse wheel encoder odometry with a 6-axis IMU. The state vector tracks 2D position, heading, and linear/angular velocity. The filter handles wheel slip during acceleration and recovers accurate heading estimates on uneven terrain where encoder-only dead reckoning would diverge.",
      },
      {
        heading: "ROS1 Navigation Stack",
        body: "The robot uses a customised ROS1 Noetic navigation stack with a hand-tuned local planner for narrow garden path traversal. A simple occupancy grid built from ultrasonic sensor sweeps provides the cost map for reactive replanning when obstacles are detected mid-path.",
      },
    ],
    tags: ["ROS1 Noetic", "EKF", "Ackermann Steering", "PCB Design", "ATMega328P", "Odometry", "KiCAD", "C++"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2023",
  },
  {
    slug: "unitree-a1-ddpg",
    title: "Unitree A1 Robot Dog — Sim-to-Real",
    subtitle: "DDPG Reinforcement Learning",
    shortDescription:
      "Locomotion policy for a Unitree A1 quadruped trained with Deep Deterministic Policy Gradient (DDPG) in NVIDIA Isaac Sim and transferred to real hardware.",
    fullDescription:
      "This project explores the application of model-free deep reinforcement learning to quadruped locomotion, using the Unitree A1 robot as the target platform. A Deep Deterministic Policy Gradient (DDPG) agent was trained entirely in NVIDIA Isaac Sim using a physics-accurate URDF articulation. The observation space includes joint positions, velocities, base orientation quaternion, and commanded velocity targets. The reward function was shaped to encourage stable forward gait while penalising excessive torque, foot-slip, and unstable base oscillations. After 2 million training steps, the policy was exported and validated on the physical Unitree A1, demonstrating stable trotting gait and velocity-tracking behaviour.",
    technicalDetails: [
      {
        heading: "DDPG Training Setup",
        body: "Training used a custom DDPG implementation in PyTorch with an actor-critic architecture. The actor network outputs 12-dimensional joint torque commands. Experience replay with a buffer of 500,000 transitions and Ornstein-Uhlenbeck exploration noise were used to stabilise training. Parallel environment rollouts in Isaac Sim accelerated sample collection by 32×.",
      },
      {
        heading: "Reward Shaping",
        body: "The reward function balances forward velocity tracking (positive), torque minimisation (negative penalty), base roll/pitch deviation (negative penalty), and foot-slip (negative penalty). Curriculum learning was applied by gradually increasing terrain roughness over training to improve generalisation.",
      },
      {
        heading: "Sim-to-Real Transfer",
        body: "Domain randomisation of actuator gains, joint friction, payload mass, and ground friction was applied during training to bridge the reality gap. The exported policy was deployed on the A1's onboard Raspberry Pi CM4 compute module and validated across multiple floor surfaces.",
      },
    ],
    tags: ["NVIDIA Isaac Sim", "DDPG", "PyTorch", "Reinforcement Learning", "Unitree A1", "Sim-to-Real", "Quadruped"],
    portfolioCategory: "AI & Computer Vision",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2024",
  },
  {
    slug: "omnidirectional-robot",
    title: "Large-Scale Omnidirectional Mobile Robot",
    subtitle: "Offline SLAM with ROS",
    shortDescription:
      "Large-scale omnidirectional platform using Mecanum wheels with offline SLAM for autonomous indoor mapping and navigation in complex warehouse-scale environments.",
    fullDescription:
      "This project involved designing and building a large-format (1.2 m × 0.8 m) omnidirectional mobile robot equipped with Mecanum wheels for holonomic motion. The robot was developed for indoor mapping tasks in large open spaces such as warehouses and laboratory halls. An offline SLAM pipeline using ROS and a 2D LiDAR sensor generates high-fidelity occupancy grid maps that are subsequently used for autonomous navigation. The omnidirectional kinematics model was implemented from scratch in C++, with separate ROS nodes managing wheel odometry, LiDAR scan matching, and the navigation stack. The platform demonstrated centimetre-level positioning accuracy across repeated mapping sessions.",
    technicalDetails: [
      {
        heading: "Omnidirectional Kinematics",
        body: "The kinematics model computes individual wheel velocities for all four Mecanum wheels given commanded translational and rotational velocities. The forward kinematics inverts the Jacobian to estimate robot velocity from encoder readings, which feeds directly into the odometry node for dead reckoning between SLAM updates.",
      },
      {
        heading: "Offline SLAM Pipeline",
        body: "A Gmapping-based SLAM pipeline with a custom scan pre-processing node handles reflective floor surfaces common in laboratory settings. Post-session, the map is refined using iterative closest point (ICP) loop-closure detection to remove accumulated drift across 200+ m trajectories.",
      },
    ],
    tags: ["ROS", "SLAM", "Mecanum Wheels", "Omnidirectional Drive", "LiDAR", "Navigation", "C++"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2024",
  },
  {
    slug: "drawing-robot",
    title: "Cartesian Drawing Robot",
    subtitle: "K-Engineering World Tour 2024 — Most Innovative Project Award",
    shortDescription:
      "Award-winning Cartesian robot that converts portrait photographs into G-code using OpenCV and a DFS path-planning algorithm, then renders photorealistic pencil drawings autonomously.",
    fullDescription:
      "This award-winning project combines computer vision, computational geometry, and robotics to create an autonomous portrait drawing machine. The pipeline begins with portrait image acquisition and pre-processing in OpenCV — edge detection, tone mapping, and stroke density estimation produce a vectorised representation of the image. A Depth-First Search algorithm then optimises the drawing path to minimise pen lifts and total travel distance, generating G-code toolpaths compatible with the Cartesian robot's motion controller. The robot achieves sub-millimetre positioning accuracy using lead-screw linear actuators and closed-loop stepper control. The project won the Most Innovative Project Award at the K-Engineering World Tour 2024 competition hosted by KMITL.",
    technicalDetails: [
      {
        heading: "Image to G-code Pipeline",
        body: "The OpenCV pipeline applies adaptive thresholding, Canny edge detection, and contour extraction to convert portrait images into stroke sets. Stroke density is modulated by local image intensity, reproducing photorealistic tonal gradients. The final stroke set is sorted using a custom DFS algorithm that reduces total pen-up travel by over 60% compared to naive ordering.",
      },
      {
        heading: "Cartesian Robot Mechanics",
        body: "The two-axis (XY) Cartesian robot uses NEMA 17 stepper motors with lead-screw linear rails for high-precision positioning. An Arduino Mega with a CNC shield runs GRBL firmware, accepting G-code over serial. A servo-actuated pen lift mechanism controls Z-axis pen contact with 0.2 mm vertical resolution.",
      },
    ],
    tags: ["OpenCV", "G-code", "DFS", "Cartesian Robot", "Inverse Kinematics", "Python", "Arduino", "GRBL"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2023",
  },
  {
    slug: "vandalism-detection-tinyml",
    title: "Vandalism Detection with TinyML",
    subtitle: "Edge AI on Microcontroller",
    shortDescription:
      "Real-time vandalism detection system using a quantised CNN deployed directly on an embedded microcontroller via TinyML, enabling on-device inference without cloud dependency.",
    fullDescription:
      "This project demonstrates end-to-end deployment of a Convolutional Neural Network on a resource-constrained microcontroller for real-time anomaly detection. A custom vandalism detection dataset was collected and annotated, then used to train a lightweight CNN architecture. The model was quantised to INT8 using TensorFlow Lite and deployed on an ARM Cortex-M4 microcontroller. The system achieves 15 FPS inference on 96×96 resolution frames while consuming under 250 mW, making it suitable for battery-powered surveillance nodes. A hardware interrupt-driven image capture pipeline ensures consistent frame timing without an RTOS.",
    technicalDetails: [
      {
        heading: "Model Architecture & Quantisation",
        body: "A MobileNet-inspired depthwise separable CNN architecture was selected for its favourable accuracy-to-parameter-count ratio on embedded targets. Post-training INT8 quantisation using TensorFlow Lite reduced the model size from 2.1 MB to 540 KB with less than 2% accuracy degradation on the validation set.",
      },
      {
        heading: "Embedded Deployment",
        body: "TensorFlow Lite for Microcontrollers was compiled against the target ARM Cortex-M4 device using the ARM CMSIS-NN acceleration library for optimised convolution kernels. The inference pipeline runs in a FreeRTOS task with dedicated SRAM allocation for activations and model weights in flash.",
      },
    ],
    tags: ["TinyML", "CNN", "TensorFlow Lite", "Edge AI", "ARM Cortex-M4", "Quantisation", "Embedded ML"],
    portfolioCategory: "AI & Computer Vision",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2023",
  },
  {
    slug: "kira-robot-arm",
    title: "K.I.R.A — Kinematics Integrated Robot Arm",
    subtitle: "MATLAB & Simulink",
    shortDescription:
      "6-DOF robot arm simulation in MATLAB and Simulink covering forward/inverse kinematics, workspace analysis, trajectory planning, and animated motion verification.",
    fullDescription:
      "K.I.R.A (Kinematics Integrated Robot Arm) is a comprehensive MATLAB/Simulink project exploring the full kinematic modelling of a 6-DOF serial manipulator. The project implements Denavit-Hartenberg (DH) parameter convention for systematic forward kinematics computation, and a closed-form analytical inverse kinematics solver for the wrist-partitioned configuration. Workspace reachability is visualised as a 3D point cloud generated by Monte Carlo joint-space sampling. Trajectory planning uses cubic polynomial interpolation for smooth joint-space motion between waypoints. The Simulink model adds PD joint controllers, allowing animated closed-loop simulation of pick-and-place and welding-path trajectories.",
    technicalDetails: [
      {
        heading: "Forward & Inverse Kinematics",
        body: "Forward kinematics uses the product-of-exponentials (PoE) formulation cross-validated against the DH convention. The inverse kinematics solver decouples the wrist position from orientation, using geometric methods for the first three joints and Euler angle decomposition for the wrist. Singularity proximity is tracked via the Jacobian condition number.",
      },
      {
        heading: "Simulink Control Model",
        body: "A PD controller with gravity compensation is implemented for each joint using Simulink blocks. Gravitational torques are computed symbolically from the DH parameters and exported as lookup tables. The model supports real-time visualisation via the MATLAB Robotics Toolbox 3D renderer.",
      },
    ],
    tags: ["MATLAB", "Simulink", "Kinematics", "DH Parameters", "Trajectory Planning", "Robot Arm", "Workspace Analysis"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2023",
  },
  {
    slug: "attention-robot",
    title: "Attention Robot Prototype",
    subtitle: "NIT Sendai, Japan — Research Internship",
    shortDescription:
      "Expressive safety robot developed at NIT Sendai that alerts laboratory technicians to hazards using servo-actuated gestures, OLED facial expressions, and audio feedback in real time.",
    fullDescription:
      "Developed during a competitive research internship at the National Institute of Technology, Sendai College, Japan, this project explores human-robot interaction as a safety mechanism in industrial laboratory settings. The robot uses a pan-tilt servo head to track personnel and orient its OLED face display toward detected hazard zones. When a hazard threshold is exceeded — sensed via temperature, gas, or proximity inputs — the robot executes a choreographed alert sequence: an attention-grabbing servo gesture, a contextual OLED expression, and a multi-tone piezo audio alert. The entire system runs bare-metal C++ on an Arduino Mega, achieving deterministic sub-100 ms response latency from sensor trigger to full alert activation.",
    technicalDetails: [
      {
        heading: "Embedded Firmware Architecture",
        body: "The C++ firmware uses a state-machine architecture with states for IDLE, TRACKING, ALERT, and RESET. Servo control is implemented with hardware PWM timers for precise microsecond pulse timing. The OLED display is driven via I2C using a custom bitmap rendering library optimised for the 128×64 SSD1306 controller.",
      },
      {
        heading: "Sensor Integration",
        body: "Three sensor modalities feed the hazard detection logic: a PIR motion sensor for personnel tracking, a DHT22 temperature/humidity sensor for thermal alerts, and an ultrasonic HC-SR04 for proximity-based hazard zone boundary detection. Sensor readings are filtered with a simple moving average to prevent false triggers.",
      },
    ],
    tags: ["C++", "Arduino", "Servo Control", "OLED", "I2C", "Human-Robot Interaction", "Safety Robotics", "Embedded C++"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "May – Jun 2025",
  },
  {
    slug: "line-following-robot",
    title: "High-Speed Line Following Robot",
    subtitle: "YTU Rolympic Competition — 2nd Prize",
    shortDescription:
      "Competition-grade line follower with a custom STM32 PCB chassis, 8-channel IR sensor array, and a finely tuned PID control loop achieving sub-100 ms lap times.",
    fullDescription:
      "Built for the YTU Rolympic line following competition, this robot was designed around the goal of maximum speed with reliable tracking. A custom 2-layer PCB integrates the STM32F103 microcontroller, dual TB6612FNG H-bridge motor drivers, an 8-channel IR sensor array, and a 3S LiPo power management system into a compact 180 mm chassis. The PID control loop runs at 1 kHz, computing steering corrections from the weighted centroid of the activated IR sensors. Extensive PID gain tuning on the competition track profile resulted in smooth high-speed cornering without oscillation. The robot placed 2nd at the YTU Rolympic competition.",
    technicalDetails: [
      {
        heading: "Custom PCB Design",
        body: "The 2-layer PCB was designed in KiCAD with careful attention to trace impedance on the motor driver power paths and noise isolation between the analog IR sensor signals and the digital MCU domain. A ground plane pour on both layers minimises EMI from the high-current motor driver switches.",
      },
      {
        heading: "PID Tuning",
        body: "PID gains were tuned using a Ziegler-Nichols step-response method on the straight-line segment, then iteratively adjusted for the tight-corner profile of the competition track. Derivative gain filtering prevents noise amplification from IR sensor state transitions at high speeds.",
      },
    ],
    tags: ["STM32", "KiCAD", "PID Control", "IR Sensors", "PCB Design", "Embedded C", "Motor Control", "Competition"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2022 – 2023",
  },
];

export const certifications = [
  {
    name: "Altium Education PCB Design Course",
    issuer: "Altium",
    year: "2024",
  },
  {
    name: "Linux for Robotics",
    issuer: "The Construct",
    year: "2024",
  },
  {
    name: "C++ for Robotics",
    issuer: "The Construct",
    year: "2024",
  },
  {
    name: "Python for Robotics",
    issuer: "The Construct",
    year: "2024",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2023",
  },
];

// ── Hardware Design Projects ──────────────────────────────────────────────────
// Add new entries here whenever a new design is published to GitHub Pages.
// The viewer URL is the full link to the interactive PCB viewer page.
export const hardwareProjects = [
  {
    title: "STM32 Line Following Robot PCB",
    description:
      "Custom 2-layer PCB designed in KiCad for a high-speed line following competition robot. Integrates an STM32F4 Nucleo footprint, dual TB6612FNG H-bridge motor drivers, an 8-channel IR sensor array header, and a 3S LiPo power management circuit on a compact 180 mm chassis-matched form factor.",
    tools: ["KiCad", "STM32F4", "H-Bridge", "PCB Layout", "Schematic Design"],
    viewerUrl: "https://thura-robotics.github.io/designs/nucleo_LFR.html",
    year: "2023",
  },
  {
    title: "SMPS Current Balancer",
    description:
      "Droop-based current balancing board for six parallel Switch-Mode Power Supplies using LTC4359 ideal diode controllers and high-power MOSFETs. Designed to distribute load evenly across multiple SMPS modules, prevent reverse-current flow, and protect against supply failure. Simulated and verified in LTSpice before fabrication.",
    tools: ["KiCad", "LTSpice", "LTC4359", "MOSFET", "Power Electronics", "SMPS"],
    viewerUrl: "https://thura-robotics.github.io/designs/ltc4359_droop.html",
    year: "2024",
  },
];

export const achievements = [
  {
    title: "Most Innovative Project Award",
    event: "K-Engineering World Tour 2024 (KMITL)",
    year: "2024",
    description: "Awarded for the Cartesian Drawing Robot capable of rendering photorealistic images from photographs.",
  },
  {
    title: "2nd Prize — Line Following Robot",
    event: "YTU Rolympic Competition",
    year: "2023",
    description: "Designed a high-speed PID-controlled line following robot with custom PCB and STM32.",
  },
  {
    title: "Summer Training Candidate",
    event: "National Institute of Technology, Sendai, Japan",
    year: "2025",
    description: "Selected for a competitive summer research training programme in Japan.",
  },
];
