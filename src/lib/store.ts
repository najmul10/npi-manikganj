import { create } from "zustand";

interface UIState {
  admissionOpen: boolean;
  selectedDept: string;
  openAdmission: (dept?: string) => void;
  closeAdmission: () => void;
}

export const useUI = create<UIState>((set) => ({
  admissionOpen: false,
  selectedDept: "",
  openAdmission: (dept = "") => set({ admissionOpen: true, selectedDept: dept }),
  closeAdmission: () => set({ admissionOpen: false, selectedDept: "" }),
}));

// Central contact / site info
export const SITE = {
  name: "National Polytechnic Institute",
  shortName: "NPI",
  location: "Manikganj",
  fullNameBn: "ন্যাশনাল পলিটেকনিক ইনস্টিটিউট, মানিকগঞ্জ",
  tagline: "Excellence in Technical & Engineering Education",
  logo: "/npi-logo.jpg",
  email: "contact@npimanikganj.edu.bd",
  emailAlt: "info@npimanikganj.edu.bd",
  phone1: "01735782829",
  phone2: "01711349947",
  address: "173/3 Narangai, Manikganj Sadar, Manikganj, Dhaka, Bangladesh",
  addressShort: "Narangai, Manikganj Sadar, Manikganj",
  mapEmbed:
    "https://www.google.com/maps?q=Manikganj+Sadar+Manikganj+Bangladesh&output=embed",
  hours: [
    { day: "Sunday", time: "8:00 AM – 5:00 PM" },
    { day: "Monday", time: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
    { day: "Thursday", time: "8:00 AM – 5:00 PM" },
    { day: "Friday – Saturday", time: "Closed" },
  ],
  est: 2001,
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Academics", href: "#notices" },
  { label: "Faculty", href: "#faculty" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];
