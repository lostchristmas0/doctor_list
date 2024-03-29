const SpecialtyType = {
  1: 'Pulmonology',
  2: 'Endocrinology',
  3: 'Neurology',
  4: 'Integrative',
  5: 'Rheumatology',
  6: 'Allergy',
  7: 'Hematology',
  8: 'Neonatal Care',
  9: 'Pediatric Surgery',
  10: 'Immunotherapy',
  11: 'Orthopedics',
  12: 'Hepatology',
  13: 'Fibrosarcoma',
  14: 'Sarcomay',
  15: 'Tenosynovitis',
  16: 'Paronychia',
  17: 'Necrosis',
}

const DepartmentType = {
  1: 'Internal Medicine',
  2: 'Pediatrics',
  3: 'Urology',
  4: 'Cardiovascular',
  5: 'ENT Clinic',
  6: 'Anesthesiology',
  7: 'Pharmacy',
  8: 'Emergency',
  9: 'Surgical',
}

const DoctorData = [
  {
    id: 1,
    name: 'Darren A. Tabechian',
    department: 'Internal Medicine',
    specialty: ['Rheumatology', 'Allergy'],
    review: 4.5,
    intro: 'Dr. Tabechian is an adult rheumatologist who directs the crystalline arthritis clinic. He is currently seeing patients in the Henrietta (Red Creek Dr) and Canandaigua offices. He enjoys teaching the full spectrum of trainees (medical students, residents, fellows and colleagues). His interest in rheumatology stems from both a fascination with the spectrum of autoimmune and rheumatic conditions and the enjoyment of providing continuity of care for patients with chronic illnesses.',
    location: '400 Red Creek Dr.',
    phone: '(585) 486-0901',
  },
  {
    id: 2,
    name: 'Ralf G. Thiele',
    department: 'Internal Medicine',
    specialty: ['Allergy', 'Immunotherapy'],
    review: 4.4,
    intro: 'Dr. Thiele is currently conducting clinical research and is involved in teaching musculoskeletal ultrasound.',
    location: '400 Red Creek Dr.',
    phone: '(585) 486-0930',
  },
  {
    id: 3,
    name: 'Allen P. Anandarajah',
    department: 'Internal Medicine',
    specialty: ['Neurology', 'Pulmonology'],
    review: 4.7,
    intro: 'Dr. Anandarajah is an adult rheumatologist who directs the Early Arthritis Clinic. His area of interest is in early rheumatoid arthritis with particular emphasis on outcome measures and comorbidities. He is also interested in osteoporosis and erosive osteoarthritis of the hand.',
    location: '400 Red Creek Dr.',
    phone: '(585) 275-5157',
  },
  {
    id: 4,
    name: 'Jennifer Howitt Anolik',
    department: 'Internal Medicine',
    specialty: ['Rheumatology', 'Neonatal Care', 'Pulmonology'],
    review: 4.9,
    intro: "Dr. Anolik is an adult rheumatologist who practices in the University of Rochester's Lupus Clinic. Her research interests include the role of B cells in the pathophysiology of human systemic lupus, the study of new immuno-modulatory treatments for lupus, and B cell regulation of bone homeostasis in rheumatoid arthritis. As part of the research group at the University of Rochester she has been one of the pioneers in the use of B-cell depletion for the therapy of autoimmune diseases and investigation of the effects of B cell depletion on immune function in SLE patients. She has also pioneered the use of tonsil and bone marrow biopsy as a means of probing immune dysregulation in autoimmune diseases, including SLE and RA.",
    location: '125 Lattimore Rd.',
    phone: '(585) 486-0901',
  },
  {
    id: 5,
    name: 'Richard John Looney',
    department: 'Internal Medicine',
    specialty: ['Neonatal Care', 'Allergy', 'Pulmonology'],
    review: 4.7,
    intro: "Dr. Looney is an adult rheumatologist as well as an adult and pediatric allergist and clinical immunologist. He is also the director of the Allergy/Immunology fellowship program. Dr. Looney is interested in translational research in autoimmune disease, especially B cell depletion. He currently is conducting numerous clinical trials.",
    location: '125 Lattimore Rd.',
    phone: '(585) 486-0930',
  },
  {
    id: 6,
    name: 'Bethany A. Marston',
    department: 'Pediatrics',
    specialty: ['Pediatric Surgery', 'Allergy', 'Orthopedics'],
    review: 4.8,
    intro: "Dr. Marston is interested in care of rheumatologic disease in children and adults, in both ambulatory and inpatient settings, especially juvenile idiopathic arthritis, rheumatoid arthritis, and psoriatic arthritis. She is trained in point-of-care ultrasound for diagnosis and management of musculoskeletal conditions. She is an avid medical educator who strives improve the clinical practice options and medical education of all providers in our system who care for rheumatology patients.",
    location: '200 East River Rd.',
    phone: '(585) 486-0902',
  },
  {
    id: 7,
    name: 'Asim A. Abbasi',
    department: 'Pediatrics',
    specialty: ['Neonatal Care', 'Endocrinology'],
    review: 4.4,
    intro: "Dr. Abbasi attended undergraduate studies at Northwestern University where he completed a Bachelor of Arts degree in Evolutionary Biology. Prior to attending medical school, he worked for two years at the National Institutes of Health as a research fellow, creating a mice model system for a protein involved in the cell cycle.",
    location: '601 Elmwood Rd.',
    phone: '(585) 273-4058',
  },
  {
    id: 8,
    name: 'Rebecca L. Abell',
    department: 'Pediatrics',
    specialty: ['Hepatology', 'Neurology'],
    review: 4.5,
    intro: 'Dr. Thiele is currently conducting clinical research and is involved in teaching musculoskeletal ultrasound.',
    location: '400 Red Creek Dr.',
    phone: '(585) 486-0930',
  },
  {
    id: 9,
    name: 'Kate G. Ackerman',
    department: 'Pediatrics',
    specialty: ['Neonatal Care', 'Pediatric Surgery'],
    review: 4.2,
    intro: "Senior Vice Chair, Innovation & Integration, Pediatrics. Director of Pediatric Sedation, Golisano Children's Hospital. Chief Sedation Officer, Golisano Children's Hospital",
    location: '601 Elmwood Rd.',
    phone: '(585) 275-8138',
  },
  {
    id: 10,
    name: 'George M. Alfieris',
    department: 'Pediatrics',
    specialty: ['Neurology', 'Neonatal Care'],
    review: 4.9,
    intro: "Dr. George M. Alfieris, nationally recognized pediatric cardiac surgeon, is Director of Pediatric Cardiac Surgery at the Golisano Children's Hospital at Strong and Associate Professor of Surgery at the University of Rochester School of Medicine and Dentistry.",
    location: '601 Elmwood Rd.',
    phone: '(585) 275-2735',
  },
  {
    id: 11,
    name: 'David H. Adler',
    department: 'Emergency',
    specialty: ['Hepatology', 'Allergy', 'Orthopedics'],
    review: 4.7,
    intro: "Dr. Adler is an emergency physician, educator and researcher. He received his medical training at the University of California at San Francisco and his residency training in emergency medicine at Highland General Hospital in Oakland, California. Dr. Adler has been core faculty in the University of Rochester’s emergency medicine residency program since 2006. He is the Director of Emergency Medicine Research and also directs the SAEM-approved Emergency Medicine Research Fellowship and the International Emergency Medicine Fellowship. He also serves as Director of Medical Student International Programs.",
    location: '601 Elmwood Rd.',
    phone: '(585) 275-1249',
  },
  {
    id: 12,
    name: 'Nicholas Aloisio',
    department: 'Emergency',
    specialty: ['Hematology', 'Hepatology'],
    review: 4.3,
    intro: "Dr. Aloisio is a Board-Certified Emergency Medicine Physician and Assistant Professor of Clinical Emergency Medicine. He has served at the University of Rochester since 2011 and is currently a Fellow of the American College of Emergency Physicians.",
    location: '601 Elmwood Rd.',
    phone: '(585) 276-3000',
  },
  {
    id: 13,
    name: 'Robert S. Bennett',
    department: 'Emergency',
    specialty: ['Endocrinology', 'Allergy', 'Pulmonology'],
    review: 4.5,
    intro: "Dr Bennett is Medical Director of the Highland Hospital ED Observation Unit. He was born in Boston, but spent his formative years in Brighton, NY, returning to the Boston vicinity for his college degree at Harvard College (BA '82). He went north for medical school in Montreal at McGill University (MDCM '86), returning to the Rochester for a residency in Medicine-Pediatrics ('86-'90).",
    location: '1000 South Avenue',
    phone: '(585) 341-6880',
  },
  {
    id: 14,
    name: 'Raymond K. Chan',
    department: 'Emergency',
    specialty: ['Pediatric Surgery', 'Pulmonology', 'Orthopedics'],
    review: 4.4,
    intro: "Dr. Chan immigrated to this country from Hong Kong as a teenager in the 70's. He completed high school in New York City, and was fortunate to attend college at MA followed by medical school in NY. Residency training in pediatric and internal medicine was completed at NC and NY. Dr. Chan is married with a loving family. He enjoys music and art. Humble with life and friends. He appreciates time spent with and learns from elders. He continues to be fascinated with science and evolving technology",
    location: '601 Elmwood Ave.',
    phone: '(585) 341-6880',
  },
  {
    id: 15,
    name: 'Michelle S. Circe',
    department: 'Emergency',
    specialty: ['Endocrinology', 'Neurology'],
    review: 4.6,
    intro: "Dr. Circe was born and raised in Schenectady, NY. She graduated Magna Cum Laude from the State University at Binghamton with a degree in Biology. She moved to Rochester for medical school at the University of Rochester and Dentistry. She completed her Emergency Medicine Residency at the University of Rochester, and served as Chief Resident in her final year. In addition to loving Emergency Medicine, she has a special interest in Geriatrics within Emergency Medicine. She is a member of the American Geriatrics Society. She lives in Brighton with her family and their 3 dogs and 2 cats, all rescued locally.",
    location: '601 Elmwood Ave.',
    phone: '(585) 341-6880',
  },
  {
    id: 16,
    name: 'Jeffrey R. Andolina',
    department: 'Surgical',
    specialty: ['Integrative', 'Rheumatology', 'Pediatric Surgery', 'Fibrosarcoma'],
    review: 4.8,
    intro: "Dr. Andolina is most interested in the treatment and comprehensive care for children with leukemia and lymphoma, including acute lymphoblastic leukemia (ALL), acute myeloid leukemia (AML), and chronic myeloid leukemia (CML), as well as the care for children with other cancers and blood diseases.",
    location: '601 Elmwood Ave.',
    phone: '(585) 275-2981',
  },
  {
    id: 17,
    name: 'David N. Korones',
    department: 'Surgical',
    specialty: ['Pediatric Surgery', 'Sarcomay', 'Tenosynovitis'],
    review: 4.9,
    intro: "Dr. Korones is board certified in Pediatrics, Pediatric Hematology/Oncology, and Hospice and Palliative Medicine. He currently directs the Pediatric Brain Tumor Program and is the founder and director of the Pediatric Palliative Care Program at Golisano Children's Hospital at Strong.",
    location: '601 Elmwood Ave.',
    phone: '(585) 275-0121',
  },
  {
    id: 18,
    name: 'Craig A. Mullen',
    department: 'Surgical',
    specialty: ['Integrative', 'Paronychia', 'Necrosis'],
    review: 4.3,
    intro: "Dr. Mullen serves as the Chief of the Pediatric Hematology / Oncology Division. He is also the Director the Fellowship Program. He has joint appointments as Professor in both the Department of Microbiology and Immunology and Professor in the Department of Oncology.",
    location: '601 Elmwood Ave.',
    phone: '(585) 275-2981',
  },
  {
    id: 19,
    name: 'Jessica C. Shand',
    department: 'Surgical',
    specialty: ['Rheumatology', 'Fibrosarcoma', 'Necrosis'],
    review: 4.5,
    intro: "My clinical interest is in the management of hematologic malignancies in children and young adults, particularly those that are relapsed or carry high-risk molecular features. Her secondary clinical interest is in the management of nonmalignant hematologic disorders including immune-mediated cytopenias.",
    location: '400 Red Creek Dr.',
    phone: '(585) 486-0930',
  },
  {
    id: 20,
    name: 'Howard J. Silberstein',
    department: 'Surgical',
    specialty: ['Paronychia', 'Sarcomay', 'Tenosynovitis'],
    review: 4.9,
    intro: "Dr. Silberstein has extensive experience in resection of tumors located in eloquent regions of the brain and spinal cord and utilizes state-of-the-art technologies in the surgical treatment of children with brain tumors. In addition, Dr Silberstein is a member of the Cleft and Craniofacial team and has been involved in over 350 craniofacial cases.",
    location: '1445 Portland Ave.',
    phone: '(585) 273-1606',
  },
]

export default DoctorData