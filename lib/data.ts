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
    // Python, C++ removed — shown in logo strip
    items: ["C", "MATLAB", "C#"],
  },
  {
    category: "Robotics & Autonomy",
    // ROS / ROS2 removed — shown in logo strip
    items: [
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
      "Simultaneous Localisation & Mapping",
      "LiDAR Processing",
      "IMU Integration",
    ],
  },
  {
    category: "AI & Machine Learning",
    // TensorFlow removed — shown in logo strip
    items: [
      "PyTorch",
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
    // OpenCV removed — shown in logo strip
    items: [
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
    // STM32, Arduino removed — shown in logo strip
    items: [
      "ESP32 / ESP8266",
      "CAN Bus / SocketCAN",
      "Embedded Firmware",
      "Servo Control",
      "OLED / Display Drivers",
    ],
  },
  {
    category: "PCB & Hardware Design",
    // KiCAD, Altium removed — shown in logo strip
    items: [
      "LTSpice",
      "Schematic Design",
      "PCB Layout",
      "Power Electronics",
      "Boost Converter Design",
    ],
  },
  {
    category: "Simulation & CAD",
    // SOLIDWORKS removed — shown in logo strip
    items: [
      "NVIDIA Isaac Sim",
      "NVIDIA Isaac Lab",
      "Fusion 360",
      "Sim-to-Real Transfer",
    ],
  },
  {
    category: "Tools & DevOps",
    // Git, Linux removed — shown in logo strip
    items: ["Docker (basic)", "STM32 Cube IDE", "Visual Studio Code", "Roboflow"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  technicalDetails: {
    heading: string;
    body: string;
    equations?: string[];   // KaTeX display-mode TeX strings
    images?: { src: string; caption: string }[];
    imageColumns?: number;  // fixed column count (default: auto-fit)
    imageFit?: "contain" | "cover"; // default: contain
    subSections?: {
      heading: string;
      body: string;
      equations?: string[];
      images?: { src: string; caption: string }[];
      imageColumns?: number;
      imageFit?: "contain" | "cover";
    }[];
  }[];
  tags: string[];
  portfolioCategory: "Robotics & Embedded" | "AI & Computer Vision";
  homepageFeatured: boolean;
  github?: string;               // per-project repo link (optional until provided)
  youtube?: string;              // per-project demo video link (optional until provided)
  period: string;
  // ── MIT inverted-pyramid fields (optional; sections render only when present) ──
  outcome?: string;              // punchy lead: what was built + result + my part
  projectType?: string;          // e.g. "Capstone", "Industry", "Competition", "Coursework"
  role?: string;                 // my specific role on the project
  teamSize?: string;             // e.g. "Solo", "Team of 4"
  duration?: string;             // e.g. "10 months"
  contributions?: string[];      // what *I* did — strong action verbs
  teamImage?: string;            // optional team photo shown below contributions
  contextImage?: string;         // optional image shown below Context & Motivation text
  heroImage?: string;            // large banner image, e.g. "/projects/<slug>/hero.jpg"
  gallery?: { src?: string; caption: string }[]; // image slots; drop files in public/projects/<slug>/
};

export const projects: Project[] = [
  {
    slug: "uav-ugv-system",
    title: "Transformable Hybrid UAV-UGV System",
    subtitle: "Capstone / Final Year Project",
    outcome:
      "Built a robot that flies as a drone, then drives on the ground, to find survivors in earthquake rubble. I led the perception system — a custom AI vision model that detects people and hazards on-device at 28 FPS.",
    projectType: "Capstone — Final Year Project",
    role: "Perception & Systems Integration Lead",
    teamSize: "Team of 3",
    duration: "Aug 2025 – Apr 2026",
    contributions: [
      "Trained and deployed a custom object-detection model (Roboflow + TensorRT) reaching 28 FPS on an embedded NVIDIA Jetson",
      "Architected the ROS2 mission state machine governing UAV↔UGV mode transitions and goal-directed navigation",
      "Integrated multi-sensor fusion (camera, IMU, proximity) into a unified 3D occupancy map for hazard localisation",
      "Validated detection reliability to 8 m range through staged rubble field trials",
    ],
    gallery: [
      { caption: "Platform in UAV (aerial) configuration during flight test" },
      { caption: "Ground (UGV) mode traversing simulated rubble" },
      { caption: "Live object-detection overlay identifying a survivor target" },
    ],
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
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2025 – 2026",
  },
  {
    slug: "bipedal-humanoid-leg",
    title: "Bipedal Humanoid Robot Leg",
    subtitle: "General Magic (Thailand) Co., Ltd",
    outcome:
      "Designed the complete electrical and firmware system for a 12-joint humanoid robot leg at a robotics company. All 12 motors talk over one CAN Bus network with sub-millisecond latency, and the same control code runs in both simulation and on real hardware.",
    projectType: "Industry — Joint Academic-Industry Initiative",
    role: "Electrical & Firmware Engineer",
    teamSize: "Team of 4",
    duration: "Jun 2025 – Mar 2026",
    contributions: [
      "Designed 3 custom PCBs in KiCAD — power distribution (48 V→5/3.3 V), CAN hub, and sensor aggregation boards",
      "Implemented STM32 firmware running 1 kHz torque/position control loops per joint",
      "Built the SocketCAN communication layer carrying all 12 joints on a single 1 Mbps ISO CAN bus with heartbeat fault detection",
      "Enabled sim-to-real transfer by matching the Isaac Sim URDF to real Cubemars actuator dynamics via the ROS2 Control hardware interface",
    ],
    heroImage: "/projects/bipedal/hero.jpg",
    gallery: [
      { src: "/projects/bipedal/real/img49.jpg", caption: "The complete 12-DOF leg assembly suspended on the test rig" },
      { src: "/projects/bipedal/real/img41.jpg", caption: "Custom distribution board routing power and CAN signals from the hip to each joint" },
      { src: "/projects/bipedal/real/img97.jpg", caption: "Top mounting plate housing the IMU and the joint wiring harness" },
      { src: "/projects/bipedal/real/img40.jpg", caption: "Cable-management routing through the hip actuators" },
      { src: "/projects/bipedal/real/img63.jpg", caption: "Emergency-stop control box wired to the leg for safe bring-up testing" },
      { src: "/projects/bipedal/real/img104.jpg", caption: "Team bring-up and calibration during a test session" },
      { src: "/projects/bipedal/sim/img151.jpg", caption: "CAD front view of the leg structure with the hip actuator mounts" },
      { src: "/projects/bipedal/sim/img182.jpg", caption: "CAD isometric view showing the full leg, knee joint, and actuator porting" },
      { src: "/projects/bipedal/sim/img164.jpg", caption: "Sim-to-real validation environment in NVIDIA Isaac Sim" },
      { src: "/projects/bipedal/sim/img143.jpg", caption: "Parallel reinforcement-learning rollouts training locomotion in Isaac Sim" },
    ],
    shortDescription:
      "Full electrical system design for a 12-DOF humanoid robot leg using CAN Bus, SocketCAN, ROS2 Control, and custom STM32 firmware, with sim-to-real validation in NVIDIA Isaac Sim.",
    fullDescription:
      "Developed as part of a joint academic-industry initiative at General Magic Thailand, this project involved designing the complete electrical and firmware architecture for one leg of a bipedal humanoid robot. The leg contains 12 actuator joints driven by Cubemars series brushless motors, all communicating over a 1 Mbps ISO CAN Bus using the SocketCAN Linux interface. Custom PCBs handle power distribution, motor driver interfacing, and sensor aggregation, while STM32 microcontrollers execute low-level torque and position control loops at 1 kHz. The high-level control is managed by ROS2 Control with a hardware abstraction layer that enables seamless transition between simulation in NVIDIA Isaac Sim and real hardware.",
    technicalDetails: [
      {
        heading: "CAN Bus Communication",
        body: "All 12 joints communicate over a single 1 Mbps ISO CAN Bus network using the SocketCAN kernel module on a Linux-based host SBC. Custom CAN frames were designed for position, velocity, and torque commands with sub-millisecond round-trip latency. A heartbeat monitoring system detects and flags joint dropout in real time.",
        images: [
          { src: "/projects/pcbs/canbus_pcb.png", caption: "2D PCB layout of the custom CAN Bus communication board designed in KiCAD, showing trace routing for 6 motor driver channels." },
          { src: "/projects/pcbs/canbus_3d.png",  caption: "3D render of the CAN Bus PCB with motor driver ICs, bulk capacitors, and XT30 power connector populated." },
          { src: "/projects/pcbs/canbus_real.jpg", caption: "Two fabricated and assembled CAN Bus boards side-by-side — left leg and right leg units ready for integration." },
        ],
      },
      {
        heading: "Power Distribution Board (PDB)",
        body: "Three custom PCBs were designed in KiCAD: a power distribution board (PDB) managing 48 V to 5/3.3 V conversion, a CAN hub board with daisy-chained transceivers, and a sensor aggregation board consolidating encoder and IMU data. Thermal analysis was performed in LTSpice to validate power stage designs under peak load conditions.",
        images: [
          { src: "/projects/pcbs/pwd_pcb.png",  caption: "2D KiCAD layout of the PDB showing 6 regulated output channels, buck converter circuits, and high-current power input pads." },
          { src: "/projects/pcbs/pwd_3d.png",   caption: "3D render of the assembled PDB with bulk electrolytic capacitors, 6-channel screw terminal outputs, and XT60 main power connectors." },
          { src: "/projects/pcbs/pwd_real.jpg", caption: "Fabricated and assembled PDB on the bench, with four large bulk capacitors and screw terminals wired to the motor driver rails." },
        ],
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
    outcome:
      "Built an outdoor robot that drives itself around a garden collecting leaves — no GPS. I designed the custom PCB that bridges the high-level ROS computer to the low-level motor controller, and the Kalman Filter that keeps it on course over bumpy terrain.",
    projectType: "Coursework — Mobile Robotics",
    role: "Hardware & Control",
    teamSize: "Team of 3",
    duration: "2023",
    contributions: [
      "Designed the full mechanical system in SOLIDWORKS — Mars rover-inspired rocker-bogie suspension, Ackermann front steering linkage, centrifugal blower assembly, and aluminium extrusion chassis",
      "Built the high-level AI processing pipeline: WebSocket server offloading SAM-style segmentation to a remote AI server, point-prompt grid generation, mask-to-direction command conversion, and ROS1 integration on Raspberry Pi",
      "Implemented an Extended Kalman Filter in C++ fusing wheel encoder odometry with a 6-axis IMU for drift-free pose estimation on uneven terrain",
    ],
    gallery: [
      { caption: "Robot collecting leaves during an outdoor run" },
      { caption: "Custom ROS-to-MCU bridge PCB" },
      { caption: "EKF localisation vs raw odometry trajectory plot" },
    ],
    shortDescription:
      "Outdoor autonomous robot with Ackermann steering, custom ROS1-to-ATMega328P bridging PCB, Extended Kalman Filter, and dead reckoning for reliable navigation in unstructured garden environments.",
    fullDescription:
      "Designed as a practical application of mobile robotics principles, this outdoor robot autonomously collects fallen leaves from garden surfaces. The vehicle adopts an Ackermann steering geometry suited for smooth outdoor terrain. A custom-designed PCB acts as the hardware bridge between a high-level ROS1 Noetic stack running on a Raspberry Pi and the low-level ATMega328P microcontroller responsible for motor driver PWM, encoder reading, and servo actuation. An Extended Kalman Filter fuses wheel odometry with IMU measurements for reliable pose estimation without GPS. A reactive obstacle avoidance layer built on ultrasonic sensor feedback prevents collisions with garden furniture and irregular terrain features.",
    technicalDetails: [
      {
        heading: "Mechanical Design",
        body: "The robot chassis is built on an aluminium extrusion frame with a transparent acrylic collection box mounted centrally. The front sensor panel integrates a webcam at the top, twin ultrasonic sensors flanking the sides for obstacle detection, and a large circular intake opening connected to the curved inlet pipe. The leaf-collection mechanism uses a centrifugal blower: a DC motor drives an impeller inside a scroll casing that generates the suction airflow drawing leaves up through the intake pipe and into the collection box. An Ackermann steering linkage mounted underneath the chassis drives the front wheels via a servo, providing smooth turning geometry for outdoor terrain. The side elevation shows the complete integration of blower motor, collection box, intake pipe, and steering assembly on the extruded aluminium base frame.",
        images: [
          { src: "/projects/leaf_collection/mec_1.jpg", caption: "Front sensor panel showing the webcam, dual ultrasonic sensors, and the circular intake opening with inlet pipe." },
          { src: "/projects/leaf_collection/mec_2.jpg", caption: "Exploded blower assembly: centrifugal impeller (left), scroll volute casing (centre), and DC drive motor (right)." },
          { src: "/projects/leaf_collection/mec_3.jpg", caption: "Side elevation of the full robot showing the Ackermann steering linkage, blower unit, collection box, and curved intake pipe on the aluminium extrusion frame." },
        ],
      },
      {
        heading: "MARS Rover-Inspired Mechanisms",
        body: "The drivetrain draws from NASA Mars rover engineering, combining two classical mechanisms for reliable outdoor traversal. The Ackermann steering geometry governs the front wheel angles: during a turn, the inner wheel steers at a greater angle (θ_in) than the outer wheel (θ_out) so both front wheels trace concentric arcs around a common turning centre at radius R, eliminating tyre scrubbing on grass and uneven garden surfaces. The turning radius and individual wheel velocities (V_in, V_out) are derived analytically from the commanded steering angle θ and wheelbase geometry. The suspension adopts a passive rocker-bogie linkage: the rocker arm pivots about the chassis centre, coupling the front and rear wheel pods so that when one wheel rises over an obstacle — a garden step, root, or soil ridge — the opposing arm descends, keeping all wheels in ground contact without any actuator. The six-wheel layout (two servo-steered front, two mid-driven, two rear-driven) distributes weight evenly across terrain. The rocker-bogie arms are 3D-printed in PLA for rapid iteration and mounted to an aluminium extrusion base frame.",
        images: [
          { src: "/projects/leaf_collection/acker_1.jpg", caption: "Ackermann geometry diagram: inner/outer wheel angles θ_in and θ_out, turning radii R_in and R_out, and velocities V_in and V_out about the shared turning centre." },
          { src: "/projects/leaf_collection/acker_2.jpg", caption: "Ackermann steering geometry overlaid on the rover CAD — differential front wheel angles α1 and α2 define turning radius R from the instantaneous centre of rotation." },
          { src: "/projects/leaf_collection/rocker_0.jpg", caption: "Rocker-bogie concept: passive linkage keeps all wheels in contact across grass, soil, and raised step obstacles without active actuators." },
          { src: "/projects/leaf_collection/rocker_1.jpg", caption: "SOLIDWORKS CAD of the full 6-wheel rocker-bogie chassis with aluminium extrusion frame and Ackermann front steering linkage." },
          { src: "/projects/leaf_collection/rocker_2.jpg", caption: "Assembled chassis with 3D-printed white rocker-bogie arms, servo-actuated Ackermann steering, and rubber-tyred wheels ready for outdoor trials." },
        ],
      },
      {
        heading: "High Level Processing",
        body: "The high-level processing pipeline runs on a Raspberry Pi and offloads the heavy computer vision workload to a remote AI server over WebSocket. The onboard camera streams frames to the server, which runs a universal segmentation model (SAM-style architecture): an image encoder converts the frame into dense embeddings, a prompt encoder accepts a structured grid of point prompts, and a lightweight mask decoder combines both to produce a binary segmentation mask and a per-pixel probability map. The point-prompt grid uniformly samples the camera image to identify navigable ground versus obstacles. The resulting mask is thresholded to extract a drive direction command which is transmitted back to the robot via WebSocket. In parallel, three ultrasonic sensors mounted on the robot chassis provide close-range obstacle detection and human proximity alerts, allowing the robot to stop or re-route independently of the AI server.",
        images: [
          { src: "/projects/leaf_collection/hi_lvl_sys.jpg",  caption: "High-level system overview: the AI server and robot exchange camera frames and drive direction commands over a WebSocket connection; ultrasonic sensors handle local obstacle and person detection." },
          { src: "/projects/leaf_collection/seg_model.jpg",   caption: "Universal segmentation model architecture — image encoder produces embeddings fused with point/box/mask prompt inputs; a lightweight mask decoder outputs valid masks with confidence scores." },
          { src: "/projects/leaf_collection/cv1.jpg",         caption: "Uniform point-prompt sampling grid overlaid on a garden scene — the blue dot array feeds foreground/background cues into the prompt encoder for ground segmentation." },
          { src: "/projects/leaf_collection/cv2.jpg",         caption: "Segmentation pipeline output: original camera frame (left), binary ground mask (centre), and per-pixel probability map (right) used to compute the drive direction command." },
        ],
      },
    ],
    tags: ["ROS1 Noetic", "EKF", "Ackermann Steering", "PCB Design", "ATMega328P", "Odometry", "KiCAD", "C++"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2023",
    heroImage: "/projects/leaf_collection/hero_composite.jpg",
    teamImage: "/projects/leaf_collection/teams.png",
  },
  {
    slug: "unitree-a1-ddpg",
    title: "Unitree A1 Robot Dog — Sim-to-Real",
    subtitle: "DDPG Reinforcement Learning",
    outcome:
      "Taught a four-legged robot to walk using reinforcement learning — entirely in simulation — then transferred the learned policy onto the real Unitree A1, where it produced a stable trotting gait.",
    projectType: "Coursework — Reinforcement Learning",
    role: "Solo project",
    teamSize: "Solo",
    duration: "2024",
    contributions: [
      "Implemented a DDPG actor-critic agent in PyTorch outputting 12-DOF joint torques",
      "Shaped a multi-term reward (velocity tracking, torque, stability, foot-slip) with curriculum learning over terrain roughness",
      "Applied domain randomisation to bridge the reality gap and deployed the policy on the A1's onboard compute",
    ],
    gallery: [
      { caption: "Training rollouts in NVIDIA Isaac Sim" },
      { caption: "Reward curve across 2M training steps" },
      { caption: "Policy running on the physical Unitree A1" },
    ],
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
    outcome:
      "Built a large (1.2 m) Mecanum-wheel robot that can move in any direction and maps big indoor spaces autonomously, achieving centimetre-level positioning across 200 m+ runs.",
    projectType: "Coursework — Mobile Robots",
    role: "Software & Kinematics",
    teamSize: "Team of 4",
    duration: "2024",
    contributions: [
      "Derived and coded the holonomic Mecanum kinematics from scratch in C++",
      "Built the ROS offline SLAM pipeline (2D LiDAR + Gmapping) with ICP loop-closure to remove drift",
      "Integrated odometry, scan-matching, and navigation into a coordinated multi-node ROS system",
    ],
    gallery: [
      { src: "/projects/slam_bot/cad_front_height.jpg",    caption: "Front elevation CAD view annotating the ~460 mm total robot height across the three-tier aluminium frame." },
      { src: "/projects/slam_bot/cad_front_footprint.jpg", caption: "Front elevation with base footprint dimensions — 230 mm between wheel centres and 20 mm ground clearance." },
      { src: "/projects/slam_bot/cad_top_diameter.jpg",    caption: "Top-down CAD plan showing the 430 mm circular chassis diameter and symmetric Mecanum wheel positions." },
      { src: "/projects/slam_bot/rviz_tf_frames.jpg",      caption: "RViz visualisation of all robot TF frames: base_link, four wheel links, base_scan LiDAR frame, and aruco_camera_link." },
      { src: "/projects/slam_bot/ros_tf_tree.jpg",         caption: "rqt TF tree showing the full transform hierarchy — base_footprint → base_link → wheel links, base_scan, and aruco_camera_link." },
      { src: "/projects/slam_bot/rviz_lidar_scan.jpg",     caption: "Live LiDAR scan data visualised in RViz as red point cloud during a mapping session in the test hall." },
      { src: "/projects/slam_bot/rviz_aruco_1.png",        caption: "RViz ArUco marker detection — camera feed (left) and 3D pose estimate of fiducial_102 overlaid in the world frame (right)." },
      { src: "/projects/slam_bot/rviz_aruco_2.png",        caption: "ArUco detection from a shifted viewing angle, confirming stable 6-DoF pose estimation across different orientations." },
      { src: "/projects/slam_bot/tf_frames_diagram.jpg",   caption: "ROS TF frame convention — parent/child/joint frame relationships used to define the robot's kinematic tree." },
    ],
    shortDescription:
      "Large-scale omnidirectional platform using Mecanum wheels with offline SLAM for autonomous indoor mapping and navigation in complex warehouse-scale environments.",
    fullDescription:
      "This project involved designing and building a large-format (1.2 m × 0.8 m) omnidirectional mobile robot equipped with Mecanum wheels for holonomic motion. The robot was developed for indoor mapping tasks in large open spaces such as warehouses and laboratory halls. An offline SLAM pipeline using ROS and a 2D LiDAR sensor generates high-fidelity occupancy grid maps that are subsequently used for autonomous navigation. The omnidirectional kinematics model was implemented from scratch in C++, with separate ROS nodes managing wheel odometry, LiDAR scan matching, and the navigation stack. The platform demonstrated centimetre-level positioning accuracy across repeated mapping sessions.",
    technicalDetails: [
      {
        heading: "Omnidirectional Kinematics",
        body: "The kinematics model computes individual wheel velocities for all four Mecanum wheels given commanded translational and rotational velocities. The forward kinematics inverts the Jacobian to estimate robot velocity from encoder readings, which feeds directly into the odometry node for dead reckoning between SLAM updates.",
        subSections: [
          {
            heading: "Inverse Kinematics",
            body: "Inverse kinematics maps a commanded body velocity to individual wheel speed commands. Define the body velocity vector V = [vx, vy, ω]ᵀ, where vx and vy are the goal linear velocities along the x and y axes and ω is the goal angular velocity. The wheel speed command vector W = [w_FL, w_FR, w_RL, w_RR]ᵀ represents the four wheels (Front Left, Front Right, Rear Left, Rear Right), and R is the robot radius. Each wheel is mounted at a 45° roller angle at positions 45°, 315°, 135°, and 225° around the chassis. The relationship is:",
            equations: [
              "\\mathbf{W} = \\mathbf{A}\\,\\mathbf{V}",
              "\\mathbf{A} = \\begin{bmatrix} \\sin(45^{\\circ}) & -\\cos(45^{\\circ}) & -R \\\\ \\sin(315^{\\circ}) & -\\cos(315^{\\circ}) & -R \\\\ \\sin(135^{\\circ}) & -\\cos(135^{\\circ}) & -R \\\\ \\sin(225^{\\circ}) & -\\cos(225^{\\circ}) & -R \\end{bmatrix}",
              "\\mathbf{A} = \\begin{bmatrix} \\dfrac{1}{\\sqrt{2}} & -\\dfrac{1}{\\sqrt{2}} & -R \\\\[6pt] -\\dfrac{1}{\\sqrt{2}} & -\\dfrac{1}{\\sqrt{2}} & -R \\\\[6pt] \\dfrac{1}{\\sqrt{2}} & \\dfrac{1}{\\sqrt{2}} & -R \\\\[6pt] -\\dfrac{1}{\\sqrt{2}} & \\dfrac{1}{\\sqrt{2}} & -R \\end{bmatrix}",
              "\\begin{bmatrix} w_{FL} \\\\ w_{FR} \\\\ w_{RL} \\\\ w_{RR} \\end{bmatrix} = \\begin{bmatrix} \\dfrac{1}{\\sqrt{2}} & -\\dfrac{1}{\\sqrt{2}} & -R \\\\[6pt] -\\dfrac{1}{\\sqrt{2}} & -\\dfrac{1}{\\sqrt{2}} & -R \\\\[6pt] \\dfrac{1}{\\sqrt{2}} & \\dfrac{1}{\\sqrt{2}} & -R \\\\[6pt] -\\dfrac{1}{\\sqrt{2}} & \\dfrac{1}{\\sqrt{2}} & -R \\end{bmatrix} \\begin{bmatrix} v_x \\\\ v_y \\\\ \\omega \\end{bmatrix}",
            ],
          },
          {
            heading: "Forward Kinematics",
            body: "Forward kinematics recovers the estimated body velocity from measured wheel encoder speeds. Starting from W = AV, the body velocity is found by applying the left pseudoinverse A⁺ = (AᵀA)⁻¹Aᵀ, since A is a 4×3 over-determined matrix. Because the wheel placement is symmetric, AᵀA is diagonal:",
            equations: [
              "\\mathbf{A}^T\\mathbf{A} = \\operatorname{diag}\\!\\left(2,\\; 2,\\; 4R^2\\right)",
              "\\mathbf{A}^{+} = \\left(\\mathbf{A}^T\\mathbf{A}\\right)^{-1}\\mathbf{A}^T = \\operatorname{diag}\\!\\left(\\tfrac{1}{2},\\; \\tfrac{1}{2},\\; \\tfrac{1}{4R^2}\\right)\\mathbf{A}^T",
              "\\mathbf{V} = \\mathbf{A}^{+}\\mathbf{W}",
              "\\begin{bmatrix} v_x \\\\ v_y \\\\ \\omega \\end{bmatrix} = \\begin{bmatrix} \\dfrac{1}{2\\sqrt{2}} & -\\dfrac{1}{2\\sqrt{2}} & \\dfrac{1}{2\\sqrt{2}} & -\\dfrac{1}{2\\sqrt{2}} \\\\[6pt] -\\dfrac{1}{2\\sqrt{2}} & -\\dfrac{1}{2\\sqrt{2}} & \\dfrac{1}{2\\sqrt{2}} & \\dfrac{1}{2\\sqrt{2}} \\\\[6pt] -\\dfrac{1}{4R} & -\\dfrac{1}{4R} & -\\dfrac{1}{4R} & -\\dfrac{1}{4R} \\end{bmatrix} \\begin{bmatrix} w_{FL} \\\\ w_{FR} \\\\ w_{RL} \\\\ w_{RR} \\end{bmatrix}",
            ],
          },
        ],
        images: [
          { src: "/projects/slam_bot/3d_1.jpg", caption: "Isometric CAD view of the 3-tier circular chassis with four Mecanum wheels mounted at 90° intervals around the base." },
          { src: "/projects/slam_bot/3d_2.jpg", caption: "Front elevation showing the LiDAR sensor on the mid-tier, motor controllers, and the dual Mecanum wheel assemblies." },
          { src: "/projects/slam_bot/3d_3.jpg", caption: "Top-down plan view of the 1.2 m circular platform illustrating the symmetric Mecanum wheel placement." },
        ],
      },
      {
        heading: "Offline SLAM Pipeline",
        body: "The map-building system follows a five-stage offline SLAM pipeline. (1) Sensor Data Collection — the robot explores the unknown environment and continuously collects LiDAR scans and odometry readings while in motion. (2) Localization (Estimate Pose) — the robot's position and orientation are estimated in real time using scan-matching against the growing map. (3) Mapping (Build Map) — the environment map is constructed incrementally by fusing sensor observations with the estimated poses. (4) Data Association & Optimization — observations are associated with existing map features and a pose-graph optimisation step reduces accumulated drift and corrects errors across the full trajectory. (5) Map Output (Offline) — once the session is complete, a final 2D occupancy grid map is generated and saved as a .pgm + .yaml pair ready for autonomous localisation and navigation.",
        images: [
          { src: "/projects/slam_bot/system.png", caption: "Offline SLAM system diagram: five-stage pipeline from sensor data collection through pose-graph optimisation to the final 2D occupancy grid map output." },
        ],
      },
    ],
    tags: ["ROS", "SLAM", "Mecanum Wheels", "Omnidirectional Drive", "LiDAR", "Navigation", "C++"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: true,
    github: "https://github.com/thura-robotics",
    period: "2024",
    heroImage: "/projects/slam_bot/hero.jpg",
  },
  {
    slug: "drawing-robot",
    title: "Cartesian Drawing Robot",
    subtitle: "K-Engineering World Tour 2024 — Most Innovative Project Award",
    outcome:
      "Built a robot that turns any portrait photo into a hand-drawn pencil sketch. It won the Most Innovative Project Award at K-Engineering World Tour 2024. My vision-to-G-code pipeline cut pen-travel time by over 60%.",
    projectType: "Competition — Award Winner",
    role: "Vision Pipeline & Software",
    teamSize: "Team of 4",
    duration: "2023",
    contributions: [
      "Built the OpenCV pipeline (edge detection, tone mapping, contour extraction) converting photos into stroke sets",
      "Designed a custom DFS path optimiser that reduced total pen-up travel by 60% vs naive ordering",
      "Generated GRBL-compatible G-code toolpaths driving the XY Cartesian motion system",
    ],
    gallery: [
      { caption: "Robot mid-drawing on the competition floor" },
      { caption: "Source photo vs robot-rendered output" },
      { caption: "Award presentation at K-Engineering World Tour 2024" },
    ],
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
    outcome:
      "Shrank a vandalism-detection neural network small enough to run directly on a microcontroller — 15 FPS inference under 250 mW, with no cloud connection needed.",
    projectType: "Coursework — Embedded ML",
    role: "Solo project",
    teamSize: "Solo",
    duration: "2023",
    contributions: [
      "Trained a MobileNet-style depthwise-separable CNN on a self-collected, annotated dataset",
      "Quantised the model to INT8 (TensorFlow Lite), shrinking it 2.1 MB → 540 KB with <2% accuracy loss",
      "Deployed to an ARM Cortex-M4 with CMSIS-NN acceleration and an interrupt-driven capture pipeline",
    ],
    gallery: [
      { caption: "Microcontroller running live on-device inference" },
      { caption: "Model size / accuracy before vs after quantisation" },
    ],
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
    subtitle: "Arduino · CNC Shield · Bluetooth · MIT App Inventor",
    outcome:
      "Built a 3-axis 3-DOF robot arm controlled wirelessly via a custom Android app — Arduino UNO with CNC shield drives three stepper motors and a gripper stepper over Bluetooth HC-05, executing pre-programmed pick-and-place operations on command.",
    projectType: "Coursework — Kinematics & Dynamics",
    role: "Solo project",
    teamSize: "Solo",
    duration: "2023",
    contributions: [
      "Designed and assembled the 3-DOF arm with three NEMA stepper motors driven by an Arduino UNO + CNC shield stack",
      "Wired and integrated the HC-05 Bluetooth module for wireless serial communication between the Arduino and Android app",
      "Built a custom Android application in MIT App Inventor with pre-programmed PICK, GRAB, PLACE, and RELEASE routines transmitted as Bluetooth commands",
      "Derived forward and inverse kinematics for the 3-axis configuration and implemented the joint-angle solver in Arduino C++ to map workspace coordinates to motor steps",
    ],
    gallery: [
      { src: "/projects/kira/app_demo.png",         caption: "Full system demo — robot arm on the pick-and-place mat with red and pink cubes, mobile app (left) and desktop GUI (right) showing PICK / GRAB / PLACE / RELEASE commands." },
      { src: "/projects/kira/workspace_diagram.png", caption: "Workspace setup diagram — cube positions (pink at y=13 cm, red at y=19 cm), gripper-to-end-effector 5 cm offset annotation, and 2 cm cube reference." },
      { src: "/projects/kira/joint_3dof_pose.png",  caption: "Three-joint configuration showing shoulder at 95°, elbow at −40°, and base at 90° — verifying the inverse kinematics solver output." },
      { src: "/projects/kira/pick_pose.png",         caption: "Arm reaching toward the red cube with base at 90° and shoulder at 85° — pre-grasp approach pose." },
      { src: "/projects/kira/joint_95_neg40.png",   caption: "Two-joint pose validation: shoulder 95° and elbow −40°, used to verify joint-space trajectory interpolation." },
      { src: "/projects/kira/joint_85deg.png",       caption: "Single-joint calibration check at 85° confirming encoder feedback accuracy and zero-offset calibration." },
    ],
    shortDescription:
      "3-axis 3-DOF robot arm with Arduino UNO + CNC shield, three stepper motors, HC-05 Bluetooth, and a custom MIT App Inventor Android app for wireless pick-and-place control.",
    fullDescription:
      "K.I.R.A (Kinematics Integrated Robot Arm) is a 3-axis, 3-DOF serial robot arm built as a kinematics coursework project. The mechanical structure is driven by three NEMA stepper motors controlled by an Arduino UNO paired with a CNC shield — a compact stacked solution that provides three independent stepper driver channels. A fourth small stepper motor at the end effector actuates the gripper for pick-and-place tasks. Wireless control is achieved through an HC-05 Bluetooth module connected to the Arduino UART, paired with a custom Android application built in MIT App Inventor. The app presents PICK, GRAB, PLACE, and RELEASE buttons that transmit single-character Bluetooth commands triggering pre-programmed joint-angle sequences on the Arduino. The inverse kinematics solver maps target workspace coordinates to the required joint angles, which are then converted to motor step counts for each axis.",
    technicalDetails: [
      {
        heading: "Hardware Stack",
        body: "The controller stack consists of an Arduino UNO as the main processor with a CNC shield mounted on top, providing three A4988 stepper driver slots for the base rotation, shoulder, and elbow joints. Each NEMA stepper is wired to its corresponding driver channel. A fourth smaller stepper motor is mounted at the end effector to open and close the gripper. Power is supplied to the CNC shield via a dedicated 12 V rail, keeping the stepper current paths separate from the Arduino 5 V logic supply.",
        images: [
          { src: "/projects/kira/circuit.png", caption: "Circuit diagram — Arduino UNO + CNC shield wired to three NEMA steppers (Y-Base, X-Lower Shank, Z-Upper Shank), HC-05 Bluetooth module, and the gripper stepper with dedicated driver." },
        ],
      },
      {
        heading: "Bluetooth Control & Android App",
        body: "An HC-05 Bluetooth module is connected to the Arduino hardware serial (TX/RX) pins and paired with an Android device. The custom MIT App Inventor application presents a clean control panel with PICK (red / pink cube selection), GRAB, PLACE (red / pink target), and RELEASE buttons. Each button transmits a single-character command over Bluetooth serial. The Arduino firmware parses the incoming byte and executes the corresponding pre-programmed joint-angle sequence by stepping each motor to its target position in a coordinated move.",
        images: [
          { src: "/projects/kira/app_demo.png", caption: "Live demo — robot arm on the pick-and-place mat, custom MIT App Inventor Android app (left) and desktop control panel (right) showing PICK / GRAB / PLACE / RELEASE commands over Bluetooth." },
        ],
      },
      {
        heading: "Robot Parameters (Denavit–Hartenberg)",
        body: "The DH convention is used to systematically assign coordinate frames to each link of the 3-DOF arm and derive the transformation matrices between consecutive joints. Link 1 (base to shoulder) has a length of 13 cm, while Links 2 and 3 (upper and lower shank) are each 12 cm. The resulting DH parameter table is: Joint 1 — θ=θ₁, d=13 cm, α=−90°, a=0; Joint 2 — θ=θ₂−90°, d=0, α=0°, a=12 cm; Joint 3 — θ=θ₃+90°, d=0, α=0°, a=12 cm. The joint angle offsets (−90° on Joint 2, +90° on Joint 3) account for the physical home configuration of the arm.",
        images: [
          { src: "/projects/kira/DH.jpg", caption: "DH parameter derivation for the 3-DOF arm — frame assignment diagram (left) and the complete θ / d / α / a parameter table for all three joints (right)." },
        ],
      },
      {
        heading: "Kinematics & Joint Control",
        body: "Forward kinematics for the 3-DOF configuration maps joint angles (base θ₁, shoulder θ₂, elbow θ₃) to the end-effector position using the Denavit-Hartenberg convention. The inverse kinematics solver uses geometric decomposition — the elbow position is found from the target x-y-z coordinates, and each joint angle is derived analytically. Joint angles are converted to motor step counts using the stepper resolution and gear ratio, and the Arduino drives each axis with step/direction signals to the CNC shield drivers.",
      },
    ],
    tags: ["Arduino", "CNC Shield", "Stepper Motor", "Bluetooth HC-05", "MIT App Inventor", "Kinematics", "Embedded C++", "Robot Arm"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2023",
    heroImage: "/projects/kira/hero.png",
  },
  {
    slug: "attention-robot",
    title: "Attention Robot Prototype",
    subtitle: "NIT Sendai, Japan — Research Internship",
    outcome:
      "During a research internship in Japan, built an expressive safety robot that warns lab technicians of hazards — turning to face them with servo gestures, OLED facial expressions, and audio, all within 100 ms of a trigger.",
    projectType: "Internship — Research (NIT Sendai, Japan)",
    role: "Solo prototype build",
    teamSize: "Solo (mentored)",
    duration: "May – Jun 2025",
    contributions: [
      "Wrote bare-metal C++ on Arduino Mega with a state-machine architecture (IDLE/TRACKING/ALERT/RESET)",
      "Integrated PIR, temperature, and ultrasonic sensors into filtered hazard-detection logic",
      "Drove servo gestures and a 128×64 OLED face via a custom I2C bitmap rendering routine",
    ],
    gallery: [
      { caption: "Attention robot prototype on the bench" },
      { caption: "OLED expression + servo alert sequence" },
    ],
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
    subtitle: "KMITL Line Following Competition — 2nd Prize",
    outcome:
      "Designed a competition line-following robot from scratch — custom PCB, STM32 firmware, and a tightly tuned PID loop — that placed 2nd at the KMITL Line Following Competition.",
    projectType: "Competition — 2nd Prize",
    role: "Full design (PCB, firmware, control)",
    teamSize: "Team of 2",
    duration: "2022 – 2023",
    contributions: [
      "Designed the 2-layer KiCAD PCB that doubles as the robot chassis — routing STM32F411RE, DRV8833 motor driver, 8-channel IR sensor array, LEDs, and power management within the 230×230 mm size limit",
      "Implemented sensor normalisation in C — calibration, range mapping, and weighted-centroid position estimation from 8 phototransistor readings",
      "Tuned the PID feedback loop (Kp, Ki, Kd) iteratively on the competition track profile for oscillation-free high-speed cornering",
    ],
    gallery: [
      { src: "/projects/hi_speed_lfr/hero.jpg",    caption: "Finished and wired robot — LiPo battery mounted, STM32F411RE Nucleo seated, and both drive wheels fitted." },
      { src: "/projects/hi_speed_lfr/assem_1.jpg", caption: "Mid-assembly on the workbench — STM32 Nucleo mounted, signal wiring in progress, multimeter ready for continuity checks." },
      { src: "/projects/hi_speed_lfr/pcb_3d.png",  caption: "3D isometric render of the complete robot showing the PCB-as-chassis form factor, IR sensor arm, and both rubber drive wheels." },
    ],
    shortDescription:
      "Competition-grade line follower with a custom STM32F411RE PCB chassis, 8-channel TOPS-030TB2 IR sensor array, DRV8833 motor driver, and a finely tuned PID control loop.",
    fullDescription:
      "Built for the KMITL Line Following Competition as a Microprocessor and Interface course final project, this robot was designed around maximum speed and reliable tracking. A custom 2-layer PCB doubles as the robot chassis, integrating the STM32F411RE microcontroller, a DRV8833 dual H-bridge motor driver, 8 TOPS-030TB2 phototransistor IR sensors spaced 10 mm apart at equal radius from the motor midpoint, and 8 TOIR-30A94CXAA LEDs positioned directly in front of the sensors. The entire assembly fits within the 230×230 mm competition size limit. The PID control loop continuously computes a steering correction from the weighted centroid of active IR sensors and drives the two DC motors accordingly. The robot placed 2nd at the KMITL Line Following Competition.",
    technicalDetails: [
      {
        heading: "PCB Design & Firmware",
        body: "The 2-layer PCB was designed in KiCAD to serve simultaneously as the robot's structural chassis — eliminating a separate frame and minimising weight for better mobility. The STM32F411RE microcontroller acts as the central processing unit. Eight TOPS-030TB2 phototransistor sensors are spaced 10 mm apart, all at equal radius from the midpoint between the two DC motors, ensuring symmetric line detection. Eight TOIR-30A94CXAA LEDs are placed directly in front of their paired sensors so that infrared light bounces cleanly back from the track surface. Motor drive is handled by a single DRV8833 dual H-bridge IC. Two push buttons, three 0402 RGB status LEDs, and a protection diode complete the circuit. After soldering, every net was verified with a multimeter before first power-on.",
        images: [
          { src: "/projects/hi_speed_lfr/pcb_2d.png",  caption: "KiCAD 2D PCB layout — front copper layer showing sensor array routing and motor driver placement." },
          { src: "/projects/hi_speed_lfr/pcb_3d_1.png", caption: "3D front view of the assembled PCB — sensor array at the top, STM32F411RE Nucleo and DRV8833 at the base." },
        ],
        imageColumns: 1,
        subSections: [
          {
            heading: "Firmware Integration",
            body: "All peripheral pins were configured using STM32CubeMX, which auto-generates the HAL initialisation code for the STM32F411RETx LQFP64. Timer channels TIM2 and TIM3 are mapped to the DRV8833 PWM inputs for left and right motor speed control. Three ADC channels read the IR sensor voltages, and UART2 is used for serial debug output. GPIO outputs drive the RGB status LEDs and read the two push-button inputs. The generated .ioc project ensures pin assignments are conflict-free and the clock tree is configured for maximum 100 MHz system clock.",
            images: [
              { src: "/projects/hi_speed_lfr/cubemx.png", caption: "STM32CubeMX pinout configuration for the STM32F411RETx LQFP64 — timer PWM, ADC, UART, and GPIO assignments for the line follower firmware." },
            ],
          },
        ],
      },
      {
        heading: "Sensor Normalisation",
        body: "Raw phototransistor readings vary with ambient lighting and individual component tolerances, so a three-step normalisation pipeline is applied at startup. First, calibration establishes each sensor's minimum and maximum response by sweeping the robot over black and white surfaces, eliminating per-sensor bias. Second, range mapping scales each reading linearly into a common 0–100 range. Third, the normalised array is used to compute a weighted centroid — the signed error value fed into the PID controller — ensuring consistent position estimates regardless of environmental light changes.",
      },
      {
        heading: "PID Control",
        body: "A closed-loop PID feedback controller running on the STM32F411RE continuously adjusts motor speeds to keep the robot centred on the 19 mm line. The proportional term responds to the current lateral offset, the integral term corrects accumulated steady-state drift, and the derivative term damps oscillation by reacting to the rate of error change. Kp, Ki, and Kd were tuned iteratively by running the robot on both Track A (1:30 min limit) and Track B (2:30 min limit) and observing overshoot and cornering stability, converging on gains that deliver smooth high-speed tracking.",
        equations: [
          "u(t) = K_p\\, e(t) \\;+\\; K_i \\int_0^{t} e(\\tau)\\, d\\tau \\;+\\; K_d\\, \\frac{d\\, e(t)}{dt}",
        ],
      },
    ],
    tags: ["STM32F411RE", "KiCAD", "PID Control", "IR Sensors", "DRV8833", "PCB Design", "Embedded C", "Motor Control", "Competition"],
    portfolioCategory: "Robotics & Embedded",
    homepageFeatured: false,
    github: "https://github.com/thura-robotics",
    period: "2022 – 2023",
    heroImage: "/projects/hi_speed_lfr/hero_composite.jpg",
    contextImage: "/projects/hi_speed_lfr/track.jpg",
  },
];

// To link a certificate PDF:
// 1. Drop the PDF into public/certificates/ (e.g. public/certificates/altium.pdf)
// 2. Uncomment the pdf line for that entry below
// Optionally also add a preview image (jpg/png thumbnail of the certificate)
export const certifications: {
  name: string;
  issuer: string;
  year: string;
  image?: string; // optional thumbnail preview
  pdf?: string;   // path to PDF in public/certificates/
}[] = [
  {
    name: "Altium Education PCB Design Course",
    issuer: "Altium",
    year: "2024",
    pdf: "/certificates/altium.pdf",
    image: "/certificates/altium.png",
  },
  {
    name: "Introduction to Linux",
    issuer: "Linux Foundation",
    year: "2024",
    pdf: "/certificates/linux.pdf",
    image: "/certificates/linux.png",
  },
  {
    name: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    year: "2026",
    pdf: "/certificates/nvidia.pdf",
    image: "/certificates/nvidia.png",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2023",
    pdf: "/certificates/google.pdf",
    image: "/certificates/google.png",
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
    image: "/projects/hi_speed_lfr/pcb_2d.png",
  },
  {
    title: "SMPS Current Balancer",
    description:
      "Droop-based current balancing board for six parallel Switch-Mode Power Supplies using LTC4359 ideal diode controllers and high-power MOSFETs. Designed to distribute load evenly across multiple SMPS modules, prevent reverse-current flow, and protect against supply failure. Simulated and verified in LTSpice before fabrication.",
    tools: ["KiCad", "LTSpice", "LTC4359", "MOSFET", "Power Electronics", "SMPS"],
    viewerUrl: "https://thura-robotics.github.io/designs/ltc4359_droop.html",
    year: "2024",
    image: "/projects/pcbs/pwd_pcb.png",
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
    event: "KMITL Line Following Competition",
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
