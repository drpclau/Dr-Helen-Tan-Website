import { Condition, Procedure, SocialContribution, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Conditions', href: '#conditions' },
  { label: 'Procedures', href: '#procedures' },
  { label: 'Media', href: '#media' },
  { label: 'Social', href: '#social' },
  { label: 'Contact', href: '#contact' },
];

export const CONDITIONS: Condition[] = [
  {
    title: 'Cataracts',
    description: 'Clouding of the lens in the eye which leads to a decrease in vision. We offer advanced surgical solutions.',
    isMainInterest: true,
  },
  {
    title: 'Refractive Errors',
    description: 'Correction of myopia (nearsightedness), hyperopia (farsightedness), and astigmatism for clear vision without glasses.',
    isMainInterest: true,
  },
  {
    title: 'Glaucoma',
    description: 'A group of eye conditions that damage the optic nerve, the health of which is vital for good vision.',
  },
  {
    title: 'Children’s Eye Issues',
    description: 'Specialized care for pediatric conditions including progressive Myopia management.',
  },
  {
    title: 'Dry Eye',
    description: 'Diagnosis and advanced management of dry eye syndrome to restore tear stability and alleviate ocular discomfort.',
  },
  {
    title: 'Pterygium',
    description: 'A growth of the conjunctiva or mucous membrane that covers the white part of your eye over the cornea.',
  },
];

export const PROCEDURES: Procedure[] = [
  {
    title: 'SMILE Pro',
    description: 'Small Incision Lenticule Extraction. A minimally invasive, bladeless alternative to LASIK for gentle vision correction.',
    isSpecialInterest: true,
  },
  {
    title: 'LASIK',
    description: 'Laser-Assisted In Situ Keratomileusis. The most popular refractive surgery to correct vision issues.',
  },
  {
    title: 'Phacoemulsification',
    description: 'Advanced cataract surgery offering personalized vision restoration. We provide a range of premium Intraocular Lenses (IOLs) tailored to your specific lifestyle needs for optimal clarity.',
  },
  {
    title: 'ICL Implantation',
    description: 'Implantable Collamer Lens for high degrees of nearsightedness where laser surgery may not be suitable.',
  },
  {
    title: 'Intense Pulsed Light (IPL) Therapy',
    description: 'A cutting-edge, non-invasive treatment for chronic Dry Eye. It targets inflammation and Meibomian Gland Dysfunction (MGD) to effectively restore tear stability and comfort.',
  },
];

export const SOCIAL_CONTRIBUTIONS: SocialContribution[] = [
  {
    title: 'Vision for All',
    description: 'Annual free cataract surgery camp for underprivileged communities in rural areas.',
    date: '2023 - Present'
  },
  {
    title: 'School Eye Health',
    description: 'Regular screening programs in local primary schools to detect early myopia in children.',
    date: '2021 - Present'
  },
  {
    title: 'Global Outreach',
    description: 'Volunteer surgeon with Tzu Chi (TIMA) for outreach missions to Cambodia and Miri.',
    date: '2019 - 2025'
  }
];